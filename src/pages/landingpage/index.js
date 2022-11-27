import React from 'react'
import Footer from '../../component/footer/Footer'
import Home from '../../component/home/home'
import NavBar from '../../component/nav/NavBar'
import News from '../../component/newsComponent/News'

export default function LandingPage() {
  return (
    <div className="bg-[#fcfaff]">
      <NavBar/>    
      <Home/>
      <News/>
      <Footer/>
    </div>
  )
}
