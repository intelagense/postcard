import ReactFlipCard from 'reactjs-flip-card';
import CardBack from '../CardBack/CardBack';
import CardFront from '../CardFront/CardFront'

    const styles = {
        container: {padding: 20},
        subTitle: {
            fontSize: "1.5rem", fontWeight: "bold",
            marginBottom: 10, textAlign: "center"
        },
        textAlignCenter: {textAlign: "center"},
        fontStyleItalic: {fontStyle: "italic"},
        flex: {display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10},
        cardFront: {
            border: '12px solid #fcf7eb',
            backgroundImage: 'linear-gradient(#ffffff66, #ddddffdd), url(/images/clouds.gif)',
            color: 'var(--dark-blue)',
            borderRadius: 4,
            overflow: "hidden",
        },
        cardBack: {
            border: '6px dashed #b66780',
            background: '#fcf7eb',
            color: 'black',
            borderRadius: 4,
        },
        overflowHidden: {overflow: "hidden"}, 
        marginTop10: {padding: 10},
        marginBottom10: {marginBottom: 10},
        padding10: {padding: 10},
        padding20: {padding: 20},
        fontSize1rem: {fontSize: "1rem"},
        size200: {height: 400, width: 600},
        fontWeightBold: {fontWeight: "bold"},
        backgroundOrange: {background: "orange"},
        centeredContent: {display: 'flex', justifyContent: 'center', alignItems: 'center'}
    }

const Card = () => {
    return (
        <div className="flex items-center justify-center h-222 p-10">
            <div style={styles.size200}>
                <ReactFlipCard
                    flipTrigger={'onHover'}
                    flipCardCss={'transitionDuration'}
                    direction={'diagonal'}
                    containerCss={'resizeBasedOnParent'}
                    // frontStyle={styles.cardBack}
                    frontStyle={styles.cardFront}
                    backStyle={styles.cardBack}
                    // frontComponent={<CardBack />}
                    frontComponent={<CardFront />}
                    backComponent={<CardBack />}
                />
            </div>
        </div>
    );
}

export default Card;