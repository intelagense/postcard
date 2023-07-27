import './App.css'
import { useRef, useState } from "react"
import Card from './components/Card/Card'
import ButtonGroup from './components/ButtonGroup/ButtonGroup.tsx'

function base64ToBytes(base64: string): Uint8Array {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0)!);
}

const getInitialMessage = () => {
  const query:string = window.location.search.slice(1)
  if (query) {
    return new TextDecoder().decode(base64ToBytes(query))
  }

  return "Having a wonderful time, wish you were here! 🌞🏖️"
}


function App() {
  const messageTextAreaRef = useRef(null)

  const [toggle, setToggle] = useState(false)
  const [message, setMessage] = useState(getInitialMessage())

  const handleFlip = () => {
    setToggle(!toggle);
  };

  const clearCard = () => {
    setMessage("")
    // TODO: focus on textarea
  }

  return (
    <>
      <Card 
        toggle={toggle}
        message={message}
        setMessage={setMessage}
      />
      <ButtonGroup toggle={toggle} clearCard={clearCard} handleFlip={handleFlip} />
    </>
  )
}

export default App
