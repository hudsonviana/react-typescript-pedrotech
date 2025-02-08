// import { FunctionComponent } from 'react'
import { useState } from 'react'

interface ButtonProps {
  theme: string
  color: string
}

// const Button: FunctionComponent<ButtonProps> = ({ theme }) => {
//   return <div>{`Button: ${theme}`}</div>
// }

interface Tasks {
  id: number
  isCompleted: boolean
}

const Button = ({ theme, color }: ButtonProps) => {
  const [tasks, setTasks] = useState<Tasks[]>([])
  const [count, setCount] = useState<number>(0)

  setTasks([
    { id: 1, isCompleted: false },
    { id: 2, isCompleted: true },
  ])

  return <div>{`Button: ${theme} ${color}`}</div>
}

export default Button
