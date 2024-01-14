import { useState } from 'react';
import { GiTechnoHeart } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { FaGripLines } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiArrowDropRightFill } from "react-icons/ri";








const Navbar = () => {

    const [navBar, setNavBar] = useState(false);

  return (
    <nav className='sticky top-0 z-50 bg-[#003b29]'>
        <div className='container mx-auto lg:flex flex-wrap items-center justify-between px-3 border-b border-[#134e3c]'>
            <div className='lg:w-1/5 sticky top-0 flex justify-between lg:justify-start h-[10vh] items-center'>
                <a href="/" className='font-medium tracking-wider transition-colors cursor-pointer'>
                    <button className='flex items-center gap-x-4 text-white'>
                        <GiTechnoHeart  className='text-2xl'/>
                        <p className='text-2xl primary-font'>WarTec.lk</p>
                    </button>
                </a>
                <div className="flex items-center">
                    <button className='cursor-pointer text-xl text-whiteleading-none px-3 py-1 h-[3rem] block lg:hidden outline-none focus:outline-none'
                    onClick={()=> setNavBar(!navBar)}>
                        {navBar ? <AiOutlineClose/>: <FaBars />} 
                    </button>
                </div>
            </div>
            <div className={'lg:flex flex-grow lg:items-center items-baseline lg:h-auto h-[90vh] justify-center lg:w-4/5' + (navBar ? "flex":"hidden")}>
                <ul className='flex flex-col lg:flex-row items-center justify-between w-full gap-x-4 list-none lg:ml-auto lg:transform-none lg:translate-y-[-50%]'>
                    <div className='flex flex-col lg:flex-row items-center justify-center gap-x-8 lg:w-2/3 lg:border-x border-[#134e3c]'>
                        <li className='py-2 flex text-white font-medium items-center leading-snug hover:opacity-40'>
                            <a href="#">Design</a>
                        </li>
                        <li className='py-2 flex text-white font-medium items-center leading-snug hover:opacity-40'>
                            <a href="#">About Us</a>
                        </li>
                        <li className='py-2 flex text-white font-medium items-center leading-snug hover:opacity-40'>
                            <a href="#">Projects</a>
                        </li>
                        <li className='py-2 flex text-white font-medium items-center leading-snug hover:opacity-40'>
                            <a href="#">Contact Team</a>
                        </li>
                        <li className='py-2 flex text-white font-medium items-center leading-snug hover:opacity-40'>
                            <a href="#">Reviews</a>
                        </li>
                    </div>

                    <div className='lg:w-1/3 flex lg:flex-row flex-col items-center justify-end gap-x-8'>
                        <li className='flex items-center cursor-pointer py-2 text-white font-medium leading-snug hover:opacity-40'>
                            <a href="#">EN</a>
                            <IoMdArrowDropdown/>
                        </li>
                        <li className='py-2 flex text-white font-medium items-center leading-snug hover:opacity-40'>
                            <FaGripLines className='text-xl'/>
                        </li>
                        <button className='rounded-full px-3 py-2 flex item-center bg-[#fdca51] text-[#003b29] gap-2 transition ease-out duration-300 transform hover:scale-110'>
                            <p>Contact Us</p>
                            <RiArrowDropRightFill className='text-2xl'/>
                        </button>

                    </div>


                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
