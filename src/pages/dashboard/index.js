import React from 'react'
import News from '../../component/newsComponent/News'
import Sidebar from '../../component/sidebar/Sidebar'
import Logo from '../../component/utils/Logo'

export default function Dashboard() {
  return (
    <div className='flex md:flex-col-reverse'>
    <div className="md:flex justify-center xl:hidden 2xl:hidden fixed top-0 left-0 z-20 bg-white py-6 w-full ">
      <Logo/>
    </div>
    <Sidebar/>
      <News isthere={true}/>
    </div>
  )
}
