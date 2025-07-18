import React from 'react';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
    return (
    <div className='featured-item text-white' >
        <SectionTitle subHeading="check it out" heading={"Featured Item"}>

        </SectionTitle>
        

       <div className='md flex justify-center items-center py-20 px-36'>
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

            <button className="btn btn-active btn-primary">Order Now</button>
           
  </div>
       
       
       </div>
    );
};

export default Featured;