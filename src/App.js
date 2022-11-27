import './App.css';
import LandingPage from './pages/landingpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninPage from './pages/login&signup/SigninPage';
import Dashboard from './pages/dashboard';


function App() {
  return (
    
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>      
        <Route path="/dashboard" element={<Dashboard/>}/>      
          <Route path='auth/login' element={<SigninPage  title="Login" signup="Sign in with Google" para="Enter your registered email address to log in to your Breach account." signin={"Don't have an account? "} login="Sign up" url='/auth/signup'/>} />     
          <Route path='auth/signup' element={<SigninPage isthere title="Join Breach" signup="Sign up with Google" para="Get content directly from your favourite creators. Discover ideas you love." signin={"Already have an account? "} login="Log in" url='/auth/login'/>} />     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
