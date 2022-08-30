import Image from 'next/image'
import React from 'react'
import Figma from '../public/assets/storBoard.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh]  z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={Figma}
          alt='/'
        />
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2 className='py-2'>Figma UX and StoryBoard Design</h2>
          <h3>Figma / UX </h3>

          <br />
          <p>
            Figma is one of the best tools I've had the privilege to use. After
            adopting Figma as my sole UX design and StoryBoarding tool I have I
            saw an amazing transformation for my team. By using Figma design and
            Storyboarding I have completely changed my relationship with every
            customer I speak with. Giving the customer the power to not only
            design their end result but also communicate the process they need
            to follow to best suit their business needs before even starting
            development. By focusing on their business as a process First we
            reduce development time, rework, and cost significantly.
          </p>
          <br />
          <p>
            This mindset and project planning process is one of the best ways to
            handle legacy solutions as well. It helps not only start the
            conversation but empowers the business team to really attack the
            phrase "Because that's the way we've always done it". This
            methodology and process gives everyone a voice to really dive into
            what they need, what they want, and what is something that has
            always been done. All while giving some of the best training
            foundation for teams for those throughout a small business or even a
            Enterprise.
          </p>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Figma
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> UX
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> StoryBoard
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> DevOps
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Go Back</p>
        </Link>
      </div>
    </div>
  )
}

export default property
