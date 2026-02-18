import React from 'react'

const PreLoader = () => {
  return (
    <div className='flex justify-center items-center pt-70'>
      <div className="flex pl-5   text-2xl  font-semibold text-blue-400">
        Loading
        <span className="ml-1 animate-bounce">.</span>
        <span className="ml-1 animate-bounce [animation-delay:0.15s]">.</span>
        <span className="ml-1 animate-bounce [animation-delay:0.3s]">.</span>
      </div>
    </div>
  )
}

export default PreLoader