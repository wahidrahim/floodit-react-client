import React from 'react'
import Grid from './components/grid/grid.component'
import Cell from './components/cell/cell.component'

const App = () => {
  const numberOfCells = 121
  const cells = []

  for (let i = 0; i < numberOfCells; i++) {
    cells.push(<Cell key={i} />)
  }

  return (
    <Grid>
      {cells}
    </Grid>
  )
}

export default App
