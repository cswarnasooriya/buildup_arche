import { GiTechnoHeart } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoIosArrowDropright } from "react-icons/io";






const Footer = () => {
  return (
    <footer className="bg-[#003b29] text-white pb-16">
        <div className="container mx-auto px-3 lg:pt-20 pt-8">
            <section>
                <div className="lg:flex items-center justify-between">
                    <span className="lg:w-4/5 lg:flex items-center justify-start">
                        <button className="lg:w-1/3 flex items-center gap-x-4 text-white">
                            < GiTechnoHeart className="text-2xl"/>
                            <p className="teaxt-2xl primary-fonts">WarTec.lk</p>
                        </button>
                        <p className="lg:flex justify-center lg:w-1/3 lg:py-0 py-6">
                            New Technologies with Understanding People's Mind
                        </p>
                    </span>


                    <span className="lg:w-1/3 flex items-center gap-x-8 lg:pb-0 pb-4">
                        <p>
                            Get In Touch
                        </p>
                        <button className="rounded-full px-3 py-2 flex items-center bg-[#fdca51] text-[#003b29] gap-2 transition ease-out duration-300 transform hover:scale-[1.05]">
                            <p>Contact Us</p>
                            <IoIosArrowDropright className="text-xl"/>
                        </button>
                    </span>
                </div>

                <div className="lg:py-20">
                    <ul className="lg:flex items-center justify-between">
                        <div className="lg:flex items-center justify-start lg:w-4/5">
                            <li className="lg:w-1/4 lg:pb-0 pb-3">
                                <a href="#">Home</a>
                            </li>
                            <li className="lg:w-1/4 lg:pb-0 pb-3">
                                <a href="#">Design</a>
                            </li>
                            <li className="lg:w-1/4 lg:pb-0 pb-3">
                                <a href="#">Work</a>
                            </li>
                            <li className="lg:w-1/4 lg:pb-0 pb-3">
                                <a href="#">Projects</a>
                            </li>
                        </div>
                        <li className="lg:w-1/3 lg:pb-0 pb-3">Follow Us</li>
                    </ul>

                    <ul className="lg:flex items-center justify-between lg:pt-8">
                        <div className="lg:flex items-center justify-start lg:w-4/5">
                            <li className="lg:w-1/4 lg:pb-0 pb-3">
                                <a href="#">About Us</a>
                            </li>
                            <li className="lg:w-1/4 lg:pb-0 pb-3">
                                <a href="#">Blog</a>
                            </li>
                            <li className="lg:w-1/4 lg:pb-0 pb-3">
                                <a href="#">Services</a>
                            </li>
                            <li className="lg:w-1/4 lg:pb-0 pb-3">
                                <a href="#">Awards</a>
                            </li>
                        </div>

                        <span className="text-white lg:w-1/3 flex items-center gap-4">
                            <FaFacebook className="cursor-pointer rounded-full border border-[#154b3b] p-2 h-8 w-8 transition ease-out duration-300 transform hover:scale-[1.05]"/>
                            <FaYoutube  className="cursor-pointer rounded-full border border-[#154b3b] p-2 h-8 w-8 transition ease-out duration-300 transform hover:scale-[1.05]"/>
                            <FaTiktok className="cursor-pointer rounded-full border border-[#154b3b] p-2 h-8 w-8 transition ease-out duration-300 transform hover:scale-[1.05]"/>
                            <BsTwitterX className="cursor-pointer rounded-full border border-[#154b3b] p-2 h-8 w-8 transition ease-out duration-300 transform hover:scale-[1.05]"/>
                            

                        </span>
                    </ul>

                </div>
            </section>

            <section>
                <ul className="sm:flex justify-between pt-8">
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">All right reserved @ WarTec.lk 2024</a>
                    </li>
                    <li>
                        <a href="#">Terms and Condition</a>
                    </li>
                </ul>
            </section>
        </div>

    </footer>
  )
}

export default Footer
