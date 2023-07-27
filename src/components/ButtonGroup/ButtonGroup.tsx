import { FC } from "react"
import Button from "../Button/Button"

interface ButtonGroupProps {
    toggle: boolean
    handleFlip: () => void
    clearCard: () => void
}

const ButtonGroup: FC<ButtonGroupProps> = ({ toggle, handleFlip, clearCard }) => {
    return(
        <>
            <Button 
                onClick={clearCard} 
                disabled={!toggle}
                className={`${ toggle ? "opacity-100" : "opacity-0" } transition-opacity duration-500 ease-in-out`}
            >
                Reset
            </Button>
            <Button 
                onClick={handleFlip}
            >
                Flip
            </Button>
            <Button 
                onClick={() => {}} 
                disabled={!toggle}
                className={`${ toggle ? "opacity-100" : "opacity-0" } transition-opacity duration-500 ease-in-out`}
            >
                Share
            </Button>
        </>
    )
}

export default ButtonGroup