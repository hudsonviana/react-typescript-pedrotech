import { useState } from 'react'

export interface Props {
  name: string
  age: number
  isMaried: boolean
  // onClick: () => void
}

function Person({ name, age, isMaried }: Props) {
  const [firstName, setfirstName] = useState<string | null>('')

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>This person {isMaried ? 'is maried' : 'is single'}</p>
    </div>
  )
}

export default Person
