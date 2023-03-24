import { useEffect } from 'react'
import Editor, { useMonaco } from '@monaco-editor/react'

import { uses } from '../uses'
import { Footer } from '../components/Footer'
import { BrowserView } from 'react-device-detect'

const EDITOR_HEIGHT = '100vh'
const EDITOR_LANGUAGE = 'markdown'
const EDITOR_FONT_SIZE = 16

const preserveSpaces = (code: string) => (
  code.split(' ').join('\u00a0').split('\t').join('\u00a0'.repeat(4))
)

export const Uses = () => {
  const parsedCode = preserveSpaces(uses)
  const monaco = useMonaco()

  useEffect(() => {
    if (monaco) {
      import('monaco-themes/themes/Monokai.json')
        .then((data: any) => monaco.editor.defineTheme('monokai', data))
        .then(() => monaco.editor.setTheme('monokai'))
    }
  }, [monaco])

  return (
    <>
      <Editor
        theme="monokai"
        height={EDITOR_HEIGHT}
        defaultLanguage={EDITOR_LANGUAGE}
        options={{ fontSize: EDITOR_FONT_SIZE }}
        value={parsedCode}
      />
      <BrowserView>
        <Footer show />
      </BrowserView>
    </>
  )
}
