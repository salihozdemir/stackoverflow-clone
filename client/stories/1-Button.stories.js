import React from 'react'

import Button from '../components/button'

export default {
  title: 'Buttons'
}

export const Normal = () => <Button>Normal Button</Button>

export const PrimaryButton = () => <Button primary>Sign Up</Button>

export const SecondaryButton = () => <Button secondary>Log In</Button>

export const FullButton = () => (
  <Button primary full>
    Log In
  </Button>
)
