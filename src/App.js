
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Ourimpact from "./components/Ourimpact"
import Ourpartners from "./components/Ourpartners"
import Services from "./components/Services"
import WhoweAre from "./components/WhoweAre"

import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <>
<Router>
      <Navbar />
      
      <Hero/>
      <WhoweAre/>
      <Services/>
      <Ourimpact/>
      <Ourpartners/>
      <Footer/>
</Router>      
    </>
    
  )
}

export default App