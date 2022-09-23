import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo
}

function About({ pageInfo }: Props) {
    const src = urlFor(pageInfo.profilePic).url();


    return (
        <motion.div
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        >
        
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
            <motion.div
                className='w-44 md:w-64 xl:w-[500px] flex-shrink-0 -mb-32 py-20 md:px-4 md:py-0 md:mb-0 '
                initial={{ 
                    x: -200,
                    opacity: 0
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                transition={{ 
                    duration: 1.2
                }}
                viewport={{ once: true }}
                 >
                <Image loader={() => src} src={src} height="100%" width="100%" alt="arcueid" layout='responsive' className='rounded-full md:rounded-lg object-cover' />
            </motion.div>
            <div className='space-y-10 px-4 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>
                <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eveniet facilis porro voluptas consequuntur adipisci iure, facere reprehenderit vero repellat dolores quaerat. Eaque voluptate sunt atque quis, vero culpa dolorum cumque voluptates quas quos iure labore optio. Ad, dolores! Quas soluta, sequi ratione minima qui vitae aspernatur necessitatibus doloribus minus explicabo quasi, vero ipsum corporis quaerat deserunt provident iusto ullam?</p>
            </div>
        </motion.div>
    )
}

export default About