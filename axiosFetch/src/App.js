import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Main from './components/Main'

export default class App extends Component {
  state = {
    data : []
  }

  componentDidMount () {
      this.fetchCatData()
  }

  async fetchCatData () {
    const url = 'https://api.thecatapi.com/v1/breeds'
    try {
      const response = await axios.get(url)
      const data = await response.data
      this.setState({data})
    } catch (error) {
        console.error(error)
    }
  }

  render() {
    return (
      <div className="app">
          <h1>30 Days Of React</h1>
          <p className="title-cat">Cats Paradise</p>
          <p className="desc-cat">There are 67 cat breeds</p>

          <Main data={this.state.data}/>
      </div>
    )
  }
}
