import React from 'react'
import Hero from "./Hero"
import Ourimpact from "./Ourimpact"
import Ourpartners from "./Ourpartners"
import Services from "./Services"
import WhoweAre from "./WhoweAre"

function Home() {
  return (
    <>
      <Hero/>
      <WhoweAre/>
      <Services/>
      <Ourimpact/>
      <Ourpartners/>
      
    </>
  )
}

export default Home