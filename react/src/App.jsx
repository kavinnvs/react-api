import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('John Doe')
  const [contact, setContact] = useState('john.doe@example.com')

  return (
    <>
      <div>
        <h1>Name: {name}</h1>
        <h2>Contact: {contact}</h2>
      </div>
    </>
  )
}

export default App