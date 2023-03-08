import { useContext, useState } from "react";
import {BsPersonCircle} from 'react-icons/bs'
import ThemeToggle from "./ThemeToggle";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import classes from "./NavBar.module.css";

export const NavBar = () => {
	const [menu, isMenu] = useState(false);
	const [others, isOthers] = useState(false);

	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;

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
							menu && "close"
						}`}
						onClick={() => {
							isMenu(!menu);
							isOthers(false);
						}}
					>
						<div className={`line ${theme.bg}`}></div>
					</button>

					<div
						className={`nav-links-box ${classes.nav_container} ${
							menu && classes.show_2
						} ${theme.cbg} ${theme.bgc}`}
					>
						<ul>
							<li className={`${classes.nav_link} d-in-block`}>
								<NavLink
									className={`${theme.bgc}`}
									to="/"
									onClick={() => {
										isMenu(false);
									}}
								>
									Home
								</NavLink>
							</li>
							<li className={`${classes.nav_link} d-in-block`}>
								<NavLink
									className={`${theme.bgc}`}
									to="/shop"
									onClick={() => {
										isMenu(false);
									}}
								>
									Shop
								</NavLink>
							</li>
							<li className={`${classes.nav_link} d-in-block`}>
								<NavLink
									className={`${theme.bgc}`}
									to="/blogs"
									onClick={() => {
										isMenu(false);
									}}
								>
									Blogs
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
				<div
					className="others"
					onMouseOver={(e) => {
						isOthers(true);
						isMenu(false);
					}}
					onMouseOut={(e) => {
						isOthers(false);
					}}
				>
					<button className={`${classes.drop_others} ${theme.bgc}`}>
						<BsPersonCircle />
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
								<button className="find">S</button>
							</li>
							<li className="d-in-block">
								<button className="login">U</button>
							</li>
							<li className="d-in-block">
								<button className="cart">C</button>
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
