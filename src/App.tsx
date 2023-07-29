import './App.css'
import { useState } from "react"
import Card from './components/Card/Card'
import ButtonGroup from './components/ButtonGroup/ButtonGroup'

type Postcard = {
  message: string;
  address: string;
  stampIndex: number;
}

function base64ToBytes(base64: string): Uint8Array {
  const binString = atob(base64)
  return Uint8Array.from(binString, (m) => m.codePointAt(0)!)
}

function bytesToBase64(bytes: Uint8Array): string {
  const binString = Array.from(bytes, (x) => String.fromCodePoint(x)).join("");
  return btoa(binString);
}

const getPostcardURL = ():Postcard => {
  const defaultPostcard = {
    message: `🌟 Send a Postcard from Nowhere! 🌵
Customize them with Your Messages! 💬
🎈 Add Emojis & Get Creative! 🌈🎉🎨 `,
    address: `🏠 [Name/Alias]
🌆 [Location]
🎨 [Hobbies]
🌐 [Anything!]`,
    stampIndex: 0
  } 

  const query = window.location.search.slice(1)

  if (!query) {
    return defaultPostcard;
  }

  let decodedString

  try {
    decodedString = new TextDecoder().decode(base64ToBytes(query))
  } catch (error) {
    console.error("Error decoding:", error);
    return defaultPostcard
  }
  
  let cardBody

  try {
    cardBody = JSON.parse(decodedString) as Postcard
  } catch (error) {
    console.error("Error parsing JSON:", error)
    return defaultPostcard
  }

  return cardBody
}

function App() {
  const [toggle, setToggle] = useState(false)
  const [message, setMessage] = useState(getPostcardURL().message)
  const [address, setAddress] = useState(getPostcardURL().address)
  const [shareLink, setShareLink] = useState("")

  const handleFlip = () => {
    setToggle(!toggle);
  };

  const clearCard = () => {
    setMessage("")
    setAddress("")
    // TODO: add focus on textarea
  }

  const shareCard = () => {
    const messageInput = document.querySelector("#message") as HTMLInputElement
    const addressInput = document.querySelector("#address") as HTMLInputElement

    if (!messageInput || !addressInput) {
      console.error("Error: message or address not found.")
      return
    }

    const postcard = { 
      message: messageInput.value, 
      address: addressInput.value, 
      stamp: 0 
    }
   
    const shareLink = bytesToBase64(new TextEncoder().encode(JSON.stringify(postcard)));

    navigator.clipboard
    //TODO: fix link protocal
      .writeText(`${location.protocol}//${location.host}/?${shareLink}`)
      .then(() => {
        setShareLink("Text copied!");
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
        setShareLink("Failed to copy!");
      });
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
      <ButtonGroup toggle={toggle} clearCard={clearCard} handleFlip={handleFlip} shareCard={shareCard} shareLink={shareLink} />
      <p className='flex text-neutral-700 justify-end'>made by&nbsp;<a className='underline' href='https://intelagense.com'> intelagense</a></p>
    </> 
  )
}

export default App
