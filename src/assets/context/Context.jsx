import React, { createContext, Component } from 'react';
import { API } from '../../services/Service';

export const RootContext = createContext();

const Provider = RootContext.Provider;
export const GlobalProvider = Children => {
  return(
    class ParentComponent extends Component{
      constructor(props){
        super(props);
        this.state = {
          genreList: false,
          genreChecked: false,
          dataContent: false,
          totalPage: 0,
          totalResult: 0,
          pageActive: 1,
          detailsData: false,
          videoTrailer: false
        }
      }

      getDiscover = async (path) => {
        return await API.getDiscover(path);
      }

      getGenreList = async (path) => {
        await API.getGenreList(path).then(result => {
          this.setState({
            ...this.state,
            genreList: result
          })
        })
      }

      getDataContent = async (type, sortby, genre, page) => {
        return await API.getResultFilter(type, sortby, genre, page)
        .then(result => {
          this.setState({
            ...this.state,
            dataContent: result,
            totalPage: result.total_pages,
            totalResult: result.total_results
          })
        })
      }

      getMovies = async (path) => {
        return await API.getDiscover(path)
        .then(result => {
          this.setState({
            ...this.state,
            dataContent: result
          })
        })
      }

      prevPage = (type, sortby, genre) => {
        if(this.state.pageActive > 1){
          this.setState({
            ...this.state,
            pageActive: this.state.pageActive -1
          })
          this.getDataContent(type, sortby, genre, this.state.pageActive - 1)
        }
      }

      nextPage = (type, sortby, genre) => {
        console.log(type,sortby, genre)
        if(this.state.pageActive !== this.state.totalPage){
          this.setState({
            ...this.state,
            pageActive: this.state.pageActive + 1
          })
          this.getDataContent(type, sortby, genre, this.state.pageActive + 1)
        }
      }

      submitFilter = (type, sortby, genre, page) => {
        this.setState({
          ...this.state,
          pageActive: 1
        })
        this.getDataContent(type, sortby, genre, page);
      }

      getDetails = async (type, id) => {
        return await API.getDetails(type, id)
        .then(result => {
          let data = false;
          if(type === 'movie'){
            data = this.formatDataMovies(result);
          }else{
            data = this.formatDataTv(result);
          }
          this.setState({
            ...this.state,
            detailsData: data
          })
        })
      }

      formatDataTv(items){
        let year = items.first_air_date.substring(0,4);
        let release_date = items.first_air_date.replace(/-/g,'/');
        let production_companies = items.production_companies[0] ?items.production_companies[0].origin_country: null;
        let genres = items.genres.map(item => item.name).join(', ');
        let runtime = items.episode_run_time.toString();
        runtime = `${runtime}m`;
        let vote_average = items.vote_average * 10; 
        let poster_path = items.poster_path;
        let tempItems = {
          title: items.name,
          year,
          release_date,
          production_companies,
          genres,
          runtime,
          vote_average,
          tagline: items.tagline,
          overview: items.overview,
          poster_path,
          original_title: items.original_name,
          status: items.status,
          original_language: items.original_language,
          homepage: items.homepage
        };
        return tempItems;
      }

      formatDataMovies(items){
        let year = items.release_date.substring(0,4);
        let release_date = items.release_date.replace(/-/g,'/');
        let production_companies = items.production_companies[0] ?items.production_companies[0].origin_country: null;
        let genres = items.genres.map(item => item.name).join(', ');
        let runtime = items.runtime;
        let hour = Math.floor(runtime / 60);
        let minute = (runtime - hour * 60);
        runtime = `${hour}h ${minute}m`;
        let vote_average = items.vote_average * 10; 
        let poster_path = items.poster_path;
        let tempItems = {
          title: items.title,
          year,
          release_date,
          production_companies,
          genres,
          runtime,
          vote_average,
          tagline: items.tagline,
          overview: items.overview,
          poster_path,
          original_title: items.original_title,
          status: items.status,
          original_language: items.original_language,
          budget: items.budget
        };
        return tempItems;
      }

      clearDetails = () => {
        this.setState({
          ...this.state,
          detailsData: false
        })
      }

      clearContent = () => {
        this.setState({
          ...this.state,
          dataContent: false,
          totalPage: 0,
          pageActive: 1,
          totalResult: 0
        })
      }

      getVideo = async (type, id) => {
        return await API.getVideo(type, id)
        .then(result => {
          this.setState({
            ...this.state,
            videoTrailer: result.results[0]
          })
        })
      }

      render(){
        return(
          <Provider value = {
            {
              state: this.state,
              getGenreList: this.getGenreList,
              getDataContent: this.getDataContent,
              prevPage: this.prevPage,
              nextPage: this.nextPage,
              submitFilter: this.submitFilter,
              getDetails: this.getDetails,
              clearDetails: this.clearDetails,
              getVideo: this.getVideo,
              getMovies: this.getMovies,
              clearContent: this.clearContent,
              getDiscover: this.getDiscover
            }
          }>
            <Children {...this.props} />
          </Provider>
        );
      }
    }
  )
}


const Consumer = RootContext.Consumer;
export const GlobalConsumer = Children => {
  return(
    class ParentComponetn extends Component{
      render(){
        return(
          <Consumer>
            {
              value => {
                return(
                  <Children {...this.props} {...value} />
                )
              }
            }
          </Consumer>
        )
      }
    }
  )
}