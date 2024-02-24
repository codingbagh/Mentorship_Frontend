

export default function Home() {
  return (
 <main style={{height:"100vh"}} className="flex flex-row align-center   w-full items-center justify-center gap-3  ">

<img className=" w-[40%]" src="/learn.png" alt="" />

<div className="w-[90%] h-[100%] bg-[#00A5CF] p-4 shadow-md shadow-[grey] justify-center flex flex-col">


  <h1 className=" text-[1.7em] text-center text-[white] mb-4">BOOTCAMP REGISTRATION <br/> FORM</h1>
<div className="flex flex-col gap-4">
  <div className="flex flex-row  gap-4  ">
  <input className=" w-[70%]" type="text" placeholder="Full Name" />
  <input className=" w-[70%]" type="text" placeholder="Email" />
  </div>
  <div className="flex flex-row  gap-4   ">
  <input className=" w-[70%]" type="text" placeholder="Phone Number" />
  <select className=" w-[30%]" name="" id="">
    <option value="" selected hidden>Gender</option>
    <option value="">Male</option>
    <option value="">Female</option>
  </select>
  </div>
  

  <div className="flex flex-row  gap-4  ">
  
  <select className=" w-[70%] p-[10px]" name="" id="">
    <option value="" selected hidden>Ever Code Before</option>
    <option value="">Yes</option>
    <option value="">No</option>
    
  </select>
  <select className=" w-[30%]" name="" id="">
    <option value="" selected hidden>Highest Education</option>
    <option value="">Tertiary</option>
    <option value="">Secondary</option>
    <option value="">Rather Not Say</option>
  </select>
  </div>

<div className="flex justify-center ">
  <button className=" self-center text-[1.4em]  bg-[#7AE582] text-[white] px-10">Register</button>
</div>
  </div>

  </div>
 </main>
  )
}
