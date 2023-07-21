import ReactFlipCard from 'reactjs-flip-card';


    const styles = {
        container: {padding: 20},
        subTitle: {
            fontSize: "1.5rem", fontWeight: "bold",
            marginBottom: 10, textAlign: "center"
        },
        sectionExample: {
            background: "#f1f1f1",
            margin: 20,
            padding: 20,
            borderRadius: 20
        },
        textAlignCenter: {textAlign: "center"},
        fontStyleItalic: {fontStyle: "italic"},
        flex: {display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10},
        cardFront: {
            border: '3px solid #444444',
            background: 'linear-gradient(#dddddd 0,lightblue 25%,var(--dark-green) 45%,green 75%,var(--brown))',
            color: 'var(--dark-blue)',
            borderRadius: 20,
        },
        cardBack: {
            border: '3px solid #444444',
            background: '#dddddd',
            color: 'black',
            borderRadius: 20,
        },
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
        <div className="flex items-center justify-center h-222">
            <div style={styles.size200}>
                <ReactFlipCard
                    flipCardCss={'transitionDuration'}
                    direction={'diagonal'}
                    containerCss={'resizeBasedOnParent'}
                    frontStyle={styles.cardFront}
                    backStyle={styles.cardBack}
                    frontComponent={<div style={styles.padding10}>Wish you were here!</div>}
                    backComponent={<div style={styles.padding10}>See you soon!</div>}
                />
            </div>
        </div>
    );
}

export default Card;