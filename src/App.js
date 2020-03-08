import React, { Component } from 'react'
import NavbarMain from './Navbar';
import './App.css';
import Home from './Home';
// import { Route, BrowserRouter} from 'react-router-dom';
import Newpost from './Newpost';
import  Signup  from './Sign/Signup'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Signin from './Sign/Signin';

// function App() {
  
//   return (
    
//       <div> 
  

//         <NavbarMain />
//         <BrowserRouter>

//             <Route exact path="/newpost" component={Newpost} />
//             <Route exact path="/" component={Home} />
//             <Route path="/signup" component={Signup} />
//             <Route path="/signin" component={Signin} />
 
//         </BrowserRouter> 
//       </div>  
//   );
// }
// export default App;

class App extends Component{
  render(){


var prePath = "/GivingHands";

    return(
      <div>
      <NavbarMain />
      <Router>
        <Route exact path={prePath + "/"} component={Home} />
        {/* <Route path={prePath + "/home"} component={Home} /> */}
        <Route path={prePath + "/Newpost"} component={Newpost} />
        <Route path={prePath + "/Signup"} component={Signup} />
        <Route path={prePath + "/Signin"} component={Signin} />
    </Router>
    </div>
    );
  }
}

export default App;