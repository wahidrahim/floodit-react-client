import React from 'react'
import Grid from './components/grid/grid.component'
import Cell from './components/cell/cell.component'

import './App.styles.scss'

const getRandomColor = () => {
  const getRandomIntInclusive = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  
  const colors = [
    '#FF00E7',
    '#FF8100',
    '#E3FF00',
    '#00FF57',
    '#00C5FF',
    '#A300FF'
  ]
  const randomIndex = getRandomIntInclusive(0, colors.length - 1)

  return colors[randomIndex]
}

const App = () => {
  const numberOfCells = 121
  const cells = []

  for (let i = 0; i < numberOfCells; i++) {
    console.log(getRandomColor())
    cells.push(<Cell key={i} color={getRandomColor()} />)
  }

  return <Grid>{cells}</Grid>
}

export default App
