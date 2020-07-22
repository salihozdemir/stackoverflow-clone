import styles from './button.module.css'
import cn from 'classnames'

function Button({ children, className, ...props }) {
  return (
    <button type="button" className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  )
}

export default Button
