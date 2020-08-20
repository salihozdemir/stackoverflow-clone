import React from 'react'

import Button from '../button'

import styles from './button-group.module.css'

const ButtonGroup = ({ buttons, selected, setSelected }) => {
  return (
    <div className={styles.container}>
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
