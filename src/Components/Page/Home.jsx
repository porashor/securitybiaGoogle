import React, { useEffect, useState } from 'react'
import Container from '../Container'
import useAuthPro from '../CustomHook/useAuthPro'
import { toast, ToastContainer } from 'react-toastify'
import { AppData, DataStore } from '../Auth/Auth'
import { getDoc,doc } from 'firebase/firestore'

const Home = () => {
  const {LogOutAll} = useAuthPro()
  const [HomeUser, setHomeUser] = useState("")
  async function DataGet() {
    AppData.onAuthStateChanged(async(user)=>{
      const docRef = doc(DataStore, user?.displayName, user?.uid)
      const docSnep = getDoc(docRef)
      if(docSnep){
        console.log((await docSnep).data())
        setHomeUser((await docSnep).data())
        toast.success("Get data is success",{
          position: "top-left"
        })
      }else{
        toast.success("Get data is failed",{
          position: "bottom-right"
        })
      }
    })
  }
  useEffect(()=>{
    DataGet()
  },[])
  return (
    <div>
      {HomeUser ? <Container>
        {/* header */}
        <h1 className='text-2xl text-center font-bold'>Welcome Parashar Das</h1>
        {/* details section */}
        <div className='grid grid-cols-2 gap-5 items-center py-5 text-xl'>
          <div className='font-semibold space-y-2'>
            <h1>First name:</h1>
            <h1>Last name:</h1>
            <h1>Email:</h1>
          </div>
          <div className='font-semibold space-y-2'>
            <h1>{HomeUser.FirstName}</h1>
            <h1>{HomeUser.LastName}</h1>
            <h1>{HomeUser.Email}</h1>
          </div>
        </div>
        <button className='text-xl font-bold bg-green-500 w-full py-2 rounded-lg my-3' onClick={LogOutAll}>SignOut</button>
        <ToastContainer/>
      </Container> : <p>Loading...</p>}
    </div>
  )
}

export default Home
