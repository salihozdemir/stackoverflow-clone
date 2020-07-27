import React from 'react'

import FormInput from '../Common/form-input'
import Button from '../Common/button'

import styles from './login-form.module.css'

function LoginForm() {
  return (
    <form>
      <FormInput label="Username" errorMessage="Invalid username" hasError />
      <FormInput label="Password" errorMessage="Invalid password" />
      <Button primary full className={styles.submitButton}>
        Log in
      </Button>
    </form>
  )
}

export default LoginForm
