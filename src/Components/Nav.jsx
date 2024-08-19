import React from 'react'
import { Navbar } from "../Components/Data/Data"
import { GoMail } from 'react-icons/go'
const Nav = () => {
  return (
    <div className='bg-cyan-500 py-5'>
      <div className='w-[80%] mx-auto my-2 flex gap-4 items-center justify-between'>
        {/* logo */}
        <h1 className=''><a href="/" className='text-xl font-bold flex items-center justify-center gap-3 hover:text-red-700 duration-200 transition-all'>Gamil <GoMail/></a></h1>
        {/* nav */}
        <div className='flex gap-4 items-center justify-between'>{Navbar.map((item, index)=>(
            <div key={index}>
                <a href={item.link} className='text-xl font-semibold uppercase hover:underline duration-200 transition-all'>{item.name}</a>
            </div>
        ))}</div>
      </div>
    </div>
  )
}

export default Nav
