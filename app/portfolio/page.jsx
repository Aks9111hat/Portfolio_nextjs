"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from 'next/link';

const items = [
    {
        id: 1,
        color: "from-blue-300 to-violet-300",
        title: "Covid Contact Management",
        desc: " I’ve developed an application leveraging Redux for seamless data management. Additionally, it integrates Tanstack Query API to dynamically display COVID-19 statistics, including cases,recoveries, and deaths through both interactive line graphs and a comprehensive world map interface.",
        img: "https://i.ibb.co/jvGbBx5/Covid-contact-app.png",
        link: "https://covidcontactapp.vercel.app/"
    },
    {
        id: 2,
        color: "from-violet-300 to-purple-300",
        title: "Memory Card Game",
        desc: "The memory card game, or Concentration, involves flipping over cards to find matching pairs. Players take turns, and the one with the most pairs wins. It's great for all ages!",
        img: "https://static.virtubox.io/project/file/20240229-070115-5ymi-gmeply_icon.png",
        link: "https://gamesappakshat.netlify.app/"
    },
    {
        id: 3,
        color: "from-purple-300 to-indigo-300",
        title: "Connect 4 Game",
        desc: "Connect 4 is a two-player game where players take turns dropping discs into a grid. The goal is to align four discs in a row vertically, horizontally, or diagonally.",
        img: "https://i.ibb.co/Qm4FKHh/connect-four.png",
        link: "https://gamesappakshat.netlify.app/"
    },
    {
        id: 4,
        color: "from-indigo-300 to-blue-300",
        title: "Tower Stacking Game",
        desc: "In this Game You have to stack the moving blocks to make a tower as high as you can.",
        img: "https://i.ibb.co/MS7cHjM/tower-Stacking.png",
        link: "https://gamesappakshat.netlify.app/"
    },
    {
        id: 5,
        color: "from-blue-300 to-emerald-500",
        title: "Whack-A-Mole Game",
        desc: "This is an Arcade game brought to you on your laptop. In this game You have to hit the mole to score the heighest Score.",
        img: "https://i.ibb.co/GQF86s2/whack-AMole.png",
        link: "https://gamesappakshat.netlify.app/whack-a-mole"
    },
    {
        id: 6,
        color: "from-emerald-500 to-green-300",
        title: "Catch the Sticks Game",
        desc: "In this Game you have to start the game by clicking on the button and then you have to catch the falling sticks.",
        img: "https://i.ibb.co/f4KJN1n/Catch-The-Sticks.png",
        link: "https://gamesappakshat.netlify.app/catch-the-sticks"
    },
    {
        id: 7,
        color: "from-green-300  to-blue-500",
        title: "Health App",
        desc: "In this app you can generate diet plan and workout plan using the power of AI and can record your exercise to watch out for your progress.",
        img: "https://i.ibb.co/QDjTqkT/Health-App.png",
        link: "https://fluffy-journey-i.vercel.app/"
    },
];

const PortfolioPage = () => {

    const ref = useRef()
    const { scrollYProgress } = useScroll({ target: ref })
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"])

    return (
        <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
            <div className='h-[600vh] relative' ref={ref}>
                <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">My Works</div>
                <div className="sticky top-0 flex h-screen gap-4 item-center overflow-hidden">
                    <motion.div style={{ x }} className="flex">
                        <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-blue-300' />
                        {items.map(item => (
                            <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color} `} key={item.id}>
                                <div className="flex flex-col gap-8 text-white">
                                    <h1 className="text-xl font-bold md:text-2xl lg:text-4xl xl:text-6xl">{item.title}</h1>
                                    <div className="relative w-60 h-40 md:w-80 md:h-56 lg:w-[380px] lg:h-[220px] xl:w-[480px] xl:h-[320px]">
                                        <Image src={item.img} alt="" fill />
                                    </div>
                                    <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">{item.desc}</p>
                                    <Link href={item.link} rel="noopener noreferrer" target="_blank" className="flex justify-end"><button className="p-2 text-sm md:p-4 md:text-md lg:p-6 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button></Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className='w-screen h-screen flex flex-col gap-16 items-center justify-center text-center'>
                <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold">Do you have a project?</h1>
                <div className='relative'>
                    <motion.svg animate={{ rotate: 360 }} transition={{ duration: 8, ease: "linear", repeat: Infinity }} viewBox="0 0 300 300" className="w-64 h-64 md:w-[500px] md:h-[500px]">
                        <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                            />
                        </defs>
                        <text fill="#000">
                            <textPath xlinkHref="#circlePath" className="text-xl">Front-end Developer and UI Designer</textPath>
                        </text>
                    </motion.svg>
                    <Link href="/contact" rel="noopener noreferrer" target="_blank" className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center">Hire Me</Link>
                </div>
            </div>
        </motion.div>

    );
};

export default PortfolioPage;