import * as React from 'react'

function SvgAlert(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M8 16A8 8 0 118 0a8 8 0 010 16zM7 3v6h2V3H7zm0 8v2h2v-2H7z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgAlert
