import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AboutImg from '../public/assets/dancePhoto.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>/ / A not so typical tech dude</p>
          <p className='py-2 text-gray-600'>
            Through trials and tribulations I have spent the last 10+ years
            weaving in and out of engineering, construction, and technology find
            the niche that fits my strengths. Out of highschool I invested in my
            technical skills with the University of Nebraska as a Mechanical
            Engineer. Afterwards following my dream of owning my own company in
            a small construction startup. After four great years learning as
            many ins and outs of the industry I could I discoverd the need for
            work life balance and what software development could do for the
            world by a self driving need to mangage payroll and cost accounting.
            So I took a huge risk and decided to take a dive into the world that
            is technology. Starting first in the QA realm designing an automated
            QA pipeline for the Nebraska Department of Transportation formerly
            Nebraska Department of roads. Then moving through devolpment roles
            leading to the oppurtunity to help onboard the Nebraska Department
            of Aeronautics leading the the rebranding of NDOR to NDOT (Nebraska Department of Transportation). 
            After the onboard of the new department I and my team created a new UAS program for NDOT starting as a localized division to 
            now having six remote teams to better service the entire state of Nebraska. 
          </p>
          <p className='py-2 text-gray-600'>
            Although I have been tasked with many large startegic projects my passion is for creating the best every day solution.
            What that means to me is when tasked with a project the customer is trusting you to not only create the best product for them but trusting 
            you with their time, their process, their money, and their future. So the only thing I can do as a tech ??? is deliver and effective plan,
             timeline, estimate of cost, and my word that I will own their project as if it were my own insuring their time will be respected and valued
              throughout. 
            
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
      </div>
    </div>
  )
}

export default About
