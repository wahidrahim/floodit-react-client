import React from 'react'
import Grid from './components/grid/grid.component'
import Cell from './components/cell/cell.component'

import './App.styles.scss'

const getRandomColor = () => {
  const getRandomIntInclusive = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const colors = [
    '#ff00e7',
    '#ff8100',
    '#e3ff00',
    '#00ff57',
    '#00c5ff',
    '#a300ff'
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
