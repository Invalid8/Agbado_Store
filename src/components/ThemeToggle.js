import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BsMoonStars, BsSun } from "react-icons/bs";

const ThemeToggle = () => {
	const { toggleTheme } = useContext(ThemeContext);
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? dark : light;

	return (
		<button
			className={`mode ${theme.bg} ${theme.txt}`}
			onClick={toggleTheme}
		>
			{isLightTheme ? <BsSun /> : <BsMoonStars />}
		</button>
	);
};

export default ThemeToggle;
