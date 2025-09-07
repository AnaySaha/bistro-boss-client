
import { FaAd, FaBook, FaCalendar, FaFirstOrder, FaHome, FaList, FaShoppingCart, FaSnowboarding } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import Cart from '../../../pages/Dashboard/Cart';
import { FaBurger } from 'react-icons/fa6';
import { useState } from 'react';
import useCart from '../../../hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="flex">
        <div className="w-64 min-h-screen bg-orange-400">
            <ul className="menu p-4">
            <li>
                
                <NavLink to= "dashboard/userHome"> 
                <FaHome></FaHome>
                User Home
                </NavLink>
                
                </li>
            <li>
                
                <NavLink to= "dashboard/cart"> 
                <FaShoppingCart></FaShoppingCart>
                My Cart ({cart.length})
                </NavLink>
                
                </li>
            <li>
                
                <NavLink to= "dashboard/reservation"> 
                <FaCalendar></FaCalendar>
                Reservation
                </NavLink>
                
                </li>
            <li>
                
                <NavLink to= "dashboard/review"> 
                <FaAd></FaAd>
                Review
                </NavLink>
                
                </li>
            <li>
                
                <NavLink to= "dashboard/booking"> 
                <FaList></FaList>
                My Booking
                </NavLink>
                
                </li>


                <div className="divider"></div>

                <li>
                
                <NavLink to= "/"> 
                <FaHome></FaHome>
                    Home
                </NavLink>
                
                </li>
                
                <li>
                
                <NavLink to= "/order/salad"> 
                <FaBurger></FaBurger>
                    Order
                </NavLink>
                
                </li>
                
                <li>
                
                <NavLink to= "/menu"> 
                <FaBook></FaBook>
                    Menu
                </NavLink>
                
                </li>
            
            </ul>
        </div>
        <div className="flex-1 p-8">
            <Outlet>
            </Outlet>
        </div>
    </div>
    );
};

export default Dashboard;