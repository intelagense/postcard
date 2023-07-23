const CardFront = () => {
    return (
    <div>
        <img src="/images/road.png" alt="" />
        <img className="-hue-rotate-30 brightness-125 blur-baby w-1/6 h-1/2 absolute bottom-0 right-0" src="/images/grass.gif" alt="" />
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <h2 className="text-7xl text-left font-super bottom-3 left-5 bg-bottom brightness-150 bg-[url('/public/images/clouds2.gif')] text-transparent bg-clip-text text-left absolute text-orange-50 drop-shadow-[0_0_5px_rgba(0,0,0,1)]">Scenic<br/>Somewhere</h2>
        <h2 className="text-7xl text-left font-super-outline absolute bottom-3 left-5 text-black-50 drop-shadow-[0_0_5px_rgba(0,0,0,1)]">Scenic<br/>Somewhere</h2>

        </div>
    </div>
    )
}

export default CardFront