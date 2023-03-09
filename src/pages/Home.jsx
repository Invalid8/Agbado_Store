import { useContext } from "react";
import Banner from "../components/Home_Components/Banner";
import SalesGallery from "../components/Home_Components/SalesGallary";
import Services from "../components/Home_Components/Services";
import { ThemeContext } from "../context/ThemeContext";
import TopProducts from "../components/Home_Components/TopProducts";

const Home = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;

    return (
        <section className="HomePage">
            <Banner theme = {theme}/>
            <Services theme = {theme} />
            <SalesGallery theme = {theme} />
            <TopProducts theme = {theme} />
        </section>
    );
}

export default Home;
