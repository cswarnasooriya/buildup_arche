import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { BiSolidRightArrowCircle } from "react-icons/bi";
import { BiLeftArrowCircle } from "react-icons/bi";

//importing images
import img1 from '../assets/profile1.jpg';
import img2 from '../assets/profile2.jpg';
import img3 from '../assets/profile3.jpg';
import img4 from '../assets/profile4.jpg';
import img5 from '../assets/profile5.jpg';
import img6 from '../assets/profile6.jpg';
import img7 from '../assets/profile7.jpg';
import img8 from '../assets/profile8.jpg';




const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};

const Textimonials = () => {
    const ButtonGroup =({next, previous}) =>{
        return(
            <div className='carousel-bottom-group mb-4 gap-4 flex justify-end items-center w-full absolute lg:top-0 top-8'>
                <button className='block p-3 bg-slate-300 rounded-full focus:bg-[#fd7b47] hover:bg-[#fd7b47] border border-white' onClick={()=> previous()}>
                    <BiLeftArrowCircle  className='text-2xl'/>
                </button>

                <button className='block p-3 bg-slate-300 rounded-full focus:bg-[#fd7b47] hover:bg-[#fd7b47] border border-white' onClick={()=> next()}>
                    <BiSolidRightArrowCircle className='text-2xl'/>
                </button>
            </div>
        )
    };

    const Card = ({img, name, title, desc}) =>{
        return(
            <div className='bg-[#06412f] w-80 relative flex justify-center z-20 p-8 mt-40'>
                <button className='rounded-full bg-[#06412f] absolute -top-20 h-32 w-64 rounded-b-none'></button>
                    <div className='relative z-20 text-center'>
                        <img src={img} alt="" className='w-20 h-20 rounded-full -mt-8 mx-auto'/>
                        <p className='text-xl primary-fonts font-semibold pt-4 pb-2'>{name}</p>
                        <p className='font-light pb-4'>{title}</p>
                        <hr/>
                        <p className='pt-4'>{desc}</p>
                    </div> 
            </div>

        );
    };


  return (
    <div className='relative overflow-hidden bg-[#003b29] lg:py-24 py-8'>
        <div className='h-[50pz] bg-[#fff6ed] absolute -bottom-7 -left-[30px] -right-[30px py-3 px-[30px] rounded-[50%]'></div>
        <div className='xl:w-[1200px] text-white mx-auto px-3'>
            <p className='text-start text-[#fb7a3f]'>Testimonials</p>
                
                
           

            <div className='relative lg:pb-0 pb-8'>
                <h1 className='lg:text-4xl primary-font text-xl'>
                    What Our{" "}
                    <span className='underline decoration-[#fdca51]'>Client</span> Say's
                </h1>

                <Carousel
                    swipeable={true}
                    draggable={false}
                    responsive={responsive}
                    arrows={false}
                    autoPlay
                    renderButtonGroupOutside = {true}
                    customButtonGroup={<ButtonGroup/>}
                    
                    
                    >


                    <Card 
                        img={img1} 
                        name={'John Mc Ryold'}  
                        title={'Senoir PM at Axioms'} 
                        desc={"“I’d like to hear more detail on your strategy for the next couple of months. It would really help me put my work into context.”"}
                    />
                    <Card 
                        img={img2} 
                        name={'Helena Colxins'}  
                        title={'Co-Founder at Mexaas'} 
                        desc={"“I really admire your attention to detail, but I think my performance would improve if I had a little more freedom in my role.”"}
                    />
                    <Card 
                        img={img3} 
                        name={'Roy Williams'}  
                        title={'Software Engineer'} 
                        desc={" “I know how busy you are, but I would love to have more regular with you, as I find your feedback and guidance so helpful.”"}
                    />

                    <Card 
                        img={img4} 
                        name={'Foul de Morato'}  
                        title={'Graphic Designer'} 
                        desc={"I sometimes feel unsure about my goals, maybe this is something we can both work on over the next few months.”"}
                    />
                    <Card 
                        img={img5} 
                        name={'Sally Joy'}  
                        title={'Senoir PM at Zeeward'} 
                        desc={"“I think we could benefit from more detailed discussions around expectations, so we can both avoid disappointment.”"}
                    />
                    <Card 
                        img={img6} 
                        name={'Brain Hocking'}  
                        title={'Senoir UI/UX Designer'} 
                        desc={"“It’s really comforting to know that your door is always open and that I can come to you with questions or issues.”"}
                    />
                    <Card 
                        img={img7} 
                        name={'Henry Alvord'}  
                        title={'Software Developer'} 
                        desc={"“I really appreciate the care you give to balancing workloads, so that I never feel overwhelmed, even at busy times.”"}
                    />
                    <Card 
                        img={img8} 
                        name={'Goose Ronsey'}  
                        title={'Senoir Quality Checker'} 
                        desc={"“Thanks so much for helping me set clear, actionable goals for myself this year. Your guidance really kept me on the right track.”"}
                    />




                </Carousel>
            </div>
        </div>
      
    </div>
  )
}

export default Textimonials
