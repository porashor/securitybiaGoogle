
import React, { useState } from 'react'
import Container from '../Container'
import useAuthPro from '../CustomHook/useAuthPro'

const LogIn = () => {
  const {LogInAll} = useAuthPro()
  const [email, setEmail] = useState("")
  const [pass, SetPass] = useState("")
  function DoSome(e){
    console.log(e)
    e.preventDefault()
    LogInAll(email, pass)
  }
  return (
    <div>
      <Container>
        {/* Header */}
        <h1 className='text-2xl uppercase font-bold text-center py-5'>Log In</h1>
        {/* Form here */}
        <form onSubmit={DoSome} className='flex flex-col gap-3 w-[60%] mx-auto text-xl font-semibold'>
          <label htmlFor="email">Email:</label>
          <input className='p-2 rounded-md bg-black/10 outline-none'  type="email" id="email" placeholder='Enter your email' value={email} onChange={e=>setEmail(e.target.value)}/>
          <label htmlFor="pass">Password:</label>
          <input className='p-2 rounded-md bg-black/10 outline-none'  type="password" id="pass" placeholder='Enter your password' value={pass} onChange={e=>SetPass(e.target.value)}/>
          <button className='p-2 rounded-md bg-green-500 outline-none uppercase font-bold' type='submit'>submit</button>
        </form>
      </Container>
    </div>
  )
}

export default LogIn
