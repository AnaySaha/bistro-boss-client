import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/dessert-bg.jpeg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import PopularMenu from '../Home/PopularMenu/PopularMenu';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
 
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
 
    const offered = menu.filter(item => item.category === 'offered');
 

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

           {/* manin */}


           {/* <PopularMenu></PopularMenu> */}
           <SectionTitle subHeading= "Don't Miss" heading={"Today's Offer"}></SectionTitle>
           
           <MenuCategory items={offered}></MenuCategory>
           
           
           {/* <PopularMenu></PopularMenu>
           <Cover img={menuImg} title="our menu"></Cover>
           <PopularMenu></PopularMenu> */}

           {/* dessert items */}

           <MenuCategory
           items={desserts}
            title={"Dessert"}
            img={dessertImg}
            ></MenuCategory>


            <MenuCategory
           items={pizza}
            title={"Pizza"}
            img={pizzaImg}
            ></MenuCategory>
        
        </div>
    );
};

export default Menu;