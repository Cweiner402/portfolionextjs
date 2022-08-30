import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import dronePhoto from '../public/assets/dronePhoto.jpg'
import ShopList from '../public/assets/shoppingListUnderconst.png'
import Figma from '../public/assets/storBoard.png'
import Uform from '../public/assets/onBaseUnityform.png'

import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Drone App'
            backgroundImg={dronePhoto}
            projectUrl='/drone'
            tech='React JS/NET/SQL'
          />
          <ProjectItem
            title='Shopping List App'
            backgroundImg={ShopList}
            projectUrl='/shoppingList'
            tech='React JS/Firebase'
          />
          <ProjectItem
            title='StoryBoard Project Planning'
            backgroundImg={Figma}
            projectUrl='/figma'
            tech='Figma Design'
          />
          <ProjectItem
            title='Shared OnBase Web Form '
            backgroundImg={Uform}
            projectUrl='/uform'
            tech='Hyland OnBase / SQL '
          />
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

export default Projects
