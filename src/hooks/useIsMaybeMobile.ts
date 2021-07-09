import { useState, useEffect } from 'react'

const useIsMaybeMobile = () => {
  const [maybeMobile, setMaybeMobile] = useState(true)
  useEffect(() => {
    setMaybeMobile(window.innerWidth < window.innerHeight)
    const _resizeListener = () => setMaybeMobile(window.innerWidth < window.innerHeight)
    window.addEventListener('resize', _resizeListener)
    return () => window.removeEventListener('resize', _resizeListener)
  }, [])
  return maybeMobile
}
export default useIsMaybeMobile
