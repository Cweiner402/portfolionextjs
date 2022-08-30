import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import AboutImg from '../public/assets/dancePhoto.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 '>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>

          <p className='py-2 text-gray-600'>
            &#34;A not so typical tech dude&#34;
          </p>

          <p className='py-2 text-gray-600'>
            In the last 10 years, I have experienced a diverse career path.
            I&#39;ve navigated through engineering, construction, and technology
            until finding my niche in delivering enterprise solutions.
          </p>
          <p className='py-2 text-gray-600'>
            Fresh from high school, I enrolled in a mechanical engineering
            program at the University of Nebraska. After completing an
            internship, I realized I desired a career in which I could be part
            of conception to completion of a project. It was then I decided to
            pursue my goal of owning my own company and began working as a
            general contractor. My construction company taught me many valuable
            skills including the need for work-life balance and software
            solutions. The use of software in managing payroll and cost
            accounting piqued my interest and I took a huge risk to leave my
            company and pursue work within the tech world.
          </p>
          <p className='py-2 text-gray-600'>
            I began my career within the industry as an intern on the QA team at
            the State of Nebraska Department of Transportation (formerly
            Department of Roads) designing an automated QA pipeline. I quickly
            moved into a full time position leading numerous development
            projects and helped with the merging of the Department of
            Aeronautics and the Department of Roads. After the merger, my team
            and I created a new UAS program for the agency, which has grown from
            a localized division to six remote teams to better provide services
            across Nebraska.
          </p>
          <p className='py-2 text-gray-600'>
            In 2018, I received an opportunity to move into a ECM Administrator
            role and now lead a team of senior developers in large strategic
            projects. While I enjoy my current role, I have a passion for
            working with customers in creating everyday solutions. It is vital
            to me to create the best product for the customer while respecting
            their processes, time, money, and future. My pledge to customers is
            that I will treat their project as if it was one of my own. I will
            deliver an effective plan, timeline, and cost estimate and they will
            be respected and valued throughout the project.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>

        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
