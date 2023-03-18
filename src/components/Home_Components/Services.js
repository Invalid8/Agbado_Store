import classes from "./Sevices.module.css";
import useFetch from "../useFetch";

const Services = ({ theme }) => {
	const {
		data: services,
		error,
		isPending,
	} = useFetch("https://agbado-products.netlify.app");

	return (
		<section className="services">
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
			{services && (
				<div
					className={`${classes.s_container} u-flex sub-pad big-gap`}
				>
					{services.services.map((value) => {
						return (
							<div
								className={`${classes.serve_modal} ${theme.ui} o-flex-ali-cen just-space-bet`}
								key={value.id}
							>
								<div className="icon">
									<i className={`fa ${value.icon}`}></i>
								</div>
								<div className="info">
									<div className="title upp-txt b-txt">
										{value.title}
									</div>
									<div className="descr">
										{value.description}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			)}
		</section>
	);
};

export default Services;
