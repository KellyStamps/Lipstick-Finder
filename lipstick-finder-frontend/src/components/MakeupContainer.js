import React from 'react'
import MakeupList from './MakeupList'

class MakeupContainer extends React.Component {
  
  state = {
    allLipstick: []
  }
  
  componentDidMount(){
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick')
    .then(res => res.json())
    .then(data => this.setState({ allLipstick: data }))
  }
  
  render(){
    return(
    <div className='makeup-container'>
      <MakeupList lipstick={this.state.allLipstick}/>
    </div>
  )}
}

export default MakeupContainer