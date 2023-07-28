const CardBack = ({ 
  message,
  setMessage,
  address,
  setAddress,
} : { 
  message: string,
  setMessage: (message:string) => void,
  address: string,
  setAddress: (message:string) => void,
}) => {
    return (
      <div className="flex h-full font-handwrite-bold text-2xl">
        <div className="w-1/2 h-full px-5 py-5 flex flex-col justify-between">
          <p className="text-left">Middle of nowhere</p>
          <div className="relative">
            <textarea
              id="message"
              className="w-full h-full px-1 bg-transparent leading-relaxed outline-none resize-none"
              rows={6}
              maxLength={120}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="-mt-1.5 w-full h-full absolute top-0 left-0 pointer-events-none">
              {Array.from(Array(6).keys()).map((key) => (
                <p key={key} className="-mb-px border-b border-gray-500 text-transparent leading-relaxed">.</p>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full px-5 py-5 flex flex-col justify-between">
          <div className="flex justify-end">
            <img src="/images/stamp.png" className="" style={{ width: "100px" }} />
          </div>
          <div className="relative">
            <textarea 
              id="address"
              className="w-full h-full bg-transparent leading-relaxed outline-none resize-none"
              rows={4}
              maxLength={80}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
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