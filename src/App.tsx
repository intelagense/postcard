import './App.css'
import { useState } from "react"
import Card from './components/Card/Card'
import ButtonGroup from './components/ButtonGroup/ButtonGroup.tsx'

type Postcard = {
  message: string;
  address: string;
  stampIndex: number;
}

function base64ToBytes(base64: string): Uint8Array {
  const binString = atob(base64)
  return Uint8Array.from(binString, (m) => m.codePointAt(0)!)
}

const getPostcardURL = ():Postcard => {
  const defaultPostcard = {
    message: "Having a wonderful time, wish you were here! 🌞🏖️",
    address: "Cowboy Village",
    stampIndex: 0
  } 
  const query = window.location.search.slice(1)
  let decodedString

  try {
    decodedString = new TextDecoder().decode(base64ToBytes(query))
  } catch (error) {
    return defaultPostcard
  }
  
  // TODO: add validation for JSON parse here
  const cardBody = JSON.parse(decodedString) as Postcard

  if (query) {
    return cardBody
  }

  return defaultPostcard
}

function App() {
  const [toggle, setToggle] = useState(false)
  const [message, setMessage] = useState(getPostcardURL().message)
  const [address, setAddress] = useState(getPostcardURL().address)

  const handleFlip = () => {
    setToggle(!toggle);
  };

  const clearCard = () => {
    setMessage("")
    setAddress("")
    // TODO: focus on textarea
  }

  return (
    <>
      <Card 
        toggle={toggle}
        message={message}
        address={address}
        setMessage={setMessage}
        setAddress={setAddress}
      />
      <ButtonGroup toggle={toggle} clearCard={clearCard} handleFlip={handleFlip} />
    </>
  )
}

export default App
