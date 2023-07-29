import { FC } from "react"
import Button from "../Button/Button"

interface ButtonGroupProps {
    toggle: boolean
    handleFlip: () => void
    clearCard: () => void
    shareCard: () => void
    shareLink: string
}

const ButtonGroup: FC<ButtonGroupProps> = ({ toggle, handleFlip, clearCard, shareCard, shareLink}) => {
    return(
        <div className="flex justify-center">
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
            <div className="flex flex-col items-center" style={{ height: "60px" }}>
                <Button 
                    onClick={shareCard} 
                    disabled={!toggle}
                    className={`${ toggle ? "opacity-100" : "opacity-0" } transition-opacity duration-500 ease-in-out`}
                >
                    Copy Link
                </Button>
                {shareLink && <p className={`${ toggle ? "opacity-100" : "opacity-0" } -mt-7`}>{shareLink}</p>}
            </div>
        </div>
    )
}

export default ButtonGroup