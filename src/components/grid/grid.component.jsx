import React from 'react'

import './grid.styles.scss'

const Grid = ({ children }) => {
  const gridStyles = {
    width: 300,
    height: 300,
    get gridTemplateColumns() {
      const numberOfCells = children.length
      const gridSize = numberOfCells / 2
      let columns = ''

      for (let i = 0; i < gridSize; i++) {
        columns += `${100 / gridSize}%`
      }

      return columns
    },
    get gridTemplateRows() {
      return this.gridTemplateColumns
    }
  }

  return <div className="grid" style={gridStyles}>
    {children.map(cell => cell)} 
  </div>
}

export default Grid
