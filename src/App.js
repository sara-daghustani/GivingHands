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
  // var prePath = "sara-daghustani.github.io/GivingHands/";
  var prePath = "/";
  return (
    
      <div> 
        <NavbarMain />
        <Router>

            <Route exact path={"/newpost"} component={Newpost} />
            <Route exact path={prePath + "/"} component={Home} />
            {/* <Route path={"/"} component={Home} /> */}
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
 
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