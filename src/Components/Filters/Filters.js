import React, { Component } from 'react'
import './Filters.css'

export class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'}
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  handleFilterSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    
    const { value } = e.target
    this.props.handleFilter(value);
  }

  render() {

    return (
      <div>
        <form 
          className="filterForm"
          onChange={this.handleFilterSubmit}>
          <label htmlFor="filterTypes">Filters</label>
          <br />
          <select 
            className="filterSelector" 
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value="partial">Partial Text Available</option>
            <option value="full">
              Full Text Available
            </option>
            <option value="free-ebooks">
              Free eBook Available
            </option>
            <option value="ebooks">
              eBook Available
            </option>
          </select>
          <input className="filterBtn" type="submit" />
        </form>
      </div>
    )
  }
}

export default Filters
