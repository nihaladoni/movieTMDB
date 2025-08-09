import { useEffect, useState } from 'react'

// Returns 'up' or 'down'
const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState<'up' | 'down'>('up')
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollDir(scrollY > lastScrollY && scrollY > 60 ? 'down' : 'up')
          setLastScrollY(scrollY)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return scrollDir
}

export default useScrollDirection
