import classes from "./Sevices.module.css";

const Services = ({ services, theme }) => {
	return (
		<section className="services">
			<div className={`${classes.s_container} u-flex sub-pad big-gap`}>
				{services.map((value) => {
					return (
						<div
							className={`${classes.serve_modal} ${theme.ui} o-flex-ali-cen just-space-bet`}
							key={value.id}
						>
							<div className="icon">{value.icon}</div>
							<div className="info">
								<div className="title upp-txt b-txt">
									{value.title}
								</div>
								<div className="descr">{value.description}</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Services;
