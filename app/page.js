
"use client"
import {useState,useEffect} from "react";
import axios from 'axios'

export default function Home() {
  const [fullname,setFullName]= useState("");
  const [email,setEmail]= useState("");
  const [phonenumber,setPhoneNumber] = useState("")
  const [gender,setGender] = useState("")
  const [ecb,setEVB] = useState("")
  const [he,setHE] = useState("")
  const [message,setMessage] = useState("")

  const data = {
    fullname,email,phonenumber,gender,ecb,he
  }

const registerUser = async()=>{
    await axios.post('http://localhost:8080/api/users/postUser',data).then(res => setMessage(res.data))

    }

const Alert=()=>{
alert(message)
}

const fetchUser = async()=>{
await axios.get("http://localhost:8080/api/users").then(res=>console.log(res.data))
}

useEffect(
()=>{
fetchUser()
}
,[message])

  return (
 <main style={{height:"100vh"}} className="flex flex-row align-center   w-full items-center justify-center gap-3  ">

<img className=" w-[40%]" src="/learn.png" alt="" />

<div className="w-[90%] h-[100%] bg-[#00A5CF] p-4 shadow-md shadow-[grey] justify-center flex flex-col">


  <h1 className=" text-[1.7em] text-center text-[white] mb-4">BOOTCAMP REGISTRATION <br/> FORM</h1>
<div className="flex flex-col gap-4">
  <div className="flex flex-row  gap-4  ">
  <input className=" w-[70%]" type="text" onChange={(e)=>{setFullName(e.target.value)}} placeholder="Full Name" />
  <input className=" w-[70%]" type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
  </div>
  <div className="flex flex-row  gap-4   ">
  <input className=" w-[70%]" type="text" onChange={(e)=>{setPhoneNumber(e.target.value)}} placeholder="Phone Number" />
  <select className=" w-[30%]" name="" id="" onChange={(e)=>{setGender(e.target.value)}}>
    <option value="" selected hidden>Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
  </select>
  </div>
  

  <div className="flex flex-row  gap-4  ">
  
  <select className=" w-[70%] p-[10px]" name="" onChange={(e)=>{setEVB(e.target.value)}} id="">
    <option value="" selected hidden>Ever Code Before</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
    
  </select>
  <select className=" w-[30%]" name="" onChange={(e)=>{setHE(e.target.value)}} id="">
    <option value="" selected hidden>Highest Education</option>
    <option value="Tertiary">Tertiary</option>
    <option value="Secondary">Secondary</option>
    <option value="Rather Not Say">Rather Not Say</option>
  </select>
  </div>

<div className="flex justify-center ">
  <button onClick={()=>{registerUser();Alert()}} className=" self-center text-[1.4em]  bg-[#7AE582] text-[white] px-10">Register</button>
</div>
  </div>

  </div>
 </main>
  )
}
