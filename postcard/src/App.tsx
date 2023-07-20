import { useState } from 'react'
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
