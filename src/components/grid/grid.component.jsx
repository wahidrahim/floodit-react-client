import React from 'react'

import { perfectSquareNumberedCellComponents } from '../../utils/prop-validators'

import './grid.styles.scss'

const Grid = ({ children }) => {
  const gridStyles = {
    get gridTemplateColumns() {
      const numberOfCells = children.length
      const cellSize = numberOfCells / Math.sqrt(numberOfCells)
      let columns = ''

      for (let i = 0; i < cellSize; i++) {
        columns += `${100 / cellSize}%` // '50%50%', '25%25%25%25%', etc.
      }

      return columns
    },
    get gridTemplateRows() {
      return this.gridTemplateColumns // Same as columns, makes each Cell a square
    }
  }

  return (
    <div className="grid" style={gridStyles}>
      {children.map(cell => cell)}
    </div>
  )
}



Grid.propTypes = {
  children: perfectSquareNumberedCellComponents
}

export default Grid
