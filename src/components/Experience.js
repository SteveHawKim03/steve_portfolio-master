import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCoverflow, Pagination } from "swiper";
import ResearchUCSC from '../assets/ResearchUCSC.PNG'
import ML from '../assets/ML.png'
import Simulation from '../assets/Simulation.png'
import Marmaduke from '../assets/Marmaduke.jpg'
import ThreeDRendering from '../assets/3DRendering.png'
import Python from '../assets/Python.png'
import Autodesk from '../assets/Autodesk.png'
import NASA from '../assets/NASA.PNG'
import DataScience from '../assets/DataScience.png'
import Matplotlib from '../assets/Matplotlib.png'
import Astropy from '../assets/Astropy.png'

const Experience = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="flex flex-col relative h-screen text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 
        text-2xl">
            Experience
        </h3>

        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 160,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
            1000: {
                slidesPerView: 1,
            },
            1300: {
                slidesPerView: 3,
            }
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper p-[100px]"
        >
            <SwiperSlide>
                <article className="bg-white">
                    <img src={ResearchUCSC} alt="" className='w-[500px]'/>

                    <div>
                        <h4 className="text-black font-bold text-3xl font-light p-2">Research Assistant at UCSC</h4>
                        <h5 className="text-black text-1xl mt-1 p-2">Jun 2021 - Aug 2021</h5>
                        <div className="flex space-x-2 p-2">
                            <img src={ML} className="w-10 h-10" />
                            <img src={Simulation} className="w-10 h-10" />
                        </div>
                        <p className="text-black p-2 text-xs">
                            - Developed a machine learning script to model and optimize eco-friendly Nitrogen-Doped Carbon catalyst<br></br>
                            - Mentored by University of California Santa Cruz (UCSC) Professor Yat Li as a part of USCS Science Internship Program
                        </p>
                    </div>
                </article>
            </SwiperSlide>
            <SwiperSlide>
                <article className="bg-white">
                    <img src={Marmaduke} alt="" />

                    <div>
                        <h4 className="text-black font-bold text-3xl font-light p-2">Software Engineer at StoryBerry Inc.</h4>
                        <h5 className="text-black text-1xl mt-1 p-2">May 2021 - Aug 2021</h5>
                        <div className="flex space-x-2 p-2">
                            <img src={ThreeDRendering} className="w-10 h-10" />
                            <img src={Python} className="w-10 h-10" />
                            <img src={Autodesk} className="w-10 h-10" />
                        </div>
                        <p className="text-black p-2 text-xs">
                            - Worked on producing Netflix animation Marmaduke, ranked second most popular on Netflix Kids<br></br>
                            - Programmed “Spotman,” which simulates a human-controlled theater spotlight by applying logistic growth model<br></br>
                            - Wrote a Python algorithm to automatically render character’s fur, which reduced rendering time by 10%
                        </p>
                    </div>
                </article>
            </SwiperSlide>
            <SwiperSlide>
                <article className="bg-white">
                    <img src={NASA} alt="" />

                    <div>
                        <h4 className="text-black font-bold text-3xl font-light p-2">Exoplanet Researcher at NASA Ames Research Center</h4>
                        <h5 className="text-black text-1xl mt-1 p-2">Dec 2020 - Jul 2021</h5>
                        <div className="flex space-x-2 p-2">
                            <img src={DataScience} className="w-10 h-10" />
                            <img src={Matplotlib} className="w-10 h-10" />
                            <img src={Astropy} className="w-10 h-10" />
                        </div>
                        <p className="text-black p-2 text-xs">
                            - Classified 4434 exoplanets into Rocky, Super Earths, Sub-Neptunes, Sub-Jovians, and Jovians<br></br>
                            - Calculated habitability of 4434 exoplanets and proposed a novel habitability scheme<br></br>
                            - Presented at 2021 Sigma Xi Student Research Conference<br></br>
                            - Mentored by NASA Ames Research Scientist Dr. Dan Sirbu
                        </p>
                    </div>
                </article>
            </SwiperSlide>
        </Swiper>
    </motion.div>
  )
}

export default Experience