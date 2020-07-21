import styles from './button.module.css'

function Button({ children, ...props }) {
  return (
    <button type="button" className={styles.button} {...props}>
      {children}
    </button>
  )
}

export default Button
