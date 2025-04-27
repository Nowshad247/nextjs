"use client"
import React from 'react'
import { signIn, useSession } from "next-auth/react"

export default function userloginpage() {
  const data = useSession()
  return (
    <div>
      <h1>userlogin page</h1>
      <p>user info { JSON.stringify(data)}</p>
      <button type="button" onClick={() => signIn()}>Sign In </button>
    </div>
  )
}
