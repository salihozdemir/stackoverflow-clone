import React from 'react'

import FormInput from '../../form-input'
import Button from '../../button'

import styles from './signup-form.module.css'

function SignupForm() {
  return (
    <form>
      <FormInput label="Username" errorMessage="Invalid username" hasError />
      <FormInput label="Password" errorMessage="Invalid password" />
      <FormInput label="Confirm Password" errorMessage="Invalid password" />
      <Button primary full className={styles.submitButton}>
        Sign up
      </Button>
    </form>
  )
}

export default SignupForm
