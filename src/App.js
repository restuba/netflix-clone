import './App.css';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/movie/Movie';
import Tv from './pages/tv/Tv';
import Notfound from './pages/Notfound';
import { GlobalProvider } from './assets/context/Context';
import DetailMovie from './pages/movie/DetailMovie';
import React from 'react';
import MoviePlaying from './pages/movie/MoviePlaying';
import Upcoming from './pages/movie/Upcoming';
import TopRated from './pages/movie/TopRated';
import AiringToday from './pages/tv/AiringToday';
import OnTv from './pages/tv/OnTv';
import TopRatedTv from './pages/tv/TopRatedTv';
import DetailTv from './pages/tv/DetailTv';

class App extends React.Component {
  render(){
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={ Home } /> 
          <Route exact path="/movie" component={ Movie } /> 
          <Route exact path="/movie/now-playing" component={ MoviePlaying } /> 
          <Route exact path="/movie/upcoming" component={ Upcoming } /> 
          <Route exact path="/movie/top-reated" component={ TopRated } /> 
          <Route exact path="/movie/:id" component={ DetailMovie } />
          <Route exact path="/tv" component={ Tv } /> 
          <Route exact path="/tv/airing-today" component={ AiringToday } /> 
          <Route exact path="/tv/on-the-air" component={ OnTv } /> 
          <Route exact path="/tv/top-rated" component={ TopRatedTv } /> 
          <Route exact path="/tv/:id" component={ DetailTv } /> 
          <Route component={ Notfound } /> 
        </Switch>
      </>
    );
  }
}

export default GlobalProvider(App);
