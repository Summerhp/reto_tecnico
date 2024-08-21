import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
    </>
  )
}

export default App
