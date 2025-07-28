import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/dessert-bg.jpeg';


const Menu = () => {
    return (
        <div>
     <Helmet><title> BISTRO | MENU</title></Helmet>
           <Cover img={menuImg}></Cover>
        </div>
    );
};

export default Menu;