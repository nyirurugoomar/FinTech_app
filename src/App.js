
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import  Login  from "./components/Login";
import  Support  from "./components/Support";
import Home from './components/Home';
import Footer from './components/Footer'
import { Switch } from 'react-router-dom';
import Notfound from './components/Notfound';


function App() {
  return (
    <>
<Router>
      <Navbar />
     <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/home' component={Home}/>
        <Route path='/support' component={Support}/>
        <Route path='/login' component={Login}/>
        <Route path='*' component={Notfound}/>

          

     </Switch> 
     <Footer/>
</Router>      
    </>
    
  )
}

export default App