import React from 'react'

import cn from 'classnames'

import styles from './modal.module.css'

function Modal({ children, className, ...props }) {
  return (
    <div className={cn(styles.modal, className)} {...props}>
      <div className={styles.modalDialog}>{children}</div>
    </div>
  )
}

export default Modal
