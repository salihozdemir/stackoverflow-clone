import React, { useEffect, useRef } from 'react'

import cn from 'classnames'

import { Search } from '../icons'

import styles from './search-input.module.css'

function SearchInput({ ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    ref.current.focus()
  }, [ref])

  return (
    <div className={styles.container}>
      <input ref={ref} className={styles.input} {...props} />
      <Search className={styles.search} />
    </div>
  )
}

export default SearchInput
