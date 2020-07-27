import React from 'react'

import Modal from '../components/Modals/modal'
import LoginForm from '../components/Forms/login-form'
import SignupForm from '../components/Forms/signup-form'
import AuthModal from '../components/Modals/auth-modal'

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
