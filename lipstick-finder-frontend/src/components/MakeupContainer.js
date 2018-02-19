import React from 'react'
import MakeupList from './MakeupList'
import FavoritesList from './FavoritesList'
import SearchBar from './SearchBar'

class MakeupContainer extends React.Component {
  
  state = {
    allLipstick: [], 
    search: ""
  }
  
  componentDidMount(){
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick')
    .then(res => res.json())
    .then(data => this.setState({ allLipstick: data }))
  }
  
  handleChange = (event) => {  
    let value = event.target.value
    this.setState({ search: value})
  }
  
  getFilteredResults = () => {
    return this.state.allLipstick.filter(lip => lip.description.toLowerCase().includes(this.state.search.toLowerCase()))
  }
  
  render(){
    return(
    <div className='makeup-container'>
      <SearchBar handleChange={this.handleChange}/>
      {this.props.showing === 'all' ?
        <MakeupList lipstick={this.getFilteredResults()}/>
        :
        <FavoritesList />
      }
      
    </div>
  )}
}

export default MakeupContainer