import { EditorText } from './EditorText'

interface EditorProps {
  text: string
  numberOfLetters: number
}

const perserveSpaces = (text: string) => (
  text.split(' ').join('\u00a0').split('\t').join('\u00a0'.repeat(4))
)

export const Editor = ({ text, numberOfLetters }: EditorProps) => {
  const parsedText = perserveSpaces(text.slice(0, numberOfLetters))

  return (
    <>
      <EditorText text={parsedText} />
      <span className="blink_me">|</span>
    </>
  )
}

