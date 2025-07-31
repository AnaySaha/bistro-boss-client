import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/dessert-bg.jpeg';
import PopularMenu from '../Home/PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>
     <Helmet><title> BISTRO | MENU</title></Helmet>
           <Cover img={menuImg} title="our menu"></Cover>
           <PopularMenu></PopularMenu>
           <Cover img={menuImg} title="our menu"></Cover>
           <PopularMenu></PopularMenu>
           <Cover img={menuImg} title="our menu"></Cover>
           <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;