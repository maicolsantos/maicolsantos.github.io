import { useEffect, useState } from 'react'

import './styles.css'

const TIMEOUT = 500 // 0.5s


export const Footer = () => {
  const [ showInfo, setShowInfo ] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowInfo(true)
    }, TIMEOUT)
  }, [])

  return (
    <footer className="footer">
      <div className={`footer-container ${showInfo ? 'active' : ''}`}>
        <h1>Maicol Santos</h1>
        <a href="mailto:maicolcostaa8@gmail.com">maicolcostaa8@gmail.com</a>
        <a href="https://github.com/maicolsantos" target="_blank">github</a>
        <a href="https://www.linkedin.com/in/maicolsantos" target="_blank">linkedin</a>
      </div>
    </footer>
  )
}
