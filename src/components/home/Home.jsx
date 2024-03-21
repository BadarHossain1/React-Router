import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";


const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <Header></Header>
            {
                navigation.state  === "loading" ? <p>Loading</p> : <Outlet></Outlet>
            }
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;