import { useEffect, useState } from 'react'

import { EditorProgrammer } from './components/Editor'
import { code } from './code'

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
    <EditorProgrammer code={code} numberOfLetters={sizeOfText} />
  )
}
