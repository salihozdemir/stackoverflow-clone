import React, { useState } from 'react'

import useComponentVisible from '../hooks/useComponentVisible'
import ModalContext from '../store/modal'
import { AuthProvider } from '../store/auth'
import { FetchProvider } from '../store/fetch'
import { TagProvider } from '../store/tag'

import Modal from '../components/modal'
import AuthForms from '../components/auth-forms'

import 'react-tagsinput/react-tagsinput.css'
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
      <AuthProvider>
        <FetchProvider>
          <TagProvider>
            <Component {...pageProps} />
            {isComponentVisible && (
              <Modal>
                <AuthForms screen={authScreen} />
              </Modal>
            )}
          </TagProvider>
        </FetchProvider>
      </AuthProvider>
    </ModalContext.Provider>
  )
}

export default MyApp
