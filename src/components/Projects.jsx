import { FaArrowUp } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import { SlArrowUp } from "react-icons/sl";
import { MdOfflineBolt } from "react-icons/md";
import { TbVectorBezier } from "react-icons/tb";
import { SiHackthebox } from "react-icons/si";
import { FaStackOverflow } from "react-icons/fa";
import { BiLoaderCircle } from "react-icons/bi";





import img1 from '../assets/profile10.jpg';
import img2 from '../assets/profile11.jpg';
import img3 from '../assets/profile12.jpg';
import img4 from '../assets/secondary.png';


const Projects = () => {

    const Cards = ({img, title, desc})=>{
        return(
            <div className="lg:pb-0 pb-4 w-full transform transition ease-out duration-300 hover:scale-[1.03]">
            <img src={img} alt="" className="lg:w-full md:w-52 mx-auto rounded-[7%] cursor-pointer" />
            <div className="flex items-center justify-between md:w-auto w-60 mx-auto">
                <span className="text-[#003b29] pt-2">
                    <p className="text-xl primary-font font-medium">{title}</p>
                    <p>{desc}</p>
                </span>
                <FaArrowUp className="text-2xl rotate-45"/>


            </div>
        </div>

        );
       
          
    };




  return (
    <div className="relative overflow-hidden bg-[#fff6ed] lg:py-20 py-2" >
        <div className="h-[50px] bg-[#003b29] absolute -bottom-7 -left-[30px] -right-[30px] py-3 px-[30px] rounded-[50%]"></div>
        <div className="xl:w-[1200px] max-w-[75%] mx-auto px-3 pt-8">
            <section className="relative lg:py-0 py-8">
                <p className="text-center text-[#fb7a3f] ">Our Recent Works</p>
                <h1 className="text-center text-[#054130] primary-font lg:text-5xl text-xl font-semibold">Our Completed Projects</h1>

                <div className="md:flex items-center justify-between lg:pt-20 pt-8 gap-x-16">

                    <Cards img={img1} title={"AI Foundation"} desc={"New AI Technologies Recognize System in Western UT"}/>
                    <Cards img={img2} title={"HCI Testing"} desc={"Maintain good relationship between man-machines"}/>
                    <Cards img={img3} title={"Eco Runtime"} desc={"Unreliable properties descovering using new AIs"}/>


                </div>

                <button className="rounded-full mx-auto mt-12 px-4 py-2 flex items-center text-sm bg-[#fd7b47] text-white gap-2 transition ease-out duration-300 transform hover:scale-110 ">
                    <p>Load More</p>
                    <IoIosArrowDropright className="text-xl"/>

                </button>

                <SlArrowUp className='text-[#fb7a3f] text-4xl absolute top-0 left-0 rotate-[315deg]'/>
                <SlArrowUp className='text-[#fb7a3f] text-4xl absolute top-0 right-0 rotate-45'/>
                <SlArrowUp className='text-[#fb7a3f] text-4xl absolute bottom-0 left-0 rotate-[225deg]'/>
                <SlArrowUp className='text-[#fb7a3f] text-4xl absolute bottom-0 right-0 rotate-[134deg]'/>

            </section>

            
            <section className="flex items-center justify-between mt-24 mb-16 gap-2">

                <span className="flex items-center lg:gap-x-2 cursor-pointer">
                    <MdOfflineBolt className="text-3xl"/>
                    <p className="text-medium primary-font text-xl">BoltShift</p>
                </span>

                <span className="flex items-center lg:gap-x-2 cursor-pointer">

                    <SiHackthebox className="text-3xl"/>
                    <p className="text-medium primary-font text-xl">LightBox</p>
                </span>

                <span className="flex items-center lg:gap-x-2 cursor-pointer">

                    <FaStackOverflow  className="text-3xl"/>
                    <p className="text-medium primary-font text-xl">FeatherDiv</p>
                </span>

                <span className="flex items-center lg:gap-x-2 cursor-pointer">

                    <BiLoaderCircle className="text-3xl"/>
                    <p className="text-medium primary-font text-xl">Nietzsche</p>
                </span>

                <span className="flex items-center lg:gap-x-2 cursor-pointer">

                    <TbVectorBezier className="text-3xl"/>
                    <p className="text-medium primary-font text-xl">Spherule</p>

                </span>

            </section>


            <section className="lg:flex justify-between items-center relative mt-12 lg:p-8">
                <div className="lg:w-1/2">
                    <p className="text-[#fb7a3f]">
                        Our Newsletter
                    </p>
                    <h1 className="text-[#054130] primary-font lg:text-4xl text-xl font-semibold pt-4 pb-6">
                        Subscribe Our Daily {" "}
                        <span className="underline decoration-[#fdca51]"> Newsletter</span> For Update
                    </h1>
                    <p className="text-black leading-8 opacity-92">
                        Studying Architecture is demanding and is rated as one of the most challenginf courses at the University. It requires long hours, comitment, and a seven-year study period.
                    </p>

                    <div className="relative flex items-center pt-8">
                        <input type="email"
                        name="Email" 
                        placeholder="Enter Your Email" 
                        className="bg-white rounded-full w-full md:px-6 px-2 h-16 outline-none" />

                        <button className="absolute md:right-4 right-1 rounded-full md:px-8 px-3 items-center flex md;text-sm text-xs bg-[#fd7b47] text-white gap-2 transition ease-out duration-300 transform hover:scale-110">
                            <p>Subscribe</p>
                            <IoIosArrowDropright className="text-xl h-12"/>

                        </button>
                    </div>
                </div>

                <div className="lg:py-0 py-8 flex justify-center" >
                    <img src={img4} alt="" className="lg:w-[450px] w-50" />
                </div>

            </section>
        </div>
      
    </div>
  )
}

export default Projects