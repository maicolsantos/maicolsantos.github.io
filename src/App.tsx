import { useEffect, useState } from 'react'

import { code } from './code'
import logo  from './assets/images/logo.svg'
import './App.css'

import { Editor } from './components/Editor'

export const App = () => {
  const [ sizeOfText, setSizeOfText ] = useState(0)

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Delete' || event.key === 'Backspace') {
      const newSizeOfText = Math.round(sizeOfText - Math.random() * 8)

      setSizeOfText(newSizeOfText >= 0 ? newSizeOfText : 0)
    } else {
      const newSize = Math.round(sizeOfText + Math.random() * 8)

      setSizeOfText(newSize)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [ sizeOfText ])

  return (
    <Editor text={code} numberOfLetters={sizeOfText} />
    // <div className="app">
    //   <div className="app-logo">
    //     <img src={logo} className="logo" alt="Maicol logo" />
    //     <h1 className="title">Maicol Santos</h1>
    //   </div>
    // </div>
  )
}
