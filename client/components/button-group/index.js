import React from 'react'
import cn from 'classnames'

import Button from '../button'

import styles from './button-group.module.css'

const ButtonGroup = ({
  buttons,
  selected,
  setSelected,
  borderBottom = false
}) => {
  return (
    <div className={cn(styles.container, borderBottom && styles.borderBottom)}>
      {buttons.map((button) => (
        <Button
          key={button}
          className={selected === button && styles.active}
          onClick={() => setSelected(button)}
        >
          {button}
        </Button>
      ))}
    </div>
  )
}

export default ButtonGroup
