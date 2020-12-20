import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NotFound from '../components/NotFound'
import Content from '../pages/Content'
import Home from '../pages/Home'
import DetailContent from '../pages/DetailContent'

export default function Router() {
  return (
      <Switch>
        <Route exact path="/" component={ Home } /> 
        <Route exact path="/movie">
          <Content subtitle="POPULAR" type="movie/popular" base="movie"/>
        </Route> 
        <Route exact path="/movie/now-playing">
          <Content subtitle="NOW PLAYING" type="movie/now_playing" base="movie"/>
        </Route>
        <Route exact path="/movie/upcoming">
          <Content subtitle="UPCOMING" type="movie/upcoming" base="movie"/>  
        </Route> 
        <Route exact path="/movie/top-reated">
          <Content subtitle="TOP RATED" type="movie/top_rated" base="movie"/>  
        </Route> 
        <Route exact path="/movie/:id" component={ DetailContent } />

        <Route exact path="/tv">
          <Content subtitle="TV POPULAR" type="tv/popular" base="tv"/>
        </Route> 
        <Route exact path="/tv/airing-today">
          <Content subtitle="TV AIRING TODAY" type="tv/airing_today" base="tv"/>
        </Route> 
        <Route exact path="/tv/on-the-air">
          <Content subtitle="TV ON THE AIR" type="tv/on_the_air" base="tv"/>
        </Route> 
        <Route exact path="/tv/top-rated">
          <Content subtitle="TV TOP RATED" type="tv/top_rated" base="tv"/>
        </Route> 
        <Route exact path="/tv/:id" component={ DetailContent } /> 
        <Route component={ NotFound } /> 
      </Switch>
  )
}
