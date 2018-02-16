import React from 'react'
import './App.css'

class MakeupItem extends React.Component {
  
  state = {
    front: true
  }
  
  handleClick = (event) => {
    if (event.target.id !== 'link') {
      this.state.front ? this.setState({ front: false}) : this.setState({ front: true})
    }
  }
  
  render () {
    return(
    <div 
    onClick={this.handleClick} className='makeup-item'>
      {this.state.front ? 
        <div>
          <h2>{this.props.lipstick.name}</h2>
          
          {this.props.lipstick.price > 0 ? <p>${parseInt(this.props.lipstick.price).toFixed(2)}</p> : <p>Price not available</p>}
          
          <img src={this.props.lipstick.image_link}/> </div> 
        : 
        <div>
          <h2>{this.props.lipstick.name}</h2>
          <p>{this.props.lipstick.description}</p>
          <a 
          id='link'
          target='_blank'  
          href={this.props.lipstick.product_link}>Buy
          </a>
        </div>
      }
      
      
    </div>
  )
  }
    
}

export default MakeupItem