import { ReactNode } from "react"

interface Button {
    name: string
    toggle: boolean
    onClick?: () => void
}

const Button = ({
    className = "",
    children,
    onClick,
    disabled = false
} : {
    className?: string,
    children: ReactNode,
    disabled?: boolean,
    onClick: () => void,
}) => {
    return (
        <button 
            className={`mx-10 drop-shadow ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button