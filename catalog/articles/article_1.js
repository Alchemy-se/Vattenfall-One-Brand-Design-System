import React from "react";
const Article_1 = () => {
	return (
		<React.Fragment>
			<div className="vf-container vf-container--tight">
				<div className="vf-text--center pt-4 pb-2">
					<h1 id={"article-1"} style={{fontSize: "48px", lineHeight: "1.2"}}>Boosting returns through brand consistency </h1>
				</div>

				<p className="pb-3">
					<strong className="vf-intro-in-caps-small">THE DIGITAL DESIGN SYSTEM (DDS)</strong> exists to help us create user-focused digital experiences that are
					distinctly Vattenfall. The goal is to ensure brand consistency – to present a cohesive and compliant
					experience of Vattenfall to the world through all digital channels which in the end will generate
					more sales.
				</p>
			</div>
			<div className="vf-container vf-container--tight">
				<img
					src="/img/articles/article_03_large.jpg"
					alt=""
					style={{maxWidth: "100%", marginBottom: "48px"}}/>
			</div>
			<div className="vf-container vf-container--tight">
				<h2>Benefits of brand consistency</h2>
				<p>
					The most obvious benefit of brand consistency is immediate brand recognition; building a strong
					association between Vattenfall’s core messages and the visual elements of the brand. And, ultimately
					getting the most impact and best results from our work – no matter if you’re in sales, brand or
					another business area.
					Nowadays, most of the Fortune 500 companies’ stock value is largely constituted by brand equity
					wherein brand consistency is one of the key factors for a strong brand. For
					high-involvement-utilitarian global brands like Vattenfall, brand consistency is an integral aspect
					of building relationships with current and future customers.
				</p>
				<div className="clearfix"></div>
				<div className="pt-4">
						<h2>Calculating the ROI</h2>
				</div>
				<p>
					Done right, brand consistency on a global level increases perceived quality, which in turn
					increases sales likelihood. In fact, brand consistency muffles price sensitivity and
					increases marketing effectiveness – brand consistency throughout the customer journey is
					proved to have the potential to lift revenue by 15% and save costs for serving customers
					with 20%.
					In Vattenfall’s business, it basically comes down to this: Economies of scale. Using the
					assets that are produced centrally will mean increased brand consistency globally and
					therefore sales, while also requiring less cost of producing those same assets locally.
				</p>
			</div>

		</React.Fragment>
	)
};

export default Article_1;
