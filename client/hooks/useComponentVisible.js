import { useState, useEffect, useRef } from 'react'

function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible)
  const ref = useRef(null)
  const toggleRef = useRef(null)

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
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return { ref, toggleRef, isComponentVisible, setIsComponentVisible }
}

export default useComponentVisible
