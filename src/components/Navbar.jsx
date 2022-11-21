import React, { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function Navbar() {
  let Links =[
    {name:"HOME",link:"/"},
    {name:"SUPPORT CENTER",link:"/"},
    
  ];

  let [open,setOpen] = useState(false);
  return (
    <div className='shadow-md w-full fixed top-0  left-0'>
      <div className='md:flex items-center justify-between text-black  bg-white py-10 md:px-10 px-20  '>
        <div >
          <span className='text-3xl text-black mr-1 pt-2'>
            <CloseRoundedIcon/>

          </span>
          FINTECH
        </div>
        
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-20 top-10 cursor-pointer md:hidden'>
         <MenuRoundedIcon fontSize='2rem' name={open ? 'close' : 'menu'}/>
        </div>
        <ul className='md:flex md:items-center md:pb-0 md:pt-0 pt-12 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration 500 ease-in '>
          {
            Links.map((link)=>(
              <li key={link.name} className='md:ml-8 text-xl cursor-pointer md:my-0 my-7  '>
                <a href={link.link} className='text-black hover:text-orange' >{link.name}</a>
              </li>
            ))
          }
          <button className="bg-orange text-white font-[Poppins] py-2 px-10 rounded md:ml-8 hover:bg-black duration-500">
            Login
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar