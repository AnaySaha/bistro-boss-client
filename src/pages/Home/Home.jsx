
import { Helmet } from 'react-helmet-async';
import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import PopularMenu from './PopularMenu/PopularMenu';
import Featured from './Featured/Featured';
import Testimonials from './Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
         <Helmet>
                 <title> BISTRO BOSS | HOME</title>
          </Helmet>
          <Banner></Banner>
          <Category></Category>
          <PopularMenu></PopularMenu>
          <Featured></Featured>
          <Testimonials></Testimonials>
        </div>
    );
};

export default Home;