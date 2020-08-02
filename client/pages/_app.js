import React, { useState } from 'react'

import useComponentVisible from '../hooks/useComponentVisible'
import ModalContext from '../store/modal'

import AuthModal from '../components/AuthModal/auth-modal'

import '../styles/app.css'

function MyApp({ Component, pageProps }) {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false)

  const [authScreen, setAuthScreen] = useState(null)

  const handleComponentVisible = (componentVisible, authScreen) => {
    setIsComponentVisible(componentVisible)
    setAuthScreen(authScreen)
  }

  return (
    <ModalContext.Provider value={{ ref, handleComponentVisible }}>
      <Component {...pageProps} />
      {isComponentVisible && <AuthModal screen={authScreen} />}
    </ModalContext.Provider>
  )
}

export default MyApp
