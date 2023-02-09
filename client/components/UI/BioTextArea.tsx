import { TextareaHTMLAttributes, useEffect, useRef, FC } from 'react'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  className: string
}

const BioTextArea: FC<TextAreaProps> = ({ name, className, ...rest }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    const textareaRefCurrent = textareaRef.current
    function handleResize() {
      if (textareaRefCurrent) {
        textareaRefCurrent.style.height = 'auto'
        textareaRefCurrent.style.height = `${textareaRefCurrent.scrollHeight}px`
      }
    }
    textareaRefCurrent?.addEventListener('input', handleResize)

    return () => textareaRefCurrent?.removeEventListener('input', handleResize)
  }, [])
  return (
    <textarea
      ref={textareaRef}
      name={name}
      className={className}
      {...rest}
    ></textarea>
  )
}

export default BioTextArea
