import React from 'react'

import Button from '../components/button'

export default {
  title: 'Button'
}

export const Default = () => <Button>Default Button</Button>

export const PrimaryButton = () => <Button primary>Primary Button</Button>

export const SecondaryButton = () => <Button secondary>Secondary Button</Button>

export const FullButton = () => (
  <Button primary full>
    Full Width Button
  </Button>
)
