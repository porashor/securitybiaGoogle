import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-[80%] mx-auto bg-yellow-300/50 my-10 p-10 rounded-lg'>
      {children}
    </div>
  )
}

export default Container
