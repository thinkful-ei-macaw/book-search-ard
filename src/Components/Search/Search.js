import React, { Component } from 'react'
import './Search.css'

class Search extends Component {
  state = {
    name: ''
  }

  //build local submit function
  handleInputChange = (e) => {
    // console.log(e.target.value);
    this.setState({ 
      [e.target.name]: e.target.value
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    const { name } = e.target
    this.props.handleSearch(name.value);
  }

  render() {
    return (
      <div>
        <form 
          className="searchForm"
          onSubmit={this.handleFormSubmit}>
          <label htmlFor="name">Search Books</label>
          <br />
          <input 
            className="searchInput"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange} />
          <button
            className="searchBtn"
            type="submit">Search
          </button>
        </form>
      </div>
    )
  }
}

export default Search;
