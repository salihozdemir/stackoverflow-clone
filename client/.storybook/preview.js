import React from 'react'

import { addDecorator } from '@storybook/react'
import { addParameters } from '@storybook/client-api'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import ModalContext from '../store/modal'

import '../styles/app.css'
import './style.css'

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'someDefault'
  }
})

function handleComponentVisible(modalVisible, wichModal) {
  if (modalVisible) {
    alert(`${wichModal} Modal opened`)
  }
}

addDecorator((storyFn) => (
  <ModalContext.Provider value={{ handleComponentVisible }}>
    {storyFn()}
  </ModalContext.Provider>
))
