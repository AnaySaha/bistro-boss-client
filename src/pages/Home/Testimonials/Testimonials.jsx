import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
const [reviews, setReviews] = useState([]);
 useEffect ( () => {
    fetch('reviews.json')
    .then(res=> res.json())
    .then(data => setReviews(data))
 }, [])

    return (
        <section className="my-20">
           <SectionTitle subHeading="what our Clint Say?"
             heading={"Testimonials"}
            ></SectionTitle> 

<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            reviews.map(review => <SwiperSlide key={review._id}
            >
                <div className=" flex flex-col items-center my-16 mx-20">

                    <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                    />
                    <p className="py-8">
                      {review.details}  
                    </p>
                    <h3 className="text-2xl text-orange-400 ">
                        {review.name}
                    </h3>
                </div>
                
            </SwiperSlide> )
        }
    </Swiper>

        </section>
    );
};

export default Testimonials;