import React, { Component } from 'react'
import styled from 'styled-components';
import { GlobalConsumer } from '../assets/context/Context';
import Cards from '../components/Cards';
import GenreList from '../components/GenreList';
import Hero from '../components/Hero';
import { API } from '../services/Service';

class Templates extends Component {
  constructor(props){
    super(props);
    this.state = {
      type: this.props.value,
      tempSortby: false,
      sortby: "popularity.desc",
      tempGenre: false,
      genreChecked: false
    }
  }

  componentDidMount(){
    console.log(this.state.value)
    this.props.getDataContent(this.props.value, 'popularity.desc', false, 1);
    this.props.getGenreList(API.getGenreListMovie);
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      tempSortby: e.target.value
    })
  }

  handleSubmitFilter = (e) => {
    const { type, tempSortby, tempGenre} = this.state;
    e.preventDefault();
    this.setState({
      ...this.state,
      genreChecked: tempGenre,
      sortby: tempSortby
    })
    this.props.submitFilter(type,tempSortby,tempGenre, 1);
  } 

  handleGenre = (data) => {
    this.setState({
      ...this.state,
      tempGenre: data
    })
  }

  render() {
    const { type, sortby, genreChecked } = this.state;
    return (
      <MovieWrap>
        <Hero title={this.props.value}/>
        <section>
          <div className="movies">
            <aside className="movies-sidemenu">
              <h2 className="title-sidemenu">
                Popular Movies
              </h2>
              <div className="sort">
                <h4 className="title-sort">Sort Result By</h4>
                <select name="sortby" onChange={this.handleChange} id="">
                  <option value="popularity.desc">Popularity Descending</option>
                  <option value="popularity.asc">Popularity Ascending</option>
                  <option value="vote_average.desc">Rating Descending</option>
                  <option value="vote_average.asc">Rating Ascending</option>
                  <option value="release_date.desc">Release Descending</option>
                  <option value="release_date.asc">Release Ascending</option>
                  <option value="original_title.desc">Title (Z-A)</option>
                  <option value="original_title.asc">Title (A-Z)</option>
                </select>
              </div>
              <GenreList
                data={this.props.state.genreList}
                onSelected={ (data) => this.handleGenre(data)}
              />
              <button className="submit-filter" onClick={this.handleSubmitFilter}>Filter</button>
            </aside>
            <div className="movies-content">
              <h2 className="title-content">
                Result Movies
              </h2>
              <Cards 
                data={this.props.state.dataContent}
              />
              <div className="pagination-wrap">
                <div className="pagination">
                  <button className="prev" onClick={() => this.props.prevPage(type, sortby, genreChecked)}>Prev</button>
                  <span className="page">{this.props.state.pageActive}</span>
                  <button className="next" onClick={() => this.props.nextPage(type, sortby, genreChecked)}>Next</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MovieWrap>
    )
  }
}

export default GlobalConsumer(Templates);

const MovieWrap = styled.main`
  background: #000000;
  section{
    background: #22211F;
    margin: -140px auto 0 auto;
    max-width: 1140px;
  }
  .movies{
    /* height: 100vh; */
    display: grid;
    grid-template-columns: 25% auto;
    gap: 1rem;
    .movies-sidemenu{
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
      border: 1px solid #393534;
      padding: 1rem 1.5rem;
      .title-content{
        color: #ffffff;
      }
      
    }
  }
  .pagination-wrap{
    background: red;
    display: flex;
    align-items: flex-end;
    vertical-align: middle;
    padding: 0rem 4rem;
    @media (min-width: 1024px) {
      margin: 0 6rem;
    }
    @media (max-width: 640px) {
      padding: 0 1rem;
    }
    .pagination{
      margin: auto;
      @media (max-width: 640px) {
        margin: 1rem auto;
        width: 100%;
      }
      display: flex;
      vertical-align: middle;
      justify-content: space-between;
      border-radius: 0.25rem;
      button{
        outline: none;
        border-radius: 0.25rem;
        border: 2px solid #ddd;
        height: 40px; 
        width: 40px;
        cursor: pointer;
        transition: 0.3s ease-in-out;
      }
      button:hover{
        background-color: yellow;
        color: white;
      }
      .pages{
        display: inline;
        margin: auto 1rem;
      }
    }
  }
`;