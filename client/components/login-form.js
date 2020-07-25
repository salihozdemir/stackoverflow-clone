import React from 'react'

import FormInput from './form-input'
import Button from './button'
import { Logo } from './icons'

import styles from './login-form.module.css'

function LoginForm() {
  return (
    <div className={styles.loginForm}>
      <Logo className={styles.logo} />
      <FormInput label="Username" errorMessage="Invalid username" hasError />
      <FormInput label="Password" errorMessage="Invalid password" />
      <Button primary full className={styles.submitButton}>
        Log in
      </Button>
    </div>
  )
}

export default LoginForm
