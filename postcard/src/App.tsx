import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Digital Postcard</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          hope is {count}
        </button>
        <p>
          Send a virtual postcard to your friends.
        </p>
      </div>
    </>
  )
}

export default App