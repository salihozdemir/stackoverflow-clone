import React from 'react'

import Modal from '../components/modal'
import LoginForm from '../components/login-form'
import SignupForm from '../components/signup-form'

export default {
  title: 'Modal'
}

export const LoginModal = () => (
  <Modal>
    <LoginForm />
  </Modal>
)

export const SignupModal = () => (
  <Modal>
    <SignupForm />
  </Modal>
)
