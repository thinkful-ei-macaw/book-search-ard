import React from 'react'
import './BookCard.css'

export default function BookCard({ book: { image, title, subtitle, authors, description} }) {
  return (
    <section className="bookCardContainer">
      <article className="imageContainer">
        <img src={image} alt="book cover" />
      </article>
      <article className="textContainer">
        <h1 className="bookTitle">{title}</h1>
        <h2 className="bookSubtitle">{subtitle}</h2>
        <p className="author">Author: {authors}</p>
        <p className="description">{description}</p>
      </article>
    </section>
  )
}