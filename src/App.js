import React from 'react'
import Home from './components/Home'
import AdoptionPage from './components/AdoptionPage'
import { BrowserRouter, Route } from 'react-router-dom'

export default class App extends React.Component {
  state = {
    people: [],
    pets: [],
    adopting: false,
    error: null
  }

  // sets adopting state to true which will render adopting page
  adoptButtonClick() {
    console.log('click');
    this.setState({
      adopting: true
    })
  }


  render() {
    if (this.state.adopting === false) {
      return (
        <>
          <Home adoptButtonClick={() => this.adoptButtonClick()} />
        </>
      )
    }

    if (this.state.adopting === true) {
      return (
        <>
          <AdoptionPage />
        </>
      )
    }

  }

}





