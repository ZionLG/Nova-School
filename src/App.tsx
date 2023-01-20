import { useState } from 'react'
import './input.css'

function App() {

  return (
    <div className="flex h-full">
      <div className="bg-gray-50 flex flex-col flex-1 min-w-[300px]" >
        <div className='flex-6  border-black'>
          <div className='rounded-lg border border-black h-[calc(100%-5rem)] p-10 mt-10 mx-10 '></div>
        </div>
        <div className='h-[1px] bg-black'></div>
        <div className='h-24'></div>
      </div>
      <div className='w-[1px] bg-black'></div>
      <div className="bg-gray-100 flex-3 min-w-[500px] flex flex-col" >
        <div className='flex-6'></div>
        <div className='h-[1px] bg-black'></div>
        <div className='h-24'></div>
      </div>
    </div>
  )
}

export default App
