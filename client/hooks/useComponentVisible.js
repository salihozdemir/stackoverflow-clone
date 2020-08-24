import { useState, useEffect, useRef } from 'react'

function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible)
  const ref = useRef(null)
  const toggleRef = useRef(null)

  const handleHide = (event) => {
    if (event.key === 'Escape') {
      setIsComponentVisible(false)
    }
  }

  const handleClickOutside = (event) => {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !toggleRef?.current?.contains(event.target)
    ) {
      setIsComponentVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    document.addEventListener('keydown', handleHide, true)
    return () => {
      document.removeEventListener('keydown', handleHide, true)
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return { ref, toggleRef, isComponentVisible, setIsComponentVisible }
}

export default useComponentVisible
