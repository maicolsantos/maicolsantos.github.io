import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const TIMEOUT = 500 // 0.5s


export const Footer = ({ show = false, hiddenTitle = false }: { show?: boolean, hiddenTitle?: boolean }) => {
  const [ showInfo, setShowInfo ] = useState(show)

  useEffect(() => {
    setTimeout(() => {
      setShowInfo(true)
    }, TIMEOUT)
  }, [])

  return (
    <footer className={`footer ${hiddenTitle ? 'footer-relative' : ''}`}>
      <div className={`footer-container ${showInfo ? 'active' : ''}`}>
        { !hiddenTitle && <h1>Maicol Santos</h1> }
        <a href="mailto:maicolcostaa8@gmail.com">maicolcostaa8@gmail.com</a>
        <a href="https://github.com/maicolsantos" target="_blank">github</a>
        <a href="https://www.linkedin.com/in/maicolsantos" target="_blank">linkedin</a>
        <Link to="/uses">/uses</Link>
      </div>
    </footer>
  )
}
