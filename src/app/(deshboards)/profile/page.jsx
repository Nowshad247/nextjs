"use client"  // This is a client component

import React from 'react'
export default function profilePage() {
  const handelcliack = () => {
    // This function will be called when the h1 element is clicked
  }
  return (
    <div>
         <h1 onClick={handelcliack}>Profile page </h1>
    </div>
  )
}
