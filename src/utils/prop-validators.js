import PropTypes from 'prop-types'

export const perfectSquareNumberedCellComponents = props => {
  const hasIntegerSquareRoot = number => Number.isInteger(Math.sqrt(number))

  if (!hasIntegerSquareRoot(props.children.length)) {
    throw new Error('A square rootable number of Cells are needed')
  }

  PropTypes.checkPropTypes(
    { children: PropTypes.arrayOf(PropTypes.node) },
    props
  )
}
