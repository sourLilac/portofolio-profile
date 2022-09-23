import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    experience: Experience
}

function ExperienceCard({ experience }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center text-center md:text-left space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden mt-10 max-h-[600px] md:max-h-full'>
            <motion.div
            className='w-32 h-32 xl:w-[200px] xl:h-[200px]'
            initial={{ y: -100, opacity: 0,}}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            >
                <Image loader={() => urlFor(experience.companyImage).url()} src={urlFor(experience.companyImage).url()} height="100%" width="100%" alt="arcueid" layout='responsive' className='' />
            </motion.div>
            <div className='px-8 md:px-10'>
                <h4 className='text-4xl font-light'>{experience.jobTitle}</h4>
                <p className='font-bold text-2xl mt-1'>{experience.company}</p>
                <div className='flex space-x-2 my-2 justify-center md:justify-start'>
                    {experience.technologies.map((technology) => (
                        <Image key={technology._id} loader={() => urlFor(technology.image).url()} src={urlFor(technology.image).url()} height="40" width="40" alt={technology.title} className='rounded-full' />
                    ))}
                </div>
                <p className='uppercase py-5 text-gray-300'>
                    {new Date(experience.dateStarted).toDateString()} -{" "}
                    {experience.isCurrentlyWorkingHere 
                    ? "Present" :
                    new Date(experience.dateEnded).toDateString()}
                </p>
                <ul className='list-disc space-y-4 ml-5 text-lg h-44 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 pr-5'>
                        {experience.points.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard