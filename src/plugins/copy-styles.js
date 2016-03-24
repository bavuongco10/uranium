import React from 'react'

export default element => {
  const { props } = element
  const { style, styles } = props

  const newStyle = Object.keys(styles).reduce(
    (styleAccumulator, currentProperty) => {
      if (
        [':focus', ':hover', ':active'].indexOf(currentProperty) !== -1 ||
        currentProperty.match(/@media/)
      ) return styleAccumulator

      return {
        ...styleAccumulator,
        [currentProperty]: styles[currentProperty],
      }
    },
    style || {}
  )

  return React.cloneElement(element, { ...props, style: newStyle })
}
