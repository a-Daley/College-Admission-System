import React from 'react'
import {VictoryLabel} from 'victory'

const CenterLabel = ({datum, active, color}) => {
  const text = [`${[datum._x]}`, `${Math.round(datum._y1)} %`]
  const baseStyle = {fill: color.highlight, textAnchor: 'middle'}
  const style = [
    {...baseStyle, fontSize: 18, fontWeight: 'bold'},
    {...baseStyle, fontSize: 12}
  ]

  return active ? (
    <VictoryLabel text={text} style={style} x={175} y={175} renderInPortal />
  ) : null
}

export default CenterLabel
