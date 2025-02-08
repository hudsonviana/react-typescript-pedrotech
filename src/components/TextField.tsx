import React from 'react'

interface TextFieldProps {
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}

function TextField({ onChange }: TextFieldProps) {
  return (
    <div>
      TextField
      <input type="text" onChange={onChange} />
    </div>
  )
}

export default TextField
