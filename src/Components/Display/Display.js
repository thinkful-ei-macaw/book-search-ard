import React, { Component } from 'react'
import BookCard from './BookCard/BookCard'

export class Display extends Component {


  render() {

    const allBooks = this.props.books.map(book => {
      return (
        <BookCard 
          key={book.id}
          book={book} />
      )
    })
    // console.log(allBooks);
    
    return (
      <section>
        {allBooks}
      </section>
    )
  }
}

export default Display
