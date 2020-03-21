import React from 'react'
import Grid from './components/grid/grid.component'
import Cell from './components/cell/cell.component'

import './App.styles.scss'

const getRandomColor = () => {
  const colors = [
    '#FF00E7',
    '#FF8100',
    '#E3FF00',
    '#00FF57',
    '#00C5FF',
    '#A300FF'
  ]
  const min = 0
  const max = colors.length - 1
  const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min

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
