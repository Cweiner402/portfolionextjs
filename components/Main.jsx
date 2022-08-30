import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import {  FaLinkedinIn } from 'react-icons/fa'



const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center '>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center '>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S CREATE SOMETHING BETTER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Chris</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Solutions Engineer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on helping customers visualize, design, and create their
            solution.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/chris-weiner-996037114/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>

            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='https://drive.google.com/file/d/1c7Wdir8N0aZu77iCDUyfZO_l87jaUzAh/view?usp=sharing'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Main
