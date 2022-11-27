import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../component/utils/Logo'

export default function SigninPage({isthere, signin, login, url, para, signup, title}) {
    return (
        <div className='p-12 md:p-4 md:py-12'>
           
     <Logo/>
            <Link className='flex font-normal text-[#000000] ml-24 md:ml-1 md:pt-8 pt-16 items-center rounded-md md:text-base mt-2 font-space text-lg' to="/"><img src="/img/caret-left.svg" className='mr-2 h-3' alt="" /> Back</Link>
            <div className="m-auto flex w-[40%] md:w-full md:px-6 flex-col items-center">
                <h1 className=" font-medium text-[#000000]  rounded-md mt-2 font-space text-4xl my-4">{title}</h1>
                <p className=" font-normal mb-14 text-[#000000] text-center rounded-md md:text-base mt-2 font-space text-lg">{para}</p>
                <Link className="border border-[#18181841] text-center justify-center  md:text-base  px-6 font-normal w-full rounded-md  flex items-center font-space text-lg py-4" to="/auth/login">
                    <svg width="21" className='mr-2' height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6713 8.36794H18.0001V8.33335H10.5001V11.6667H15.2097C14.5226 13.6071 12.6763 15 10.5001 15C7.73883 15 5.50008 12.7613 5.50008 10C5.50008 7.23877 7.73883 5.00002 10.5001 5.00002C11.7747 5.00002 12.9342 5.48085 13.8172 6.26627L16.1742 3.90919C14.6859 2.5221 12.6951 1.66669 10.5001 1.66669C5.898 1.66669 2.16675 5.39794 2.16675 10C2.16675 14.6021 5.898 18.3334 10.5001 18.3334C15.1022 18.3334 18.8334 14.6021 18.8334 10C18.8334 9.44127 18.7759 8.89585 18.6713 8.36794Z" fill="#181818"></path><path d="M3.12744 6.12127L5.86536 8.12919C6.60619 6.29502 8.40036 5.00002 10.4999 5.00002C11.7745 5.00002 12.9341 5.48085 13.817 6.26627L16.1741 3.90919C14.6858 2.5221 12.6949 1.66669 10.4999 1.66669C7.29911 1.66669 4.52327 3.47377 3.12744 6.12127Z" fill="#181818"></path><path d="M10.5 18.3333C12.6525 18.3333 14.6084 17.5096 16.0871 16.17L13.508 13.9875C12.6713 14.6212 11.6313 15 10.5 15C8.33255 15 6.49213 13.6179 5.7988 11.6891L3.0813 13.7829C4.46047 16.4816 7.2613 18.3333 10.5 18.3333Z" fill="#181818"></path><path d="M18.6712 8.3679L18.6646 8.33331H18H10.5V11.6666H15.2096C14.8796 12.5987 14.28 13.4025 13.5067 13.9879C13.5071 13.9875 13.5075 13.9875 13.5079 13.9871L16.0871 16.1696C15.9046 16.3354 18.8333 14.1666 18.8333 9.99998C18.8333 9.44123 18.7758 8.89581 18.6712 8.3679Z" fill="#181818"></path></svg>
                  {signup}
                   </Link>
                <div class=" my-8 font-normal text-[#000000] font-space text-xl">OR</div>

               <div className="w-full mb-8 font-normal text-[#000000] font-space">
                 <label htmlFor="email" className="ml-1">Email</label><br/>
                <input type="email" placeholder='Email address' className='my-2 px-6 py-4 border-2 rounded-md w-full border-[#181818]' />
                <i className="font-normal text-[#f44236] font-space italic  md:text-base ">email address cannot be empty</i>
                </div>
                <Link to="/dashboard" className="border border-[#18181841]  md:text-base  text-white bg-[#181818] justify-center w-full px-6 font-medium rounded-md  flex items-center font-space text-lg py-4">
                    Continue
                </Link>

                <p className="font-normal  md:text-base text-center  text-[#000000] font-space my-8">  {signin} <a className="underline" href={url}>{login}</a></p>

                {
                    isthere && (
                        <p className="font-normal  md:text-base text-center  text-[#000000] font-space my-8">By signing up, you agree to Breach’s <span className="text-[#8311f9]">Terms</span> & <span className="text-[#8311f9]">Privacy Policy</span></p>
                    )
                }

            </div>

        </div>
    )
}
