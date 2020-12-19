import React, { Component } from 'react';
import styled from 'styled-components';
import { GlobalConsumer } from '../assets/context/Context';
import { IoMdCloseCircle as Close }  from 'react-icons/io';
import Notfound from '../components/NotFound';

class Modal extends Component {
  render() {
    
    // console.log(this.props.state.videoTrailer === undefined)
    // if(this.props.state.videoTrailer === undefined){
    //   return(
    //     <ModalWrap className="modals"  onClick={() => this.props.onClick()}>
    //     <div className="content-modal">
    //       <div className="header-modal">
    //         <Close className="close"/>
    //       </div>
    //       <div className="container">
    //         <div className="not-found">
    //             <h1>Videos not found aas</h1>
    //         </div>
    //       </div>
    //     </div>
    //   </ModalWrap>
    //   )
    // }
    const videoTrailer  = this.props.state.videoTrailer;
    return (
      <ModalWrap className="modals"  onClick={() => this.props.onClick()}>
        <div className="content-modal">
          <div className="header-modal">
            <Close className="close"/>
          </div>
          <div className="container">
            {console.log(this.props.state)}
            {
              videoTrailer === undefined ? (
                <div className="not-found">
                  <h2>No result found</h2>
                  <label>&#x2639; we are sorry, trailer is not found</label>
                </div>
              ) : (
              <iframe 
                title="Video Trailer"
                type="text/html"
                width="640" 
                height="360" 
                src={`https://www.youtube.com/embed/${videoTrailer.key}`} 
                frameBorder="0"
                allowFullScreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen" 
                msallowfullscreen="msallowfullscreen" 
                oallowfullscreen="oallowfullscreen" 
                webkitallowfullscreen="webkitallowfullscreen"
              />
              )
            }
            
          </div>
        </div>
      </ModalWrap>
    );
  }
}

export default GlobalConsumer(Modal);

const ModalWrap = styled.div`
  &.modals{
    z-index: 999;
    transition: .4s;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.8);
  }
  .content-modal{
    position: relative;
    margin: 2rem auto;
    margin-bottom: 6rem;
    max-width: 1140px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    animation-name: animatetop;
    animation-duration: 0.4s;  
    overflow: hidden;
    @keyframes animatetop {
      from {top:-300px; opacity:0}
      to {top:0; opacity:1}
    }
    .header-modal{
      display: flex;
      align-items: center;
      justify-content: center;
      svg{
        font-size: 40px;
        color: #e50914;
        cursor: pointer;
        transition: 0.3s ease-out;
        &:hover{
          color:  #ddd;
          transform: scale(1.1);
        }
      }
    }
    .container{
      margin: 0;
      display: block;
      padding: 1.5rem;
      flex-direction: row;       
      iframe{
        width: 100%;
      }
      .not-found{
        height: 220px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #F4F4F4;
      }
    }
  }
`;