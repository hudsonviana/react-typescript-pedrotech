import React, { useState } from 'react'
// import Button from './components/Button'
// import TextField from './components/TextField'
// import Person from './components/Person'

// function fieldChange(e) {
//   e.target.value
// }

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

function App() {
  const [count, setCount] = useState<number | null>(0)

  if (count !== null) {
    return <div>{count}</div>
  }

  const items = [
    { id: 1, name: 'Pedro' },
    { id: 2, name: 'Maria' },
  ]

  return (
    <>
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
    </>
  )
}

export default App
