import React from 'react'
import google from '../assets/google.png'
import dropbox from '../assets/dropbox.png'
import shopify from '../assets/shopify.png'
import slack from '../assets/slack.png'
function Ourpartners() {
  return (
    <>
    <div className=' max-w-[1240px] mx-auto mt-10 mb-40 p-40'>
      <h1 className='text-center text-orange font-bold text-6xl'> Our Partners</h1>
      <div className='grid grid-cols-1 lg:grid-cols-4  gap-x-8 gap-y-16  pt-12 sm:pt-20 '>
    <div className=''>
    <img src={google}  alt='/'/>
       </div>
       <div className=''>
       <img src={dropbox}  alt='/'/>
       
       </div>
       <div className=''>
       <img src={shopify}  alt='/'/>
       </div>
       <div className=''>
       <img src={slack}  alt='/'/>
       </div>

       
       
    </div>
      </div>
    </>
  )
}

export default Ourpartners