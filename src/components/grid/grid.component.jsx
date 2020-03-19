import React from 'react'
import PropType from 'prop-types'

import './grid.styles.scss'

const Grid = ({ children }) => {
  const gridStyles = {
    width: 300,
    height: 300,
    get gridTemplateColumns() {
      const numberOfCells = children.length
      const gridSize = numberOfCells / Math.sqrt(numberOfCells)
      let columns = ''

      for (let i = 0; i < gridSize; i++) {
        columns += `${100 / gridSize}%` // '50%50%', '25%25%25%25%', etc.
      }

      return columns
    },
    get gridTemplateRows() {
      return this.gridTemplateColumns
    }
  }

  return (
    <div className="grid" style={gridStyles}>
      {children.map(cell => cell)}
    </div>
  )
}

Grid.propTypes = {
  children: props => {
    const hasIntegerSquareRoot = number => Number.isInteger(Math.sqrt(number))

    if (!hasIntegerSquareRoot) {
      throw new Error('not squareable grid')
    }

    PropType.checkPropTypes(
      {
        children: PropType.arrayOf(PropType.node)
      },
      props
    )
  }
}

export default Grid
