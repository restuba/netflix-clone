import React, { Component } from 'react'
import styled from 'styled-components';
import { GlobalConsumer } from '../../assets/context/Context';
import Cards from '../../components/Cards';
import GenreList from '../../components/filter/GenreList';
import Hero from '../../components/Hero';
import { API } from '../../services/Service';
import SortBy from '../../components/filter/SortBy';
import Pagination from '../../components/Pagination';

class Movie extends Component {
  constructor(props){
    super(props);
    this.state = {
      defaultType: 'movie/popular',
      type: 'movie',
      tempSortby: false,
      sortby: "popularity.desc",
      tempGenre: false,
      genreChecked: false
    }
  }

  componentDidMount(){
    this.props.getMovies(this.state.defaultType);
    this.props.getGenreList(API.getGenreListMovie);
  }

  componentWillUnmount(){
    this.props.clearContent();
  }

  handleShortBy = e => {
    this.setState({
      ...this.state,
      tempSortby: e.target.value
    })
  }

  handleSubmitFilter = (e) => {
    const { type, tempSortby, tempGenre} = this.state;
    this.setState({
      ...this.state,
      genreChecked: tempGenre,
      sortby: tempSortby,
      defaultType: type
    })
    this.props.submitFilter(type,tempSortby,tempGenre, 1);
  } 

  handleGenre = (data) => {
    this.setState({
      ...this.state,
      tempGenre: data
    })
  }

  goDetail = (id) => this.props.history.push('movie/'+id);

  render() {
    const { defaultType, sortby, genreChecked } = this.state;
    const { genreList, dataContent } = this.props.state;
    return (
      <MovieWrap>
        <Hero title="See what's next. WATCH ANYWHERE. CANCEL ANYTIME."/>
        <section>
          <div className="movies">
            <aside className="movies-sidemenu">
              <h2 className="title-sidemenu">Popular Movies</h2>
              <SortBy onChange = {this.handleShortBy} />
              <GenreList data={genreList} onSelected={(data) => this.handleGenre(data)}/>
              <button className="submit-filter" onClick={this.handleSubmitFilter}>Filter</button>
            </aside>
            <div className="movies-content">
              <h2 className="title-content">Result Movies</h2>
              <Cards data={dataContent} onClick={(id) => this.goDetail(id)} />
              { defaultType === 'movie/popular' ? 
                (
                  <Pagination type={defaultType} />
                ):
                (
                  <Pagination type={defaultType} sortby={sortby} genreChecked={genreChecked} />
                ) 
              }
            </div>
          </div>
        </section>
      </MovieWrap>
    )
  }
}

export default GlobalConsumer(Movie);

const MovieWrap = styled.main`
  background: #000000;
  height: 100%;
  section{
    margin: -140px auto 140px auto;
    max-width: 1140px;
    @media (max-width: 1140px) {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
  .movies{
    display: grid;
    grid-template-columns: 25% auto;
    gap: 1rem;
    @media (max-width: 767px) {
      grid-template-columns: 100%;
    }
    .movies-sidemenu{
      background: #22211F;
      border: 1px solid #393534;
      padding: 1rem 1.5rem;
      .title-sidemenu{
        color: #ffffff;
      }
      .sort{
        .title-sort{
          color: #F4F4F4;
          font-weight: 400;
          margin: 0.5rem 0;
        }
        select{
          background: #393534;
          display: block;
          padding: 12px 16px;
          outline: none;
          color: #ffffff;
          position: relative;
          width: 100%;
        }
      }
      .submit-filter{
        margin-top: 2rem;
        padding: 12px 16px;
        background: #e50914;
        border: none;
        color: #ffffff;
        text-decoration: none;
        width: 100%;
      }
    }
    .movies-content{
      background: #22211F;
      border: 1px solid #393534;
      padding: 1rem 1.5rem;
      .title-content{
        color: #ffffff;
      }      
    }
  }
`;