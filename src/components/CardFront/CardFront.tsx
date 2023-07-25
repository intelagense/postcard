const CardFront = () => {
    return (
    <div>
        <img className=" min-w-[600px]" src="/images/road.png" alt="" />
        <img className="-hue-rotate-30 brightness-125 blur-baby w-20 h-52 absolute bottom-0 right-0" src="/images/grass.gif" alt="" />
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <p className=" text-2xl text-left font-handwrite-bold absolute top-3 left-5 drop-shadow-[1px_1px_2px_#fff] text-[#b66780]">Virtual greetings from the...</p>
        <h1 className="-rotate-[5deg] text-7xl text-left font-super bottom-5 left-5 bg-bottom  bg-sky-50
         text-transparent bg-clip-text absolute text-orange-50 drop-shadow-[0_0_5px_rgba(0,0,0,1)]">Middle<br/>of Nowhere!</h1>
        <p className="-rotate-[5deg] text-7xl text-left font-super-outline absolute bottom-5 left-5 text-black-50 drop-shadow-[0_0_5px_rgba(0,0,0,1)]">Middle<br/>of Nowhere!</p>

        </div>
    </div>
    )
}

export default CardFront