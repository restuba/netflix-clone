import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/images/netflix-logo.png';
import LogoSmall from '../assets/images/netflix-small-logo.png';
import { IoIosMenu as MenuIcon } from 'react-icons/io';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.navWrapper = React.createRef();
    this.navSticky = React.createRef();
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleMenuToggle = () => {
    const elementNav = this.navWrapper.current;
    elementNav.classList.toggle("active");
  }

  closeMenu = () => {
    const elementNav = this.navWrapper.current;
    elementNav.classList.remove("active");
  }

  handleScroll = () => {
    const elementNav = this.navWrapper.current;
    const elementSticky = this.navSticky.current;
    if(window.pageYOffset > elementNav.offsetHeight){
      elementSticky.classList.add("sticky");
    }else{
      elementSticky.classList.remove("sticky");
    }
  }

  render() {
    return (
      <HeaderWrap>
        <div className="header">
          <div className="site-header top">
            <div className="wrapper top">
                <Link to="/" className="button">Sign in</Link>
            </div>
          </div>
          <div ref={this.navSticky} className="site-header bottom">
            <div className="wrapper bottom">
              <nav className="nav">
                <button className="nav__toggle" onClick={this.handleMenuToggle} type="button">
                  <MenuIcon />
                </button>
                <ul className="nav__wrapper" ref={ this.navWrapper }>
                  <li className="nav__item">
                    <Link to="/" onClick={this.closeMenu}>Home</Link>
                  </li>
                  <li className="nav__item">
                    <Link to="#" >Movies</Link>
                    <ul className="dropdown-list">
                      <li className="dropdown-item">
                        <Link to='/movie' onClick={this.closeMenu}>Popular</Link>
                      </li>
                      <li className="dropdown-item">
                        <Link to='/movie/now-playing' onClick={this.closeMenu}>Now Playing</Link>
                      </li>
                      <li className="dropdown-item">
                        <Link to='/movie/upcoming' onClick={this.closeMenu}>Upcoming</Link>
                      </li>
                      <li className="dropdown-item">
                        <Link to='/movie/top-reated' onClick={this.closeMenu}>Top Rated</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav__item">
                    <Link to="#">TV Shows</Link>
                    <ul className="dropdown-list">
                      <li className="dropdown-item">
                        <Link to='/tv' onClick={this.closeMenu}>Popular</Link>
                      </li>
                      <li className="dropdown-item">
                        <Link to='/tv/airing-today' onClick={this.closeMenu}>Airing Today</Link>
                      </li>
                      <li className="dropdown-item">
                        <Link to='/tv/on-the-air' onClick={this.closeMenu}>On TV</Link>
                      </li>
                      <li className="dropdown-item">
                        <Link to='/tv/top-rated' onClick={this.closeMenu}>Top Rated</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav__item">
                    <Link to="#" onClick={this.closeMenu}>More</Link>
                  </li>
                </ul>
              </nav>
              <Link className="logo-brand" to="/">
                <img className="logo-lg" src={Logo} alt="netflix" />
                <img className="logo-sm" src={LogoSmall} alt="netflix" />
              </Link>
            </div>
          </div>

        </div>
      </HeaderWrap>
    )
  }
}

const HeaderWrap = styled.header`
  position: absolute;
  width: 100%;
  .header{
    position: relative;
    height: auto;
    z-index: 99;
    @media (max-width: 767px) {
      height: 70px;
      position: fixed;
      width: 100%;
      background-color: #22211F;
    }
  }
  .site-header{
    .wrapper{
      max-width: 1140px;
      margin: auto;
      @media (max-width: 1140px) {
        padding: 0 2rem;
      }
      @media (max-width: 920px) {
        padding: 0 1rem;
      }
      .logo-brand{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        img{
          height: 32px;
        }
        box-sizing: border-box;
        .logo-sm{
          display: none;
        }
        .logo-lg{
          display: block;
          height: 48px;
        }
        @media (max-width: 767px) {
          top: 50%;
          transform: translate(-50%, 50%);
          .logo-sm{
            display: block;
          }
          .logo-lg{
            display: none;
            
          }
        }
      }
      .nav{
        display: block;
        width: 100%;
        .nav__wrapper {
          padding-inline-start: 0;
          margin-block-start: 0;
          margin-block-end: 0;

          @media (min-width: 768px) {
            display: flex;
          }
          
          .nav__item {
            list-style: none;
            position: relative;
            &:nth-child(2){
              margin-right: auto;
            }
            &:nth-child(3){
              margin-left: auto;
            }
            a {
              display: block;
              padding: 16px 20px;
              text-decoration: none;
              color: #ffffff;
              position: relative;
              text-align: center;

              &:after{
                content: "";
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                height: 3px;
                background: #e50914;
                width: 0;
                transition: 0.3s ease-out;
              }
              &:hover{
                &:after{
                  width: 100%;
                }
              }
            }
            .dropdown-list{
              display: none;
              position: absolute;
              background: #22211F;
              left: 50%;
              transform: translateX(-50%);
              flex-direction: column;
              justify-content: center;
              align-items: stretch;
              padding-inline-start: 0;
              width: auto;
              @media (max-width: 767px) {
                background: #22211F;
                border: 1px solid rgba(178,178,178,0.2);
                display: grid;
                grid-template-columns: 1fr 1fr;
                flex-direction: row;
                width: 100%;
                position: relative;
                .dropwdown-item{
                  display: block;
                  a{ 
                    padding: 0;
                  }
                }
              }

              .dropdown-item {
                list-style: none;
                a{
                  text-align: center;
                  padding: 1rem 2rem;
                }

              }
            }
            &:hover .dropdown-list{
              display: flex;
              @media (max-width: 767px) {
                display: grid;
              }
            }
          }
          @media (max-width: 767px) {
            position: fixed;
            top: 0;
            height: 100vh;
            right: 0;
            left: 0;
            z-index: -1;
            background-color: #393534;
            visibility: hidden;
            opacity: 0;
            transition: 0.3s ease-out;
            display: grid;
            .nav__item{
              display: block;
              justify-content: center;
              align-items: center;
              width: 100%;
              margin: auto;
              button{
                width: 100%;
                margin: 0!important;
              }
            }
            &.active {
              visibility: visible;
              opacity: 1;
              transform: translateY(0);
              z-index: 2;
              overflow-y: scroll;
              display: grid;
              margin: auto;

            }
          }
        }
        .nav__toggle{
          display: none;
          @media (max-width: 767px) {
            display: block;
            position: absolute;
            left: 2rem;
            top: 1rem;
            z-index: 99;
            padding: 12px 16px;
            background: #e50914;
            color: #ffffff;
            outline: none;
            border: none;
          }
        }
      }
      &.bottom{
        position: relative;
        display: flex;
      }
      &.top {
        display: flex;
        padding: 12px 2rem;

        @media (max-width: 767px) {
          padding: 0;

        }
        .button{
          padding: 12px 16px;
          margin-left: auto;
          background: #e50914;
          color: #ffffff;
          text-decoration: none;

          @media (max-width: 767px) {
            position: absolute;
            top: 1rem;
            right: 2rem;
          }
        }
      }
    }
    &.top{
      background: transparent;
      border-bottom: 1px solid rgba(178,178,178,0.2)
    }
    &.bottom{
      background: transparent;
      box-sizing: border-box;
      transition: 0.3s;
      @media (min-width: 767px) {
        padding: 0 16vw;

      }
      &.sticky {
        position: fixed;
        top: 0;
        width: 100%;
        padding: 0;
        background: #22211F;
        

        @media (min-width: 767px) {
          .nav__item a{
            transition: 0.3s;
            padding: 24px 16px!important;
          }
          .logo-lg{
            display: block;
            height: 32px;
            transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
          }
        }
      }
    }
  }
`;
