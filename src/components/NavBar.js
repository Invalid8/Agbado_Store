import { useContext, useState, useEffect } from "react";
import {
	BsCart,
	BsGearWide,
	BsHouse,
	BsNewspaper,
	BsPersonCircle,
	BsSearch,
	BsShop,
} from "react-icons/bs";
import ThemeToggle from "./ThemeToggle";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import classes from "./NavBar.module.css";

export const NavBar = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;

	const [menu, isMenu] = useState(false);
	const [others, isOthers] = useState(false);
	const [Mobile, isMobile] = useState(false);

	const [windowSize, setWindowSize] = useState(getWindowSize());

	useEffect(() => {
		function handleResize() {
			setWindowSize(getWindowSize());
			if (windowSize.innerWidth < 541) {
				isMobile(true);
			} else {
				isMobile(false);
			}
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [windowSize.innerWidth]);

	return (
		<nav
			className={`nav-header o-flex-ali-cen just-space-bet main-pad ${classes.n_h} ${theme.bgc} ${theme.cbg}`}
		>
			<div className={`logo ${classes.logo}`}>
				<h2>Agbado Store</h2>
			</div>
			<div className="links-container o-flex-ali-cen just-space-bet small-gap">
				<div className="rect1">
					<button
						className={`bars ${classes.extra_btn} ${
							menu ? "close" : ""
						} ${isMobile ? classes.mobile : ""}`}
						onClick={() => {
							if (!Mobile) {
								isMenu(!menu);
								isOthers(false);
							}
						}}
					>
						<div className={`line ${theme.bg}`}></div>
					</button>

					<div
						className={`nav-links-box ${classes.nav_container} ${
							Mobile ? classes.mobile : ""
						} ${theme.cbg} ${theme.bgc}`}
					>
						<ul>
							<li className={`${classes.nav_link} d-in-block`}>
								<NavLink
									className={`${theme.bgc}`}
									to="/"
									onClick={() => {
										if (!Mobile) isMenu(false);
									}}
								>
									{!Mobile ? "Home" : <BsHouse />}
								</NavLink>
							</li>
							<li className={`${classes.nav_link} d-in-block`}>
								<NavLink
									className={`${theme.bgc}`}
									to="/shop"
									onClick={() => {
										if (!Mobile) isMenu(false);
									}}
								>
									{!Mobile ? "Shop" : <BsShop />}
								</NavLink>
							</li>
							<li className={`${classes.nav_link} d-in-block`}>
								<NavLink
									className={`${theme.bgc}`}
									to="/blogs"
									onClick={() => {
										if (!Mobile) isMenu(false);
									}}
								>
									{!Mobile ? "Blog" : <BsNewspaper />}
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
				<div
					className="others"
					onMouseOver={(e) => {
						if (!Mobile) {
							isOthers(true);
							isMenu(false);
						}
					}}
					onMouseOut={(e) => {
						if (!Mobile) isOthers(false);
					}}
				>
					<button className={`${classes.drop_others} ${theme.bgc}`}>
						<BsGearWide />
					</button>
					<div
						className={`o-flex-ali-cen just-space-bet small-gap ${
							classes.other_container
						} ${others && classes.show_1} ${theme.cbg} ${
							theme.bgc
						}`}
						onMouseOver={(e) => {
							isOthers(true);
							isMenu(false);
						}}
						onMouseOut={(e) => {
							isOthers(false);
						}}
						style={{ borderColor: theme.txt }}
					>
						<ul>
							<li className="d-in-block">
								<button className="find">
									<BsSearch />
								</button>
							</li>
							<li className="d-in-block">
								<button className="login">
									<BsPersonCircle />
								</button>
							</li>
							<li className="d-in-block">
								<button className="cart">
									<BsCart />
								</button>
							</li>
							<li className="d-in-block">
								<ThemeToggle />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

function getWindowSize() {
	const { innerWidth, innerHeight } = window;
	return { innerWidth, innerHeight };
}
