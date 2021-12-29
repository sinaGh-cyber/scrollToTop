import { useEffect } from 'react'

export default function ScrollToTop() {
  useEffect(
    () => {
      window.scrollTo(0, 0)
    },
    [
      //update dependencies to execute this function on path change
    ],
  )

  return null
}
