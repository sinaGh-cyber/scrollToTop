import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function ScrollToTop() {
  const history = useHistory()
  const [myLocation, setMyLocation] = useState(history.location.pathname)

  useEffect(() => {
    window.scrollTo(0, 0)

    const unListen = history.listen(({ pathname }) => {
      if (myLocation !== pathname) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setMyLocation(pathname)
      }
    })

    return unListen
  }, [history, myLocation])

  return null
}
