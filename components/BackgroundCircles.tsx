import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
        className='relative flex justify-center items-center'
        initial={{ opacity: 0 }}
        animate={{ 
            scale: [1,2,2,3,1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
            borderRadius: ['20%', "20%", "50%", "80%", "20%"],
         }}
         transition={{ 
            duration: 2.5
          }}
        >
        <div className='absolute border border-[#333333] h-[200px] w-[200px] rounded-full mt-52 animate-ping' />
        <div className='absolute border border-[#333333] h-[300px] w-[300px] rounded-full mt-52' />
        <div className='absolute border border-[#333333] h-[500px] w-[500px] rounded-full mt-52' />
        <div className='absolute border border-[#F7AB0A] h-[650px] w-[650px] rounded-full mt-52 opacity-20 animate-pulse' />
        <div className='absolute border border-[#333333] h-[800px] w-[800px] rounded-full mt-52' />

        
        
        
        
        
    </motion.div>
  )
}

export default BackgroundCircles