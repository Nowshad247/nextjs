import React from 'react'

export default function loading() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-2xl font-bold'>Loading...</h1>
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
      <p className='mt-4'>Please wait while we load the content.</p>
    </div>
  )
}
