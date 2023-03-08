import { useContext } from "react";
import Banner from "../components/Home_Components/Banner";
import SalesGallery from "../components/Home_Components/SalesGallary";
import Services from "../components/Home_Components/Services";
import { ThemeContext } from "../context/ThemeContext";
import TopProducts from "../components/Home_Components/TopProducts";

const services = [
    {
        id:1,
        title: "free shipping worldwide",
        icon: "A",
        description: "A dummy text is applied here"
    },
    {
        id:2,
        title: "24/7 customer services",
        icon: "A",
        description: "A dummy text is applied here"
    },
    {
        id:3,
        title: "money back guanranty",
        icon: "A",
        description: "A dummy text is applied here"
    },
    {
        id:4,
        title: "fast delivery",
        icon: "A",
        description: "A dummy text is applied here"
    },
]

const sGallery = [
    {
        id: 1,
        discount: 30,
        discount_type: `sale up to 30% off`,
        product_type: "latest sound system",
        view_type: "view offer",
        src: "https://ik.imagekit.io/invalid33/red-gold-headphones-digital-device.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670094500768"
    },
    {
        id: 2,
        discount: 20,
        discount_type: `20% off`,
        product_type: "ear buds",
        view_type: "shop now",
        src: "https://ik.imagekit.io/invalid33/black-earbud.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678208220156"
    },
    {
        id: 3,
        discount: 0,
        discount_type: "",
        product_type: "portable speaker",
        view_type: "",
        src: "https://ik.imagekit.io/invalid33/portable-speaker.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678207090903"
    },
    {
        id: 4,
        discount: 0,
        discount_type: "",
        product_type: "tablet computer",
        view_type: "",
        src: "https://ik.imagekit.io/invalid33/tablet.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1678289039077"
    },
    {
        id: 5,
        discount: 0,
        discount_type: "",
        product_type: "game controller",
        view_type: "view more",
        src: "https://ik.imagekit.io/invalid33/game-controller.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678207091443"
    },
]

const Home = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;

    return (
        <section className="HomePage">
            <Banner theme = {theme}/>
            <Services services = {services} theme = {theme} />
            <SalesGallery sGallery = {sGallery} theme = {theme} />
            <TopProducts theme = {theme} />
        </section>
    );
}

export default Home;
