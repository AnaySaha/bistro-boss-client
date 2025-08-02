import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/dessert-bg.jpeg';
import PopularMenu from '../Home/PopularMenu/PopularMenu';
import useMenu from '../../hooks/useMenu';

const Menu = () => {

        // const [menu, setMenu] = useState([]);
    // useEffect ( () =>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(
    //         data => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(popularItems)
    //         }
    //     )
    // }, [])
    
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