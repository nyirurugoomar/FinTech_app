import React from 'react'
import google from '../assets/googlebg.png'
import dropbox from '../assets/Dropbox_Logo.png'
import shopify from '../assets/shopify_logo-bg.png'
import slack from '../assets/slack_logo.png'
import atlassian from '../assets/atlassian_logo.png'
import Slide from 'react-reveal/Slide';


function Ourpartners() {
  return (
    <>
    <div className=' max-w-[1240px] mx-auto mt-10 mb-40 p-40'>
      <h1 className='text-center text-orange font-bold text-6xl sm:text-5xl'> Our Partners</h1>
      <Slide bottom>
      <div className='grid grid-cols-1 lg:grid-cols-5   gap-x-40 gap-y-16  pt-12 sm:pt-20 '>
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
       <div className=''>
       <img src={atlassian}  alt='/'/>
       </div>

       
       
    </div>
    </Slide>
      </div>
    </>
  )
}

export default Ourpartners