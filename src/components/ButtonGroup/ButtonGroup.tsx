import { FC } from "react"
import Button from "../Button/Button"

interface ButtonGroupProps {
    toggle: boolean
    handleFlip: () => void
    clearCard: () => void
    shareCard: () => void
}

const ButtonGroup: FC<ButtonGroupProps> = ({ toggle, handleFlip, clearCard, shareCard}) => {
    return(
        <>
            <Button 
                onClick={clearCard} 
                disabled={!toggle}
                className={`${ toggle ? "opacity-100" : "opacity-0" } transition-opacity duration-500 ease-in-out`}
            >
                Clear Card
            </Button>
            <Button 
                onClick={handleFlip}
            >
                Flip
            </Button>
            <Button 
                onClick={shareCard} 
                disabled={!toggle}
                className={`${ toggle ? "opacity-100" : "opacity-0" } transition-opacity duration-500 ease-in-out`}
            >
                Copy Link
            </Button>
        </>
    )
}

export default ButtonGroup