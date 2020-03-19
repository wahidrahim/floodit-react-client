import React from 'react'

import './grid.styles.scss'

const Grid = () => {
  const gridStyle = {
    width: 300,
    height: 300,
    gridTemplateColumns: '50%50%',
    gridTemplateRows: '50%50%',
  }

  return (
    <div className="grid" style={gridStyle}>
      <div className="cell">1</div>
      <div className="cell">2</div>
      <div className="cell">3</div>
      <div className="cell">4</div>
    </div>
  )
}

export default Grid