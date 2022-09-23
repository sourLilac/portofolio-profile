import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity';
import { Skill as TypeSkill } from '../typings'


type Props = {
    skill: TypeSkill;
    directionLeft?: boolean;
}

const Skill = ({ skill, directionLeft }: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>

        <motion.img
        className='rounded-full w-20 h-20 md:h-28 md:w-28 xl:w-32 xl:h-32 object-cover object-center flex-shrink-0 border border-gray-500 filter group-hover:grayscale transition duration-300 ease-in-out'
        initial={{ 
            x: directionLeft ? -0 : 0,
            opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        alt="" />

        <div className='absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:h-28 md:w-28  https://i.imgur.com/SMkoied.jpeg xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex justify-center h-full  items-center'>
                <p className='text-3xl font-bold text-black opacity-100'>{skill.progress}</p>
            </div>
        </div>

    </div>
  )
}

export default Skill