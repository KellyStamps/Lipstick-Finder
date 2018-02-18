import React from 'react'

class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  }
  
  render(){
    return (
      <div className='search'>
        <input type='text' placeholder='Search' onChange={this.props.handleChange} />
      </div>
    )
  }
}

export default SearchBar