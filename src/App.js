import React from 'react'
import NavbarMain from './Navbar';
import './App.css';
import Home from './Home';
import Newpost from './Newpost';
import  Signup  from './Sign/Signup'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Signin from './Sign/Signin';

function App() {
  var prePath = "/sara-daghustani/GivingHands";
  return (
    
      <div> 
        <NavbarMain />
        <Router>

            <Route path={prePath + "/newpost"} component={Newpost} />
            <Route exact path={prePath + "/"} component={Home} />
            <Route path={prePath +"/signup"} component={Signup} />
            <Route path={prePath +"/signin"} component={Signin} />
 
        </Router> 
      </div>  
  );
}
export default App;

// class App extends Component{
//   render(){


// var prePath = "/GivingHands";

//     return(
//       <div>
//       <NavbarMain />
//       <Router>
//         <Route exact path={prePath + "/"} component={Home} />
//         {/* <Route path={prePath + "/home"} component={Home} /> */}
//         <Route path={prePath + "/Newpost"} component={Newpost} />
//         <Route path={prePath + "/Signup"} component={Signup} />
//         <Route path={prePath + "/Signin"} component={Signin} />
//     </Router>
//     </div>
//     );
//   }
// }

// export default App;