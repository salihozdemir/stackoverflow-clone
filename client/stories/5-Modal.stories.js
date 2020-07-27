import React from 'react'

import Modal from '../components/modal'
import LoginForm from '../components/login-form'
import SignupForm from '../components/signup-form'
import AuthModal from '../components/auth-modal'

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

export const AuthModalScreen = () => <AuthModal />
