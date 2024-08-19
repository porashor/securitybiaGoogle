import React from 'react'
import { AppData, DataStore } from '../Auth/Auth'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
const useAuthPro = () => {
    //signIn function
    async function SignInAll(email, password, fname, lname) {
        const fullName = fname+" "+lname
        try{
            //create user section
            await createUserWithEmailAndPassword(AppData, email, password)
            //profile updating section
            const user = AppData.currentUser
            if(user){
                updateProfile(user, {
                    displayName: fullName
                })
            }
            //data send in firestore 
            if(DataStore){
                const docRef = doc(DataStore, fullName, user?.uid)
                setDoc(docRef, {
                    FirstName: fname,
                    LastName: lname,
                    Email: email
                })
            }
            //status massaging sectoin by toast
            toast.success("create account succes", {
                position: "top-center"
            })
            //redirecting to Home
            setTimeout(()=>{
                window.location.href = "/"
            },5000)
        }catch(err){
            //error showing by toast 
            toast.success(err, {
                position: "bottom-left"
            })
        }
    }

    //logIn function
    async function LogInAll(email, password) {
        try{
            //login user section
            await signInWithEmailAndPassword(AppData, email, password)
            //status massaging sectoin by toast
            toast.success("User Loging in succesful", {
                position: "top-center"
            })
            //redirecting to Home
            setTimeout(()=>{
                window.location.href = "/"
            },5000)
        }catch(err){
            //error showing by toast 
            toast.success(err, {
                position: "bottom-left"
            })
        }
    }
    //logOut function
    async function LogOutAll(email, password) {
        try{
            //logOut user section
            await signOut(AppData)
            //status massaging sectoin by toast
            toast.success("User LogOut succesful", {
                position: "top-center"
            })
            //redirecting to Login page 
            setTimeout(()=>{
                window.location.href = "login"
            },5000)
        }catch(err){
            //error showing by toast 
            toast.success(err, {
                position: "bottom-left"
            })
        }
    }

    //sign in with the google mail
    async function googleGet() {
        //creating the provider
        const provider= new GoogleAuthProvider()
        try{
            //creating user by goole mail
            await signInWithPopup(AppData, provider)
            //get user
            const user = AppData.currentUser
            console.log(user)
            //data send in firestore 
            const docRef = doc(DataStore, user?.displayName, user?.uid)
            setDoc(docRef, {
                FirstName: user?.displayName,
                LastName: user?.displayName,
                Email: user?.email,
                Photo: user?.photoURL
            })
            //sending toast massaging
            toast.success("google logIn success",{
                position: "top-right"
            })
        }catch{
            toast.success("google logIn failed",{
                position: "bottom-right"
            })
        }
    }
  return {SignInAll, LogInAll, LogOutAll, googleGet}
}

export default useAuthPro
