import React, { Component } from 'react'
import styled from 'styled-components'
import { GlobalConsumer } from '../assets/context/Context'
import Hero from '../components/Hero'
import Sliders from '../components/Sliders'
import { API } from '../services/Service'

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      discoverData: false,
      dramaData: false,
      discoverSelected: API.getDiscoverStreaming,
      dramaSelected: API.getMovieDrama
    }
  }
  componentDidMount(){
    this.getDiscover(this.state.discoverSelected)
    this.getDrama(this.state.dramaSelected)
  }

  getDiscover = async (path) => {
    await API.getDiscover(path).then(result => {
      this.setState({
        ...this.state,
        discoverData: result
      })
    })
  }

  getDrama = async (path) => {
    await API.getDiscover(path).then(result => {
      this.setState({
        ...this.state,
        dramaData: result
      })
    })
  }

  handleGetDiscover = e => {
    this.setState({
      discoverSelected: e.target.value
    })
    this.getDiscover(e.target.value)
  }

  handleGetDrama = e => {
    this.setState({
      dramaSelected: e.target.value
    })
    this.getDrama(e.target.value)
  }

  render() {
    return (
      <HomeWrap>
        <Hero 
          title="Welcome.
          Millions of movies, TV shows and people to discover. Explore now."
        />
        <section>
          <Sliders
            title="What's Popular"
            data={this.state.discoverData}
          >
          <div className="selector">
            <select value={this.state.discoverSelected}  onChange={this.handleGetDiscover}>
              <option value={API.getDiscoverStreaming}>Streaming</option>
              <option value={API.getDiscoverOnTv}>On TV</option>
              <option value={API.getDiscoverForRent}>For Rent</option>
              <option value={API.getDiscoverInTheaters}>In Theaters</option>
            </select>
          </div>
          </Sliders>

          <Sliders
            title="Best Drama"
            data={this.state.dramaData}
          >
          <div className="selector">
            <select value={this.state.dramaSelected}  onChange={this.handleGetDrama}>
              <option value={API.getMovieDrama}>Movie</option>
              <option value={API.getTvDrama}>On TV</option>
            </select>
          </div>
          </Sliders>

        </section>
      </HomeWrap>
    )
  }
}

const HomeWrap = styled.main`
  background: #000000;
  section{
    background: #22211F;
    margin: -140px auto 0 auto;
    max-width: 1140px;
    @media (max-width: 1140px) {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
`;

export default GlobalConsumer(Home);