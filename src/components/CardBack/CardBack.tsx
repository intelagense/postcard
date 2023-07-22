const CardBack = () => {
    return (
      <div className="flex h-full">
        <div className="w-1/2 h-full px-2 py-4 flex flex-col justify-between">
          <p className="text-left">Postcard</p>
          <div className="relative">
            <textarea
              className="w-full h-full bg-transparent text-left leading-relaxed outline-none resize-none"
              rows={6}
              maxLength={50}
            >
              Wanted to send ya some good ol' cowboy vibes from the digital frontier. Picture me, sittin' tall in the saddle, wearin' my shiniest spurs, and grinnin' like a possum eatin' a sweet corn cob!
            </textarea>
            <div className="-mt-1.5 w-full h-full absolute top-0 left-0 pointer-events-none">
              {Array.from(Array(6).keys()).map((key) => (
                <p key={key} className="-mb-px border-b border-gray-500 text-transparent leading-relaxed">.</p>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full px-2 py-4 flex flex-col justify-between">
          <div className="flex justify-end">
            <div className="border-2 border-gray-700 bg-lime-300" style={{ width: "80px", height: "120px" }}></div>
          </div>
          <div className="relative">
            <textarea 
              className="w-full h-full bg-transparent text-left leading-relaxed outline-none resize-none"
              rows={4}
              maxLength={20}
            >
              Cowboy&#13; &#10;Texas USA &#13; &#10;  &#13; &#10; 
            </textarea>
            <div className="-mt-1.5 w-full h-full absolute top-0 left-0 pointer-events-none">
              {Array.from(Array(4).keys()).map((key) => (
                <p key={key} className="-mb-px border-b border-gray-500 text-transparent leading-relaxed">.</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}

export default CardBack