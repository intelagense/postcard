import ReactFlipCard from 'reactjs-flip-card';
import CardBack from '../CardBack/CardBack';
import CardFront from '../CardFront/CardFront'

const styles = {

    cardFront: {
        transform: 'rotateX(0deg)',
        border: '8px solid #fcf7eb',
        backgroundImage: 'linear-gradient(#ffffff66, #ddddffdd), url(/images/clouds.gif)',
        backgroundSize: 'cover',
        color: 'var(--dark-blue)',
        borderRadius: 4,
        overflow: "hidden",
    },
    cardBack: {
        border: '6px dashed #b66780',
        background: '#fcf7eb',
        color: 'black',
        borderRadius: 4,
        overflow: "hidden",
    },

    size600: {height: 400, minWidth: 100},

}
 
const Card = ({ 
    toggle,
    message, 
    setMessage,
    address,
    setAddress,
} : { 
    toggle: boolean
    message: string, 
    setMessage: (message:string) => void,
    address: string,
    setAddress: (address:string) => void,
}) => {
    return (
        <div className="flex items-center w-full justify-center ">
            <div style={styles.size600}>
                <ReactFlipCard
                    flipTrigger={'disabled'}
                    flipByProp={toggle}
                    flipCardCss={'transitionDuration'}
                    direction={'diagonal'}
                    containerStyle={{
                        position: 'relative',
                        height: '100%',
                        width: '100%',}}
                    // containerCss={'resizeBasedOnParent drop-shadow overflow-hidden transformStyle'}
                    frontStyle={styles.cardFront}
                    backStyle={styles.cardBack}
                    frontComponent={<CardFront />}
                    backComponent={<CardBack 
                        message={message}
                        setMessage={setMessage}
                        address={address}
                        setAddress={setAddress}
                    />}
                />
            </div>
        </div>
    );
}

export default Card;