import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;