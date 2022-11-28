import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import Subfooter from './Subfooter'
import logo from '../assets/logoorg.png'
function Footer() {
  return (
<>
    <div className='max-w-[1240px] mx-auto mt-10  bg-black_light  '>
    <div className='grid grid-cols-1 lg:grid-cols-3  gap-x-8 gap-y-16  pt-8 sm:pt-20  '>
      <div className='px-10  py-8   '>
       {/* Logo */}
       <h1 className='text-orange text-bold mb-10'>Powered By:</h1>  
       {" "}
       <a href="#" className="nav__brand text-white font-serif textbold">
       <img src={logo} alt=""/>
      </a>
       </div>
       <div className='px-20  py-8  '>
       {/* Quick link */}
       <h1 className='text-orange text-bold'>QUICK LINK</h1>
        <a href="#" className="nav__link text-white hover:text-orange">
                Home
            </a>
            <br/>
            <a href="#" className="nav__link text-white hover:text-orange">
            Support Center
            </a>
       </div>
       <div className='  px-20  py-8   '>
       {/* Get in touch */}
       <h1 className='text-orange text-bold'>GET IN TOUCH</h1>
       <p className='text-white py-3'>
       <PhoneIcon sx={{ fontSize: 30 }} className='text-white  '/>
       {" "} +250 756 974 982
       </p>
       
       <p className='text-white py-3'>
       <FacebookOutlinedIcon sx={{ fontSize: 30 }} className='text-white  '/>
       {" "} Fintech@
       </p>
       <p className='text-white py-3'>
       <SubscriptionsRoundedIcon sx={{ fontSize: 30 }} className='text-white  '/>
       {" "} Fintech
       </p>
       </div>
       
       
</div>
</div>

<Subfooter/>
</>
  )
}

export default Footer