import styles from './button.module.css'
import cn from 'classnames'

function Button({
  primary,
  secondary,
  full = false,
  children,
  className,
  ...props
}) {
  return (
    <a
      className={cn(
        styles.button,
        primary && styles.primary,
        secondary && styles.secondary,
        full && styles.fullWidth,
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}

export default Button
