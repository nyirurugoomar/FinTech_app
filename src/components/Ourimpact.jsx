import React from 'react'
import CountUp from 'react-countup';


function Ourimpact() {
  return (
    <>
    <h1 className='text-center text-orange font-bold text-6xl'>Our Impact</h1>
<div className='max-w-[1240px] mx-auto mt-40 mb-80  '>
    <div className='grid grid-cols-1 lg:grid-cols-3  gap-x-8 gap-y-16  pt-12 sm:pt-20 '>
    <div className='text-orange px-60'>
          <h1 className='font-bold text-6xl text-center'><h1 className='font-bold text-6xl text-center'>
          +<CountUp
            start={0}
            end={500}
            duration={9.20}
            /> 
            <br/>
            {/* +100 Products */}
            USERS</h1> </h1> 
       </div>
       <div className='text-orange'>
       <h1 className='font-bold text-6xl text-center'>
          +<CountUp
            start={0}
            end={100}
            duration={9.20}
            /> 
            <br/>
            {/* +100 Products */}
            PRODUCTS</h1> 
       </div>
       <div className='text-orange'>
          <h1 className='font-bold text-6xl text-center'>
          +<CountUp
            start={0}
            end={300}
            duration={9.20}
            /> 
            <br/>
            {/* +100 Products */}
            COUNTRY</h1> 
       </div>
    </div>
</div>    
      
    </>
    
  )
}

export default Ourimpact