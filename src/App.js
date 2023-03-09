import { Suspense, useContext } from "react";
import { NavBar } from "./components/NavBar";
import "./css/App.css";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { ThemeContext } from "./context/ThemeContext";
import { Route, Routes } from "react-router-dom";

function App() {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;

	return (
		<div className={`App ${theme.bg} ${theme.txt} full_p`}>
			<header>
				<NavBar />
			</header>
			<main>
				<Suspense fallback={<div className="loading">loading ...</div>}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/Shop" element={<Shop />} />
						<Route path="/Blogs" element={<Blog />} />
						<Route path="*" element={<h1>Not Found</h1>} />
					</Routes>
				</Suspense>
			</main>
		</div>
	);
}

export default App;
