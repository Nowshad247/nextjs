import React from 'react'

export default function layout({ children }) {
  return (
    <div className='clore-bg-gray-100 min-h-screen flex flex-col justify-center items-center'>
      {children}
    </div>
  )
}
