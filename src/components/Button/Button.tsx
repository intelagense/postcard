import { ReactNode } from "react"

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
            className={`bg-[#b66780] hover:bg-[#dc7c9a] text-white font-bold py-2 px-4 m-7 rounded-md z-[100] ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button