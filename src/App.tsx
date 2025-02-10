import React, { useEffect, useState } from 'react'
// import Button from './components/Button'
// import TextField from './components/TextField'
// import Person from './components/Person'

// function fieldChange(e) {
//   e.target.value
// }

import { Button } from '@/components/ui/button'

type TypographyProps = {
  children: React.ReactNode
  size?: 'small' | 'large'
}

type ParagraphProps = {
  color?: string
}

const user = {
  id: 1,
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  birthDate: new Date('1985-06-12'),
}

type UserAttributes = typeof user

const mary: UserAttributes = {
  id: 2,
  name: 'mary',
  age: 50,
  isAdmin: false,
  birthDate: new Date('2025-02-08'),
}

function Title({ children, size = 'small' }: TypographyProps) {
  return (
    <h1
      style={{
        fontSize: size === 'small' ? '1.5rem' : '3rem',
      }}
    >
      {children}
    </h1>
  )
}

function Paragraph({ children, color }: TypographyProps & ParagraphProps) {
  return <p style={{ color: color }}>{children}</p>
}

// const titleDefaultProps = {
//   size: 'small',
// }

// Title.defaultProps = titleDefaultProps // não funcionou

function List<ItemType>({
  items,
  render,
}: {
  items: ItemType[]
  render: (item: ItemType, index: number) => React.ReactNode
}) {
  return (
    <ul>
      {items.map((item, index) => {
        return render(item, index)
      })}
    </ul>
  )
}

// demonstração de como implementar props condicionadas a outras props.
// no exemplo abaixo, a prop 'toastOptions' somente pode ser usada no componente 'Notification' quando a propriedade 'type' for igual a 'toast'. Se for igual a 'alert' não é permitido usar 'toastOptions'.
type NotificationPropos =
  | {
      type: 'alert'
    }
  | {
      type: 'toast'
      toastOptions?: string[]
    }

function Notification(props: NotificationPropos) {
  return null
}

function Demo() {
  return (
    <div>
      <Notification type="toast" toastOptions={['position-top']} />
    </div>
  )
}
// Fim do exemplo acima

type StateTestProps = {
  setCount: React.Dispatch<React.SetStateAction<number | null>>
}

function StateTest({ setCount }: StateTestProps) {
  return <button onClick={() => setCount(1)}>Clique aqui</button>
}

type User = {
  id: number
  name: string
  age: number
}

// Estabelecer estilos do tailwind no padrão do objeto abaixo
const colorMap = {
  red: 'text-red-600',
  blue: 'text-blue-600',
  green: 'text-green-600',
}

const sizeMap = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
}

type TextColor = keyof typeof colorMap
type TextSize = keyof typeof sizeMap

type CardProps = {
  alertMessage: (message: string) => void // padrão de como tipar uma função: '(param:tipo) => retorno'
  users: User[]
  color: TextColor
  size: TextSize
}

function Card({ alertMessage, users, color, size }: CardProps) {
  return (
    <div>
      <button onClick={() => alertMessage('Oi, tudo bem?')}>Clique aqui</button>
      {users.map((user) => (
        <div key={user.id}>
          <p>
            Nome:{' '}
            <span className={`${colorMap[color]} ${sizeMap[size]}`}>
              {user.name}
            </span>
          </p>
          <p> Idade: {user.age} </p>
        </div>
      ))}
    </div>
  )
}

function App() {
  const [count, setCount] = useState<number | null>(0)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setUser({ id: 4, name: 'Hudson', age: 39 })
    setLoading(false)
  }, [])

  // return <StateTest setCount={setCount} />

  function alertMessage(message: string) {
    alert(message)
  }

  // if (count !== null) {
  //   return <div>{count}</div>
  // }

  const items = [
    { id: 1, name: 'Pedro' },
    { id: 2, name: 'Maria' },
  ]

  const users = [
    { id: 1, age: 35, name: 'Maria' },
    { id: 2, age: 41, name: 'Carla' },
  ]

  // https://www.youtube.com/watch?v=DxqiBrERv6o

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(e.preventDefault())
  }

  function handleClick2(e: React.FormEvent<HTMLFormElement>) {
    console.log(e.preventDefault())
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value)
  }

  const myObject = { age: 39 } as const
  const myArray = [1, 2, 3] as const
  // myArray.push(4)
  // myObject.age = 40

  return (
    <>
      <button onClick={(e) => handleClick(e)}>Teste de evento</button>
      <input type="text" onChange={(e) => handleChange(e)} />

      {!loading && user && user.name}
      {/* <Person name="Hudson" age={40} isMaried={true} />
      <Person name="Eliane" age={38} isMaried={false} /> */}
      {/* <Button theme="red" color="blue" /> */}
      {/* <TextField onChange={(e) => fieldChange(e)} /> */}

      <Title>oi</Title>
      <Paragraph color="yellow">
        <span style={{ fontWeight: 'bold' }}>Lorem ipsum dolor sit amet</span>,
        consectetur adipisicing elit. Saepe necessitatibus repellendus
        temporibus neque, quasi maxime id, ullam nihil cumque facere quos. Eius
        sint culpa sed hic similique quisquam, ad iure.
      </Paragraph>

      <List
        items={items}
        render={(item, index) => {
          if (item.id === 1) {
            return <p key={index}>{item.name}</p>
          }
          return <h3 key={index}>{item.name}</h3>
        }}
      />

      <Card alertMessage={alertMessage} users={users} color="green" size="lg" />
      <Button variant={'outline'}>Click me</Button>
    </>
  )
}

export default App
