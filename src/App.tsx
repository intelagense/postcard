import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {
  const [count, setCount] = useState(3)

  return (
    <>
      <h1 className='p-6'>Digital Postcard</h1>
      <Card/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          day is {count}
        </button>
        <p className="text-3xl font-bold underline">
          Send a virtual postcard to your friends.
        </p>
      </div>
    </>
  )
}

export default App
