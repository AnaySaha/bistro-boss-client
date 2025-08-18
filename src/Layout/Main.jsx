import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Nav from "../pages/Shared/Nav/Nav";




const Main = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login')
    return (
        <div>
            { noHeaderFooter || <Nav></Nav> }
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer> }
        </div>
    );
};

export default Main;