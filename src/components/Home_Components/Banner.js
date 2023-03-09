import classes from "./Banner.module.css";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Banner = ({ theme }) => {
	return (
		<article className={`banner ${classes.full_screen} relative-d`}>
			<div className="container o-flex-ali-cen just-space-bet">
				<button
					className={`previous-btn absolute-d ${theme.bg} ${classes.left_btn}`}
				>
					<GoChevronLeft />
				</button>
				<div className="subContainer">
					<div
						className={`o-flex-ali-cen just-space-bet ${classes.flex_box} intent-break big-gap`}
					>
						<div className={`${classes.img_box} img-container`}>
							<img
								src="https://ik.imagekit.io/invalid33/81QpkIctqPL._AC_SX679_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678300405691"
								alt=""
							/>
						</div>
						<div
							className={`${classes.description} u-flex f-col ${theme.bgc} ${theme.cbg}`}
						>
							<h5 className={`${classes.discount} cap-txt`}>
								Special
							</h5>
							<div className={`${classes.info} cap-txt`}>
								<h3 className={`${classes.name} cap-txt`}>
									Latest Audio system
								</h3>
								<h4
									className={`${classes.discount_type} thin-w400 cap-txt`}
								>
									offer 20% off
								</h4>
							</div>
							<button
								className={`buy-btn ${theme.bgc} ${theme.cbg} ${classes.buy_btn}`}
							>
								Buy Now
							</button>
						</div>
					</div>
				</div>
				<button
					className={`next-btn absolute-d ${theme.bg} ${classes.right_btn}`}
				>
					<GoChevronRight />
				</button>
			</div>
		</article>
	);
};

export default Banner;
