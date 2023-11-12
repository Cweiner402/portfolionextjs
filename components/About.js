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
              Over the past decade, my professional journey has spanned engineering, 
              construction, and technology, leading me to specialize in delivering comprehensive enterprise solutions.
          </p>
          <p className='py-2 text-gray-600'>
              Starting my journey in mechanical engineering at the University of Nebraska, 
              I soon discovered a passion for being involved in projects from inception to completion.
              This realization propelled me into entrepreneurship, where I founded a construction company. 
              Here, I honed essential skills in management and discovered a growing interest in software solutions, 
              especially in streamlining operations like payroll and cost accounting. This interest catalyzed a
                bold shift in my career, leading me into the technology sector.
          </p>
          <p className='py-2 text-gray-600'>
              My tech career commenced with a QA internship at the State of Nebraska Department of Transportation, 
              where I was instrumental in developing an automated QA pipeline. Rapidly advancing, I took on a full-time role, 
              leading significant development projects and playing a pivotal role in the merger of the Department of Aeronautics
              with the Department of Roads. I was also a key figure in establishing the UAS program, expanding it into a robust, 
              multi-team operation serving all of Nebraska.
          </p>
          <p className='py-2 text-gray-600'>
              Progressing in my career, I transitioned to a role as an ECM Administrator and later a Senior Consultant at Keyhole,
              where I currently lead teams of senior developers in executing large-scale, strategic projects. 
              I am passionate about working closely with clients, crafting solutions that align perfectly with their needs,
                and ensuring utmost respect for their time, resources, and vision. My commitment to clients is unyielding: 
                I treat each project with the same dedication and attention to detail as if it were my own, ensuring efficient 
                project management, clear timelines, and transparent cost estimates.
          </p>


          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>

        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/'  />
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
