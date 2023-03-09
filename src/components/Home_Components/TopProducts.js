import { useState } from "react";
import ReactStars from "react-stars";
import classes from "./TopProducts.module.css";
import useFetch from "../useFetch";

const TopProducts = ({ theme }) => {
	const [filterBtn, isFilterBtn] = useState("latest");
	const [clicked, isClicked] = useState([1, 0, 0]);

	const {
		data: products,
		error,
		isPending,
	} = useFetch("http://localhost:8000/TopProducts");

	return (
		<section className={`${classes.TopProducts}`}>
			<div
				className={`${classes.header} u-flex just-space-bet main-pad relative-d big-gap`}
				style={{ borderBottomColor: theme.colorInvert }}
			>
				<div className={`${classes.title} relative-d`}>
					<h3 className="cap-txt">top products</h3>
				</div>
				<div className={`${classes.filter} o-flex-ali-cen just-space-bet big-gap`}>
					<button
						className={`upp-txt block-d relative-d ${theme.txt} ${
							clicked[0] ? classes.line : ""
						}`}
						id="latest"
						onClick={(e) => {
							isFilterBtn(e.target.id);
							isClicked([1, 0, 0]);
						}}
					>
						latest
					</button>
					<button
						className={`upp-txt block-d relative-d ${theme.txt} ${
							clicked[1] ? classes.line : ""
						}`}
						id="best"
						onClick={(e) => {
							isFilterBtn(e.target.id);
							isClicked([0, 1, 0]);
						}}
					>
						best
					</button>
					<button
						className={`upp-txt block-d relative-d ${theme.txt} ${
							clicked[2] ? classes.line : ""
						}`}
						id="featured"
						onClick={(e) => {
							isFilterBtn(e.target.id);
							isClicked([0, 0, 1]);
						}}
					>
						feature
					</button>
				</div>
			</div>
			<div
				className={`${classes.ProductsContainer} u-flex just-cont-cent main-pad f-break small-gap`}
			>
				{error && (
					<div className="error">
						<h2>Error 404 Not Found</h2>
						<h4>{error}</h4>
					</div>
				)}
				{isPending && (
					<div className="loading">
						<h5>loading ...</h5>
					</div>
				)}
				{products &&
					products
						.filter((value) => value.category.includes(filterBtn))
						.map((filteredValue) => {
							return (
								<div
									className={`${classes.productModal} o-flex-ali-cen f-col just-cont-SB modal-card-small big-gap`}
									key={filteredValue.id}
									style={{
										borderBottomColor: theme.colorInvert,
									}}
								>
									<div className={`${classes.img_box}`}>
										<img
											src={filteredValue.image}
											alt={filteredValue.title.substring(
												0,
												20
											)}
										/>
									</div>
									<div className="info o-flex-ali-cen f-col just-cont-SB big-gap">
										<div className="rating upp-txt">
											<ReactStars
												count={5}
												value={
													filteredValue.rating.rate
												}
												size={24}
												color={"#ffd700"}
												changeRating={() => {}}
											/>
										</div>

										<p className="discription">
											{filteredValue.title.substring(
												0,
												60
											)}
											...
										</p>

										<div className="price o-flex-ali-cen small-gap">
											<h4 className="new-price">
												${filteredValue.price[0]}
											</h4>
											{filteredValue.price[1] && (
												<h4 className="old-price line-through opacity-40">
													${filteredValue.price[1]}
												</h4>
											)}
										</div>
									</div>
								</div>
							);
						})}
			</div>
		</section>
	);
};

export default TopProducts;
