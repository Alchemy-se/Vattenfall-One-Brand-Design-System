import React from "react";

const Article_2 = () => {

	return (
		<React.Fragment>
			<div className="vf-container vf-container--tight">
				<div className="vf-text--center pt-4 pb-2">
					<h1 id={"article-2"} style={{fontSize: "48px", lineHeight: "1.2"}}>A Digital Design System for the future</h1>
				</div>

				<p className="pb-3">
					The decision to build our own DDS was based on the realization that meeting specific organizational needs is required to achieve economies of scale. Our internal review and the very valuable user feedback we've received so far form the basis for our mission to create a better system and user experience going forward. Furthermore, building our own DDS enables us to support regional initiatives whilst retaining control over the development roadmap. All in all, this means building for the future and being able to excel in creating high return on marketing efforts.
				</p>
			</div>
			<div className="vf-container vf-container--tight">
				<img
					src="/img/articles/article_03_large.jpg"
					alt=""
					style={{maxWidth: "100%", marginBottom: "48px"}}/>
			</div>
			<div className="vf-container vf-container--tight">
				<h2>Onwards and upwards in phases</h2>
				<p>
					Enhancements and new features to the DDS are conducted in a systematic phased approach
					and updates are released continuously in batches. The new design system will be taken
					beyond Sketch and Abstract to work for everyone.
				</p>
				<div className="clearfix"></div>
				<div className="pt-4">
					<h2>A collaborative approach</h2>
				</div>
				<p>
					While global brand consistency is important, it’s also important to acknowledge local needs
					in different markets. We’re working on a list of requirements and would love
					feedback and/or questions from all users on what would help them most to
					make this a truly collaborative Design System. Thank you for your input!
				</p>
			</div>

		</React.Fragment>
	);
}

export default Article_2;
