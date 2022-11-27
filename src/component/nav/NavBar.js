import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../utils/Logo'

export default function NavBar() {
    return (
        <nav className="bg-[#fcfaff]">
            <div className="flex items-center justify-between px-16 md:px-8 sm:px-5 py-12">
                <Logo/>
                <div className="">
                    <Link className="border border-[#18181841] px-6 font-medium rounded-md mr-9 md:mr-0  font-space text-lg py-4" to="/auth/login">Log in</Link><Link className="border px-6 font-medium text-white rounded-md font-space text-lg py-4 bg-[#8311f9] sm:hidden" to="/auth/signup">Join Breach</Link>
                </div>
            </div>
        </nav>
    )
}
