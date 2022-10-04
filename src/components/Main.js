import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import selfie from '../assets/SteveKim.jpg'

const Main = () => {
    const [text, count] = useTypewriter({
        words: [
            "\"Hi, my name is Steve.\"",
            "\"I like coding and spaceships.\""
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center 
    text-center overflow-hidden">
        <img className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={selfie} alt="Steve Kim"/>
        <div>
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                Software Engineer
            </h2>
            <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                <span>cout&lt;&lt;</span>
                <span className="mr-3">{text}</span>
                <Cursor cursorColor="#F7AB8A" />
            </h1>
        </div>
        <div>
            <a href="#about">
                <button className="mainButton">About</button>
            </a>
            <a href="#experience">
                <button className="mainButton">Experience</button>
            </a>
            <a href="#skills">
                <button className="mainButton">Skills</button>
            </a>
            <a href="#contact">
                <button className="mainButton">Contact</button>
            </a>
        </div>
    </div>
  )
}

export default Main