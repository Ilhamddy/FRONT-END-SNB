import Contactall from "../components/contactall";
import Advantages from "./component/Advantages";
import Client from "./component/Client";
import Header from "./component/Header";
import Product from "./component/Product";
import Service from "./component/Service";

const Homepage = () => {
    return (
        <main>
            <Header />
            <Service />
            <Advantages />
            <Product />
            <Client />
            <Contactall />
        </main>
    );
};

export default Homepage;
