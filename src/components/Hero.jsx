import { IoMdArrowDropright } from "react-icons/io";
import main from '../assets/main.png';
import sec from '../assets/second.png';


const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-[#003b29] lg:py-20 py-8">
      <div className="h-[50px] bg-[#fff6ed] absolute -bottom-7 -left-[30px] -right-[30px] py-3 px-[30px] rounded-[50%]"></div>
      <div className="xl:w-[1200px] mx-auto px-3 lg:flex items-center justify-between">
        <div className="text-white lg:w-1/2">
            <h1 className="lg:text-7xl text-2xl leading-normal pb-8 primary-font font-medium">
               New Technologies With{" "} 
               <span className="underline italic decoration-[#fdca51]">
                Different
               </span>{" "}
               Approach{" "}
            </h1>
            <p className="lg:2/3 pb-8 opacity-60">
                {" "}
                New Tech is the art and trend of designing and building, as distiguished from the skills.
            </p>
            <div className="flex items-center gap-x-2">
                <button className="rounded-full px-3 py-2 flex items-center text-sm bg-[#fd7b47] gap-2 transition ease-out duration-300 transform hover:scale-110">
                    <p>Our Services</p>
                    < IoMdArrowDropright className="text-xl"/>
                </button>
                <button className="rounded-full px-3 py-2 flex items-center text-sm gap-2 transition ease-out duration-300 transform hover:scale-110">
                    <p>View Projects</p>
                    < IoMdArrowDropright className="text-xl"/>
                </button>
            </div>
        </div>
        <div className="lg:w-[35%] w-72 relative lg:mx-0 mx-auto lg:flex justify-end lg:py-0 py-8">
            <img src={main} alt="" className="rounded-full lg:w-full"/>
            <img src={sec} alt="" className="rounded-full sm:block hidden lg:w-40 w-1/4 absolute bottom-16 lg:-left-20 -left-10"/>
            <p className="absolute top-10 right-0 rotate-90 text-white font-medium">+75.8%</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
