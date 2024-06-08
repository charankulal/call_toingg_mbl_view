import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center min-h-screen p-4'>
      <div className='flex flex-col w-full md:w-1/2 items-center pt-10 md:pt-40 sm:pb-10'>
        <h1 className='text-gray-600 font-extrabold text-3xl md:text-4xl text-center md:text-left'>
          Build AI Calling Agent that can do
        </h1>
        <br />
        <p className='text-black font-extrabold text-3xl md:text-4xl text-center md:text-left'>
          Sales Call
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center mt-4 space-y-4 md:space-y-0 md:space-x-4">
          <button className="px-4 py-2 bg-orange-400 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500">
            Build your own voice agent
            <p className='text-black font-semibold'>its free</p>
          </button>
          <button className="px-4 py-2 bg-white text-black rounded-md border-2 border-black  focus:outline-none focus:ring-2 focus:ring-orange-500 h-[60px]">
            Hear it in Action
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-r text-center from-orange-100 to-orange-200 p-2 rounded-xl shadow-lg mx-auto max-w-md w-full mt-10">
    <h1 className="text-gray-800 font-extrabold text-4xl my-4">Try now</h1>
    <p className="text-gray-600 mb-8">Get a call from Toingg</p>
    <form className="space-y-4 items-center justify-center">
      <input
        type="text"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        placeholder="Name"
      />
      <div className="relative">
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder=""
        />
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <Image src='/icons/Flag.png' alt='flag' width={30} height={30}/>
        </span>
      </div>
      <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
        <option>Choose your language</option>
      </select>
      <div className="flex justify-center">
        <button
          type="button"
          className="flex justify-center items-center px-4 py-2 bg-orange-500 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <Image src="/icons/Call.png" alt="call" width={30} height={30} className="" />
        </button>
      </div>
    </form>
  </div>
    </div>
  )
}

export default Hero
