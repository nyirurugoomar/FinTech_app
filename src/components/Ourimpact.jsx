import React from 'react'
import CountUp from 'react-countup';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';



function Ourimpact() {
  return (
    <>
<h1 className='text-center text-orange font-bold text-6xl'>Our Impact</h1>
<div className='max-w-[1240px] mx-auto mt-40 mb-80  '>
    <div className='grid grid-cols-1 lg:grid-cols-3  gap-x-8 gap-y-16  pt-8 sm:pt-20  '>
      <div className=' bg-white px-20 shadow-2xl py-8 rounded-xl  '>
        
      
    <h1  className='text-orange font-bold text-5xl text-center'>
    
    <div className=' text-black mr-60 flex '>
        <PeopleAltIcon fontSize='70rem'/>
      </div> 
     +<CountUp
            start={0}
            end={500}
            duration={9.20}
            /> 
            {" "}
            
            USERS</h1> 
       </div>
       <div className=' bg-white px-20 shadow-2xl py-8 rounded-xl '>
        
      
    <h1  className='text-orange font-bold text-5xl text-center'>
    
    <div className=' text-black mr-60 flex '>
        <PeopleAltIcon fontSize='20rem'/>
      </div> 
     +<CountUp
            start={0}
            end={500}
            duration={9.20}
            /> 
            {" "}
            PRODUCTS</h1> 
       </div>
       <div className=' bg-white px-20 shadow-2xl py-8 rounded-xl '>
        
      
    <h1  className=' text-orange font-bold text-5xl text-center'>
    
    <div className=' text-black mr-60 flex '>
        <PeopleAltIcon fontSize='20rem'/>
    </div> 
     +<CountUp
            start={0}
            end={500}
            duration={9.20}
            /> 
            {" "}
            COUNTRIES</h1> 
       </div>
    </div>
</div>    
      
    </>
    
  )
}

export default Ourimpact