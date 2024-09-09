import React from 'react'
import SecondPart from './components/SecondPart'

const App = () => {
  return (
    <div
      className="min-h-screen lg:p-10 bg-[#000000de] flex lg:flex-row flex-col 
      shadow-[inset_0px_0px_10px_10px_rgba(0,0,0,0.75)]  lg:justify-center items-center"
    >
      <div
        className="w-[680px]  bg-[#616161D1] mt-10 lg:mt-0"
      >
      </div>
      <SecondPart />
    </div>
  )
}

export default App
