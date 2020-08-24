import React, { useState } from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'

import useComponentVisible from '../hooks/useComponentVisible'
import ModalContext from '../store/modal'
import { AuthProvider } from '../store/auth'
import { FetchProvider } from '../store/fetch'
import { TagProvider } from '../store/tag'

import Modal from '../components/modal'
import AuthForms from '../components/auth-forms'

import '../styles/variables.css'
import '../styles/nprogress.css'
import 'react-tagsinput/react-tagsinput.css'
import '../styles/app.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

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
    <ModalContext.Provider
      value={{ ref, handleComponentVisible, setIsComponentVisible }}
    >
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
