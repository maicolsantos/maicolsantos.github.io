type EditorTextProps = {
  text: string;
}

export const EditorText = ({ text }: EditorTextProps) => {
  const paragraphs = text.split('\n').map((item, key) => (
    <span key={key}>
      { key > 0 && <br /> }
      { item }
    </span>
  ))

  return <>{paragraphs}</>
}
