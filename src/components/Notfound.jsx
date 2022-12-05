import React from 'react'
import Notfound_img from '../assets/Notfound.png'

function Notfound() {
  return (
    <>
    <div className=''>
        <img src={Notfound_img} style={{width:'50rem',height:'55rem',marginLeft:'40rem'}}/>
        <h1 className='text-center mb-10 text-bold'>Sorry, the resources you are looking for does not exist.
        
        </h1>

        {/* <button className='text-center'>
           Go to home page
        </button> */}
        
    </div>



    </>
  )
}

export default Notfound