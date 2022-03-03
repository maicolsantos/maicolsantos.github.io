import { useEffect, useState } from 'react'
import Editor, { useMonaco } from '@monaco-editor/react'

import { Loading } from '../Loading'

interface EditorProps {
  code: string
  numberOfLetters: number
}

const TIMEOUT = 1000 // 1s
const START_SLICE = 0
const EDITOR_HEIGHT = '100vh'
const EDITOR_LANGUAGE = 'typescript'
const EDITOR_FONT_SIZE = 16
const EDITOR_DEFAULT_VALUE = '// Just write your code here'

const perserveSpaces = (code: string) => (
  code.split(' ').join('\u00a0').split('\t').join('\u00a0'.repeat(4))
)

export const EditorProgrammer = ({ code, numberOfLetters }: EditorProps) => {
  const [ loading, setLoading ] = useState(true)
  const monaco = useMonaco()
  const parsedCode = perserveSpaces(code.slice(START_SLICE, numberOfLetters))

  const hiddenLoadingByTiming = () => {
    setTimeout(() => {
      setLoading(false)
    }, TIMEOUT)
  }

  useEffect(() => {
    if (monaco) {
      import('monaco-themes/themes/Monokai.json')
        .then((data) => { monaco.editor.defineTheme('monokai', data) })
        .then(() => monaco.editor.setTheme('monokai'))
    }
  }, [monaco])

  return (
    <>
      <Editor
        height={EDITOR_HEIGHT}
        defaultLanguage={EDITOR_LANGUAGE}
        defaultValue={EDITOR_DEFAULT_VALUE}
        onMount={hiddenLoadingByTiming}
        options={{ fontSize: EDITOR_FONT_SIZE }}
        value={parsedCode}
      />
      { loading && <Loading /> }
      <div className="keydown-view" />
    </>
  )
}

