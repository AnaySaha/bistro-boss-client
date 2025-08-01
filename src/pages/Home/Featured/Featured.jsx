import React from 'react';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
    return (
    <div className='featured-item bg-fixed pt-8 my-20'>
        
        <SectionTitle subHeading="check it out" heading={"Featured Item"}>

        </SectionTitle>
    
       <div className='md flex justify-center items-center bg-slate-500 
       bg opacity-70 text-white pb-20 pt-12 px-36 pt-10'>
           <div>
            <img src={featuredImg} alt="" />
           </div>
       
         <div className='md:ml-10'>
                <p>
                Aug 20, 2029
                </p>
                <p className='uppercase'>
                Where can I get Some?
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Laborum totam nihil, laboriosam dolorum dolores alias perferendis provident, ut esse, nemo accusamus quos.
                 Aliquid autem doloribus dolor impedit fuga tempora unde?
                </p>

                <button className="btn btn-active border-0 border-b-4 btn-primary">Order Now</button>
            </div>
        </div>
       
       
    </div>
    );
};

export default Featured;