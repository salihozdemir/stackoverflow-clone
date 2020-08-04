import React from 'react'

import SearchInput from '../components/search-input'

export default {
  title: 'Search Input'
}

export const Default = () => <SearchInput placeholder="Default search input" />

export const AutoFocus = () => (
  <SearchInput autoFocus placeholder="Auto focus search input" />
)

export const FullWidth = () => (
  <SearchInput autoFocus fullWidth placeholder="Full width search input" />
)
