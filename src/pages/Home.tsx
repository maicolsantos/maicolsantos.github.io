import { useEffect, useState } from 'react'
import { BrowserView, MobileView, isMobile } from 'react-device-detect'

import { EditorProgrammer } from '../components/Editor'
import { code } from '../code'
import { MobileHome } from '../components/MobileHome'

export const Home = () => {
  const [ sizeOfText, setSizeOfText ] = useState(0)

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!isMobile) {
      if (event.key === 'Delete' || event.key === 'Backspace') {
        const newSizeOfText = Math.round(sizeOfText - Math.random() * 8)

        setSizeOfText(newSizeOfText >= 0 ? newSizeOfText : 0)
      } else {
        const newSize = Math.round(sizeOfText + Math.random() * 8)

        setSizeOfText(newSize)
      }
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [ sizeOfText ])

  return (
    <>
      <MobileView>
        <MobileHome />
      </MobileView>
      <BrowserView>
        <EditorProgrammer code={code} numberOfLetters={sizeOfText} />
      </BrowserView>
    </>
  )
}
