import React, { Component } from 'react';
import styled from 'styled-components';

export default class Sliders extends Component {
  render() {
    const { results } = this.props.data;
    const urlString = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
    const notFound = 'https://raw.githubusercontent.com/restuba/youtube-movie-app/master/src/components/images/notfound.jpg';
    return (
      <SlidersWrap>
        <div className="headings">
          <h3 className="heading">{this.props.title}</h3>
          <div className="selector-wrap">
            <div className="selector">
              {this.props.children}
            </div>
          </div>
        </div>
        <div className="sliders">
            {
              !results? null : 
              (
                results.map(item => {
                  return(
                  <div className="slide" key={item.id}>
                    <img className="swiper-img" src={item.poster_path === null ? notFound : urlString+item.poster_path} alt="movie" />
                  </div>
                  )
                })
              )
            }
            
          </div>
      </SlidersWrap>
    )
  }
}

const SlidersWrap = styled.div`
  background: #22211F;
  padding: 1rem 2rem;

  .headings{
    position: relative;
    color: #FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .heading{
      display: inline-block;
    }
    .selector-wrap{
      display: inline-block;
      select{
        padding: 12px 16px;
        background: transparent;
        color: #ffffff;
        text-decoration: none;
        outline: none;
        border: none;  
        option{
          background: #22211F;
          border: none;
          outline: none;
        }
      }
    }
  }
  .sliders{
    display: flex;
    flex-shrink: 0;
    overflow-x: scroll;
    flex-basis: 10;
    .slide{
      height: 100%;
    }
    
    img{
      width: 220px;
      min-height: 100%;
    }
  }
`;
