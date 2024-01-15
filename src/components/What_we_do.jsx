import React from 'react'
import { PiDiamondsFourFill } from "react-icons/pi";
import { BsLayersHalf } from "react-icons/bs";
import { FaTree } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { SiIcomoon } from "react-icons/si";
import { PiLadderSimpleThin } from "react-icons/pi";
import { IoMdArrowDropright } from "react-icons/io";
import { SlArrowUp } from "react-icons/sl";



import robo from '../assets/coder.png';







const What_we_do = () => {
  return (
    <div className='relative overflow-hidden bg-[#fff6ed] lg:py-20 py-8'>
        <div className='h-[550px] bg-[#003b29] absolute -bottom-7 -left-[30px] py-3 px-[30px] rounded-[50%]'></div>
        <div className='xl:w-[1200px] mx-auto px-3 pt-8'>
            <section className='relative'>
                <p className='text-center text-[#fb7a3f]'> What We Do?</p>
                <h1 className='text-center text-[#054130] lg:text-5xl text-xl primary-font'>
                    Bringing New Life to <br/> Old{" "}
                    <span className='underline decoration-[#fdca51]'>Processes</span>
                </h1>


                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 pt-8'>
                    <span className='bg-[#fffaf4] py-8 px-6 hover:bg-white hover:text-[#fb7a3f]'>
                        < PiDiamondsFourFill className="text-5xl"/>
                        <p className='text-xl text-[#054130] primary-font font-semibold py-8 pb-4'>Interior Design</p>
                        <p className='text-black hover:opacity-90 opacity-70'>Interior design is the art and science of enhancing.</p>
                    </span>

                    <span className='bg-[#fffaf4] py-8 px-6 hover:bg-white hover:text-[#fb7a3f]'>
                        < BsLayersHalf className="text-5xl"/>
                        <p className='text-xl text-[#054130] primary-font font-semibold py-8 pb-4'>Construction</p>
                        <p className='text-black hover:opacity-90 opacity-70'>The techniques, procedures, and materials used during.</p>
                    </span>


                    <span className='bg-[#fffaf4] py-8 px-6 hover:bg-white hover:text-[#fb7a3f]'>
                        < FaTree  className="text-5xl"/>
                        <p className='text-xl text-[#054130] primary-font font-semibold py-8 pb-4'>Archetectural</p>
                        <p className='text-black hover:opacity-90 opacity-70'>The process of planning, designing and constructing.</p>
                    </span>


                    <span className='bg-[#fffaf4] py-8 px-6 hover:bg-white hover:text-[#fb7a3f]'>
                        < FaRegLightbulb className="text-5xl"/>
                        <p className='text-xl text-[#054130] primary-font font-semibold py-8 pb-4'>Decoration</p>
                        <p className='text-black hover:opacity-90 opacity-70'>The gymnasium was adorned with crepe-paper.</p>
                    </span>
                </div>


                <PiLadderSimpleThin className='text-[#fb7a3f] text-6xl absolute top-0 left-0 opacity-25'/>
                <SiIcomoon className='text-[#fb7a3f] text-6xl absolute top-0 right-0 rotate-90 opacity-25'/>

            </section>

            <section className='lg:flex justify-between items-center relative mt-12 lg:p-8'>
                <div className='flex rounded justify-center'>
                    <img src={robo} alt="" className='lg:w-full w-60'/>
                </div>

                <div className='lg:w-1/2 lg:py-0 py-20'>
                    <p className='text-[#fb7a3f]'> Our technology Journey</p>
                    <h1 className='text-[#054130] lg:text-5xl text-xl primary-font font-semibold pt-4 pb-6'>
                        Beautiful Acoustics &{" "}
                        <span className='underline decoration-[#fdca51]'>
                        Achivements
                        </span>
                    </h1>

                    <p className='text-black leading-8 opacity-80'>
                        Studing new Technologies are demanding and are rated as one of the most challenging courses at the university. It requires long hours, comitments, and a five-year study period also...!
                    </p>

                    <div className='flex items-center lg:gap-x-8 py-8'>
                        <button className='rounded-full px-4 py-2 flex items-center text-sm bg-[#fd7b47] text-white gap-2 transition ease-out duration-300 transform hover:scale-110'>
                            <p>Read More!</p>
                            <IoMdArrowDropright className='text-xl'/>
                        </button>
                        

                        <button className='rounded-full px-4 py-2 flex items-center text-sm  text-black gap-2 transition ease-out duration-300 transform hover:scale-110'>
                            <p>View Projects</p>
                            <IoMdArrowDropright className='text-xl'/>
                        </button>
                        
                    </div>
                    <div className='flex justify-between pt-4 lg:gap-0 gap-2'>
                        <span >
                            <h1 className='text-[#054130] primary-font text-4xl font-semibold'>10
                            </h1>
                            <p className='w-1/2 lg:text-base text-sm'>
                                Years of experience
                            </p>
                        </span>

                        <span >
                            <h1 className='text-[#054130] primary-font text-4xl font-semibold'>2K+
                            </h1>
                            <p className='w-1/2 lg:text-base text-sm'>
                                Projects Completed
                            </p>
                        </span>

                        <span >
                            <h1 className='text-[#054130] primary-font text-4xl font-semibold'>36
                            </h1>
                            <p className='w-1/2 lg:text-base text-sm'>
                                Awards Gained
                            </p>
                        </span>
                    </div>


                </div>

                <SlArrowUp className='text-[#fb7a3f] text-4xl absolute top-0 left-0 rotate-[315deg]'/>
                <SlArrowUp className='text-[#fb7a3f] text-4xl absolute top-0 right-0 rotate-45'/>
                <SlArrowUp className='text-[#fb7a3f] text-4xl absolute bottom-0 left-0 rotate-[225deg]'/>
                <SlArrowUp className='text-[#fb7a3f] text-4xl absolute bottom-0 right-0 rotate-[134deg]'/>

            </section>
        </div>
      
    </div>
  )
}

export default What_we_do
