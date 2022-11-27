import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../utils/Logo'
import Pen from '../utils/pen'
import { RiHome5Fill, RiMessage3Fill } from "react-icons/ri";
import { MdSpaceDashboard } from "react-icons/md";


export default function Sidebar() {
    return (
        <div className='fixed  min-w-[296px] bg-white  md:h-20 h-screen md:w-full md:bottom-0 md:flex-row left-0 z-50 p-6 md:p-2 md:items-center flex flex-col border-r-2'>
            <div className="mt-20 md:hidden">
                <Logo />
            </div>
            <a className="border mt-16 md:mt-0 md:absolute lg:hidden md:flex md:rounded-full 2xl:hidden px-6 md:px-3 right-8 -top-20 text-center flex items-center  justify-center font-medium text-white rounded-md font-space text-lg py-3 bg-[#8311f9] " href="/auth/signup"><Pen /></a>

            <a className="border mt-16 md:mt-0 md:absolute md:hidden px-6 text-center flex items-center  justify-center font-medium text-white rounded-md font-space text-lg py-3 bg-[#8311f9] " href="/auth/signup"><Pen /> Start writing</a>

            <ul className=' mt-10 md:mt-0 px-6 items-center  justify-center md:flex md:flex-row  font-medium text-[#929292] rounded-md font-space text-lg py-3'>
                <li>
                    <Link className='flex items-center md:mr-4 md:flex-col md:justify-center mt-16 md:mt-0 hover:text-[#8311f9]' to="">< RiHome5Fill className='mr-2 text-2xl' /> Home</Link>
                </li>
                <li>
                    <Link className='flex items-center md:mr-4 md:flex-col md:justify-center mt-16 md:mt-0 hover:text-[#8311f9]' to="">< MdSpaceDashboard className='mr-2 text-2xl' /> DashBoard</Link>
                </li>
                <li>
                    <Link className='flex items-center md:mr-4 md:flex-col md:justify-center mt-16 md:mt-0 hover:text-[#8311f9]' to="">< RiMessage3Fill className='mr-2 text-2xl' /> Publications</Link>
                </li>
            </ul>
            <div className="flex mt-20 md:mt-0 relative -bottom-20 md:flex-col md:justify-center md:mr-0  md:bottom-0 left-3 md:left-0 items-center md:items-start ">
                <img className='rounded-full h-8 mr-3' src="/img/avatar.png" alt="avatar" />
                <span>Faith</span>
            </div>
        </div>
    )
}
