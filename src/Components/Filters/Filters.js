import React, { Component } from 'react'

export class Filters extends Component {

  render() {

    return (
      <div>
        <form action="">
          <label htmlFor="filterTypes">Filters</label>
          <br />
          <select className="filterSelector" id="">
            <option value="pdfAvailable">PDF Available</option>
            <option value="eBookAvailable">
              Ebook Available
            </option>
            <option value="textToSpeechAvailable">
              Text To Speech Available
            </option>
          </select>
          <input className="filterBtn" type="submit" />
        </form>
      </div>
    )
  }
}

export default Filters
