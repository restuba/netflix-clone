import React, { Component } from 'react';
import styled from 'styled-components';
import { GlobalConsumer } from '../../assets/context/Context';
import Hero from '../../components/Hero';
import Modal from '../../components/Modal';
import { IoIosPlay as PlayBtn, IoMdLink as Visit } from 'react-icons/io';

class DetailTv extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }

  componentDidMount(){
    this.props.getDetails('tv',this.props.match.params.id);
    this.props.getVideo('tv', this.props.match.params.id);
  }

  componentWillUnmount(){
    this.props.clearDetails();
  }

  openModal = () => {
    this.setState({isOpen: true})
  }

  render() {
    const { 
      title,
      year, 
      release_date,
      production_companies,
      genres,
      runtime,
      vote_average,
      tagline,
      overview,
      poster_path,
      homepage
    } = this.props.state.detailsData;
    if(this.state.isOpen){
      return <Modal onClick={() => this.setState({ isOpen: false })}/>
    }
    let urlString = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
    let notFound = 'https://raw.githubusercontent.com/restuba/youtube-movie-app/master/src/components/images/notfound.jpg';
    return (
      <>
        <DetailMovieWrap>
          <Hero 
            title=""
            bg={poster_path === undefined || poster_path  === null ? null :  urlString+poster_path}
          />
          <section>
            <div className="details">
              <div className="poster-details">
                <img src={poster_path  === null ? notFound : urlString+poster_path} alt="poster" />
              </div>
              <div className="header-details">
                <div className="header-title">
                  <h1>{title}<span> ({year})</span></h1>
                  <p className="sub-title">{release_date} ({production_companies}) | {genres} |  {runtime}</p>
                </div>
                <div className="header-action">
                   <button className="score">
                     <div className="action-btn">{vote_average}%</div>
                     User Vote
                   </button>
                   
                   <button className="play-btn" onClick={this.openModal}>
                     <div className="action-btn"><PlayBtn /></div>
                     Play Trailer
                   </button>
                </div>
                <div className="header-info">
                  <em className="tagline">{tagline}</em>
                  <h3>Overview</h3>
                  <p className="overview">{overview}</p>
                </div>
                <div className="visit">
                  <a href={homepage} target="_blank">
                    <Visit /> Visit Homepage
                  </a>
                </div>
                
              </div>
            </div>
          </section>
        </DetailMovieWrap>
      </>
    );
  }
}

export default GlobalConsumer(DetailTv);

const DetailMovieWrap = styled.div`
  background: #000000;
  /* height: 200vh; */
  position: relative;
  width: 100%;
  section{
    position: absolute;
    background: transparent;
    top: 180px;
    width: 100%;
    .details{
      background: #22211F;
      max-width: 1140px;
      margin: 0 auto 4rem auto;
      display: flex;
      justify-content: center;
      
      @media (max-width: 1140px){
        margin-left: 2rem;
        margin-right: 2rem;
      }
      @media (max-width: 768px){
        flex-direction: column;
        .poster-details{
          height: 240px;
          img{
            height: 100%;
            object-fit: cover;
          }
        }
      }
      .poster-details{
        flex: 1;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .header-details{
        padding: 1rem 2rem;
        flex: 2;
        color: #ffff;
        @media (max-width: 920px) {
          flex: 1;
        }
        @media (max-width: 768px){
          padding: 1rem 1.5rem;
        }
        .header-title{
          h1{
            font-size: 2.25em;
            font-weight: 600;
            margin-block-end: 0;
            span{
              font-size: 0.8em;
              font-weight: 300;
              color: #F4F4F4;
            }
          }
          .sub-title{
            line-height: 1.5rem;
          }
        }
        .header-action{
          height: 72px; 
          display: flex;
          justify-content: flex-start;
          @media (max-width: 420px) {
            flex-direction: column;
          }
          .score, .play-btn{
            display: flex;
            justify-content: flex-start;
            outline: none;
            align-items: center;
            border: none;
            color: #F4F4F4;
            background: transparent;
            .action-btn{
              background: #1d1c1a;
              height: 60px;
              width: 60px;
              border: 2px solid #e50914;
              font-size: 1.25em;
              font-family: cursive;
              border-radius: 50%;
              margin-right: 8px;
              display: flex;
              justify-content: center;
              align-items: center;
              @media (max-width: 767px) {
                width: 40px;
                height: 40px;
              }

            }
          }
        }
        .header-info{
          margin: 1.25rem 0;
          line-height: 1.5rem;

          .tagline{
            margin: 20px 0;
            color: #bbb;
          }
          h3{
            margin-top: 1.5rem;
          }
          .overview{
            font-size: 14px;
            font-weight: 300;
            margin: 0;
          }
        }
        .visit{
          margin: 2.5rem 0;
          a{
            padding: 12px 16px;
            background: #e50914;
            display: inline-flex;
            text-decoration: none;
            color: #F4F4F4;
            svg{
              margin-right: 8px;
            }
            @media (max-width: 767px) {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
      }
    }
  }
`;