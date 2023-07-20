import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Digital Postcard</h1>
      <Card/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          hope is {count}
        </button>
        <p className="text-3xl font-bold underline">
          Send a virtual postcard to your friends.
        </p>
      </div>
    </>
  )
}

export default App
