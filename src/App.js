

import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import  Login  from "./components/Login";
import  Support  from "./components/Support";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  return (
    <>
<Router>
      <Navbar />
     <Switch>
        <Route exact path='/' component={Home}/>
        <Route  path='/home' component={Home}/>
        <Route path='/support' component={Support}/>
        <Route path='/login' component={Login}/>
     </Switch> 
     <Footer/>
</Router>      
    </>
    
  )
}

export default App