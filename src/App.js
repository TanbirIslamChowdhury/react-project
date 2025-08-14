import React, {useState} from  'react';
import { BrowserRouter,Route,Routes} from 'react-router-dom'; 
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Service from './pages/Service';
// import "./assets/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
/* admin route */
//import Dashboard from './Admin/Dashboard';
//import Users from './Admin/Users';
//import Useradd from './Admin/Useradd';





import Login from './Admin/Login';
import Register from './Admin/Register';
import Dashboard from './Admin/Dashboard';
import Users from './Admin/Users';
import Useradd from './Admin/Useradd';
import Protected from './Admin/protected';
import Technicians from './Admin/Technicians';












function App() {
  const [ isSignedIn, setIsSignedIn ] = useState(()=> {
    /* if you want, user will be logged in until they logout*/
    //return localStorage.getItem("access_token") || false;
    /* if you want, user will be logged when they close the browser*/
    return sessionStorage.getItem("access_token") || false;
  });
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            
         {/* Admin route Ager ta
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/user" element={<Users />} />
          <Route path="/admin/add-user" element={<Useradd />} />

                */}


        {/* Admin route */}
        <Route path= {"/admin/dashboard"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Dashboard /> 
           </Protected>
           } />
          <Route path= {"/admin/users"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Users /> 
           </Protected>
           } />


            <Route path= {"/admin/Technicians"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Technicians /> 
           </Protected>
           } />




          <Route path="/admin/add-user" element={<Useradd />} />



















        </Routes>
    );
}
export default App;