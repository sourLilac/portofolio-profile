import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
    const src = urlFor(pageInfo?.heroImage).url()
    const [text, count] = useTypewriter({
        words: [`Hi, The Name's ${pageInfo?.name}` , `${pageInfo?.backgroundInformation}`],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div className='h-screen flex flex-col pt-24 space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image loader={() => src} src={src} height="200" width="200" alt="arcueid" className='relative rounded-full mx-auto object-cover' />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}