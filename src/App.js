import './App.css';
import Header from './components/Header';
import { GlobalProvider } from './assets/context/Context';
import React from 'react';
import Router from './router/Router';

class App extends React.Component {
  render(){
    return (
      <>
        <Header />
        <Router />
      </>
    );
  }
}

export default GlobalProvider(App);
