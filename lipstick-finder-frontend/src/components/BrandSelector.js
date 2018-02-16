import React from 'react'

const BrandSelector = ({lipsticks, handlesSelect}) => {

  return (
    <div className='brand-selector'>
      <select onChange={handlesSelect}>
        <option value='all'>all</option>
        {selectHelper(lipsticks).map(b => <option value={b}>{b}</option>)}
      </select>
    </div>
  )
}

function selectHelper (lipsticks) {
  let brands = lipsticks.map(lip => lip.brand)
  brands = [...new Set(brands)].sort()
  return brands 
}

export default BrandSelector