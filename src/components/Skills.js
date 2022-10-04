import { motion } from 'framer-motion'
import Java from '../assets/Java.png'
import Python from '../assets/Python.png'
import Matplotlib from '../assets/Matplotlib.png'
import Cpp from '../assets/C++.png'
import Autodesk from '../assets/Autodesk.png'

const Skills = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="flex flex-col relative h-screen text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 
        text-2xl">
            Skills
        </h3>

        <h4 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
            You can hover over a skill to check the proficiency
        </h4>

        <div className="grid grid-cols-4 gap-5">
            <div className="group relative flex cursor-pointer">
                <motion.img
                initial={{
                    y: -200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0}}
                className="rounded-full border border-gray-500 object-contain w-24 
                h-24 xl:w-32 xl:h-32 filter group-hover:grayscale"
                src={Java}
                >

                </motion.img>
                <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:h-32 xl:w-32 rounded-full z-0">
                    <div className="flex items-center justify-center h-full">
                        <p className="text-3xl font-bold text-black opacity-100">100%</p>
                    </div>
                </div>
            </div>
            <div className="group relative flex cursor-pointer">
                <motion.img
                initial={{
                    y: -200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0}}
                className="rounded-full border border-gray-500 object-contain w-24 
                h-24 xl:w-32 xl:h-32 filter group-hover:grayscale"
                src={Python}
                >

                </motion.img>
                <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:h-32 xl:w-32 rounded-full z-0">
                    <div className="flex items-center justify-center h-full">
                        <p className="text-3xl font-bold text-black opacity-100">100%</p>
                    </div>
                </div>
            </div>
            <div className="group relative flex cursor-pointer">
                <motion.img
                initial={{
                    y: -200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0}}
                className="rounded-full border border-gray-500 object-contain w-24 
                h-24 xl:w-32 xl:h-32 filter group-hover:grayscale"
                src={Cpp}
                >

                </motion.img>
                <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:h-32 xl:w-32 rounded-full z-0">
                    <div className="flex items-center justify-center h-full">
                        <p className="text-3xl font-bold text-black opacity-100">100%</p>
                    </div>
                </div>
            </div>
            <div className="group relative flex cursor-pointer">
                <motion.img
                initial={{
                    y: -200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0}}
                className="rounded-full border border-gray-500 object-contain w-24 
                h-24 xl:w-32 xl:h-32 filter group-hover:grayscale"
                src={Matplotlib}
                >

                </motion.img>
                <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:h-32 xl:w-32 rounded-full z-0">
                    <div className="flex items-center justify-center h-full">
                        <p className="text-3xl font-bold text-black opacity-100">100%</p>
                    </div>
                </div>
            </div>
            <div className="group relative flex cursor-pointer">
                <motion.img
                initial={{
                    y: -200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0}}
                className="rounded-full border border-gray-500 object-contain w-24 
                h-24 xl:w-32 xl:h-32 filter group-hover:grayscale"
                src={Autodesk}
                >

                </motion.img>
                <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:h-32 xl:w-32 rounded-full z-0">
                    <div className="flex items-center justify-center h-full">
                        <p className="text-3xl font-bold text-black opacity-100">100%</p>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Skills