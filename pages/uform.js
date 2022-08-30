import Image from 'next/image'
import React from 'react'
import uform from '../public/assets/onBaseUnityform.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={uform}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>OnBase Public Form</h2>
          <h3>Hyland OnBase / SQL / .NET API / 3rd pary service </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2>Overview</h2>
          <br />
          <p>
            This Web Form is but the tip of the iceberg of a multi solution
            system to best handle a need to both apply to be a consultant for
            the State Of Nebraska Department of Transportation and recertify
            existing consultants as needed per state legislation. This is a
            public Unity Form created in OnBase. After being submitted this form
            is ingested into the software OnBase created by Hyland Resources.
            Once ingested the form is placed in a workflow to handle multiple
            approvals from different agencies throughout the state. After
            approvals data from this form is parse into a workview application
            for data visualization and reporting. On a timed based this data is
            then picked up via a custom API which uses a 3rd party service to
            move data into a parrel source system used by multiple agencies
            throughout the State of nebraska.
          </p>
          <a
            href='https://ecmndotp.nebraska.gov/AppNet/UnityForm.aspx?d1=AUa0ClL0IqmxC6%2fkg2eabc5fV7whHlz1uRYJnxa2QQNghSbbE1fWEfNg7PB%2bQIxvcksj%2bI3Clh8f914zjeWK9kyzWB4doBE0yjhqPfCq5g15rYUycJgHt3ShJYz%2b%2fSBWm5NyIXPecWfwGy03RiuYFAeLkxd1SoZPuZNdtWHbERzOko8Eg7bBMMdXiFK221wse%2fZq2CEiYcDQzPqp6fbEWa6bse6skc56kwmyttRry2M%2b'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> OnBase - Workflow
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> OnBase - WorkView
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> OnBase - Unity Form
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> SQL
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Aashtoware Service
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Azure
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
