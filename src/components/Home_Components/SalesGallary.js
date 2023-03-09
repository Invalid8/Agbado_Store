import classes from "./SalesGallary.module.css";
import useFetch from "../useFetch";

const SalesGallery = ({ theme, fetch }) => {
	const {
		data: sGallery,
		error,
		isPending,
	} = useFetch("https://agbado-products.netlify.app/items/sGallery.json");

	return (
		<section className="SalesGallery">
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
			{sGallery && (
				<div
					className={`container ${classes.gallary1} small-gap main-pad o-grid`}
				>
					{sGallery.map((value) => {
						return (
							<article
								className={`${classes.product_card} ${theme.bgc} ${theme.cbg}`}
								key={value.id}
							>
								<div className={`${classes.img_box}`}>
									<img src={value.src} alt={value.title} />
								</div>
								<div className="info">
									{value.discount_type && (
										<h4
											className={`${classes.discount} cap-txt`}
										>
											{value.discount_type}
										</h4>
									)}
									<h4
										className={`${classes.product_type} cap-txt thin-w400`}
									>
										{value.product_type}
									</h4>
									{value.view_type && (
										<button
											className={`${classes.view_offer_btn} upp-txt ${theme.ui} ${theme.txt}`}
										>
											{value.view_type}
										</button>
									)}
								</div>
							</article>
						);
					})}
				</div>
			)}
		</section>
	);
};

export default SalesGallery;
