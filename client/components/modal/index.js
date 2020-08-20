import React, { useContext } from 'react'
import cn from 'classnames'

import ModalContext from '../../store/modal'

import styles from './modal.module.css'

const Modal = ({ children, className, ...props }) => {
  const { ref } = useContext(ModalContext)
  return (
    <>
      <div className={cn(styles.modal, className)} {...props}>
        <div ref={ref} className={styles.modalDialog}>
          {children}
        </div>
      </div>
    </>
  )
}

export default Modal
