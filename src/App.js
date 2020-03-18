import React, { Component } from 'react'
import Search from './Components/Search/Search'
import Display from './Components/Display/Display'
import Filters from './Components/Filters/Filters'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSearch: '',
      formEntry: '',
      books: [],
      error: null, 
      apiKey: 'AIzaSyAyAXbpeF38tbk6iI01sm2i-FwAaxkltAI'
    }
  }


  // get the form data to state

// This will be my api call
  handleSearch = (name) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${name}&key=${this.state.apiKey}`)
    .then(res => {
      if (!res.ok) {
        // get the error message from the response
        return res.json().then(error => {
          throw error
        })
      }
      return res.json()
    })
    .then(data => {
      let books = data.items.map(book => {
        // return an edited object for each book item
        return {
          id: book.id,
          title: book.volumeInfo.title,
          subtitle: book.volumeInfo.subtitle,
          authors: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          image: book.volumeInfo.imageLinks.smallThumbnail
        }
      })
      this.setState({
        books,
        currentSearch: name
      })
    })
  }

  handleFilter = (filter) => {
    console.log(filter)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.currentSearch}&filter=${filter}&key=${this.state.apiKey}`)
    .then(res => {
      if (!res.ok) {
        // get the error message from the response
        return res.json().then(error => {
          throw error
        })
      }
      return res.json()
    })
    .then(data => {
      let books = data.items.map(book => {
        // return an edited object for each book item
        return {
          id: book.id,
          title: book.volumeInfo.title,
          subtitle: book.volumeInfo.subtitle,
          authors: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          image: book.volumeInfo.imageLinks.smallThumbnail
        }
      })
      this.setState({
        books
      })
    })
  }

  render() {
    const { books } = this.state
    return (
      <main className='App'>
        <h1 className="appName">Google Book Search</h1>
        <Search 
          handleSearch={this.handleSearch}
        />
        <Filters
          handleFilter={this.handleFilter} 
        />
        <Display
          books={books}
          />
      </main>
    )
  }

}

export default App;
