import React, { useState } from 'react'
import Container from '../Container'
import useAuthPro from '../CustomHook/useAuthPro'
import { ToastContainer } from 'react-toastify'

const SignIn = () => {
  const {SignInAll} = useAuthPro()
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [pass, SetPass] = useState("")
  function DoSome(e){
    console.log(e)
    e.preventDefault()
    SignInAll(email,pass, fname, lname)
  }
  return (
    <div>
      <Container>
        {/* Header */}
        <h1 className='text-2xl uppercase font-bold text-center py-5'>Sign In</h1>
        {/* Form here */}
        <form onSubmit={DoSome} className='flex flex-col gap-3 w-[60%] mx-auto text-xl font-semibold'>
          <label htmlFor="fname">Firstname:</label>
          <input className='p-2 rounded-md bg-black/10 outline-none' type="text" id="fname" placeholder='Enter your firstname' value={fname} onChange={e=>setFname(e.target.value)}/>
          <label htmlFor="lname">Lastname:</label>
          <input className='p-2 rounded-md bg-black/10 outline-none'  type="text" id="lname" placeholder='Enter your lastname' value={lname} onChange={e=>setLname(e.target.value)}/>
          <label htmlFor="email">Email:</label>
          <input className='p-2 rounded-md bg-black/10 outline-none'  type="email" id="email" placeholder='Enter your email' value={email} onChange={e=>setEmail(e.target.value)}/>
          <label htmlFor="pass">Password:</label>
          <input className='p-2 rounded-md bg-black/10 outline-none'  type="password" id="pass" placeholder='Enter your password' value={pass} onChange={e=>SetPass(e.target.value)}/>
          <button className='p-2 rounded-md bg-green-500 outline-none uppercase font-bold' type='submit'>submit</button>
        </form>
        <ToastContainer/>
      </Container>
    </div>
  )
}

export default SignIn
