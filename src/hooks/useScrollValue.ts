import { useEffect, useState } from 'react'

const useScrollValue = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setValue(scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return {
    value,
  }
}

export default useScrollValue
