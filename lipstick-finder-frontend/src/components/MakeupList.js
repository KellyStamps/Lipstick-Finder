import React from 'react'
import MakeupItem from './MakeupItem'
import BrandSelector from './BrandSelector'
import SearchBar from './SearchBar'
import './App.css'

class MakeupList extends React.Component {
  
  state = {
    showing: 'all'
  }
  
  handlesSelect = (event) => {
    event.preventDefault()
    this.setState({
      showing: event.target.value
    })
  }
  
  renderHelper = () => {
    let list;
    
    if (this.state.showing !== 'all') {
      list = this.props.lipstick.filter(lip => lip.brand == this.state.showing).sort(function(a, b) {
        return a.price - b.price;
      })
    } else {
      list = this.props.lipstick.sort(function(a, b) {
        return a.price - b.price;
      })
    }
    return list.map(lip => <MakeupItem lipstick={lip} key={lip.id}/>)
  }
  
  render(){
    return(
      <div className='makeup-list'>
        <BrandSelector lipsticks={this.props.lipstick}
        handlesSelect={this.handlesSelect}
        />
        {this.renderHelper()}
      </div>
  )}
}

export default MakeupList