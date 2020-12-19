import React, { Component } from 'react';
import styled from 'styled-components';

class Cards extends Component {
  render() {
    const { results } = this.props.data;
    let urlString = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
    const notFound = 'https://raw.githubusercontent.com/restuba/youtube-movie-app/master/src/components/images/notfound.jpg';
    return (
      <CardsWrap>
        <div className="card-result">
            {
              !results ? null :
              (
                results.map(item => {
                  return(
                    <div className="card" key={item.id} onClick={(id) => this.props.onClick(item.id)}> 
                      <div className="movie">
                        <div className="movie-image">
                          <img src={item.poster_path === null ? notFound : urlString+item.poster_path} alt="Sample" />
                        </div>
                        <div className="movie-body">
                          <p>{item.title}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
              )
            }
        </div>
       
      </CardsWrap>
    );
  }
}

export default Cards;

const CardsWrap = styled.div`
  width: 100%;
  .card-result{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    @media (max-width: 767px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 576px) {
      grid-template-columns: 100%;
    }
  }
  .card{
    background: transparent;
    color: #ffffff;
    img{
      width: 100%;
    }
  }
`;