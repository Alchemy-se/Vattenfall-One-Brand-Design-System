import React from "react";

const Article_2 = () => {

	return (
		<React.Fragment>
			<div className="vf-container vf-container--tight">
				<div className="vf-text--center pt-4 pb-2">
					<h1 id={"article-2"} style={{fontSize: "48px", lineHeight: "1.2"}}>Creating a more consistent UI/UX for the future</h1>
				</div>

				<p className="pb-3">
					<strong className="vf-intro-in-caps-small" style={{textTransform: "uppercase"}}>The DDS is built on the overarching</strong> goal of achieving brand consistency while meeting specific organisational and regional needs for design elements and code. Over time, we generate a growing library of cost-saving solutions. A win-win-win type of set up that benefits the brand, serves our users, and has a positive impact on finances.
					Over the past months, an internal review and the very valuable user feedback we've received so far have formed the basis for our mission to create a better system and user experience going forward.
				</p>
			</div>
			<div className="vf-container vf-container--tight">
				<img
					src="/img/articles/article_02_large.jpg"
					alt=""
					style={{maxWidth: "100%", marginBottom: "48px"}}/>
			</div>
			<div className="vf-container vf-container--tight">
				<h2>It’s faster to design and build when we’re not reinventing the wheel</h2>
				<p>
					Enhancements and new features to the DDS will be released continuously in batches. We know that there is potential for improvement in several areas and the priorities at this point are to add some highly requested components, updates and more clearly defined rules and style guidelines, as well as concrete examples of applications. The DDS will also be taken beyond Sketch and Abstract to also work for users of Adobe XD and Figma.
					More specifically, the first phase is planned to include an update to the UI Kit templates across colour, white space, grids, typography, buttons and input fields. We have also recently implemented a few design and code updates for “Cookie-policy”, B2b newsletter for France and B2b newsletter for Sweden. These are now available in the DDS.
				</p>
				<div className="clearfix"/>
				<div className="pt-4">
					<h2>Roadmap with milestones</h2>
				</div>
				<div className="clearfix"/>
				<div className="pt-4">
					<h3>Release 1</h3>
				</div>
				<p>
					First update of the UI Kit – first set of rules regarding colour, white space, grid, typography, buttons and input fields – End of June
				</p>
				<div className="clearfix"/>
				<div className="pt-4">
					<h3>Release 2</h3>
				</div>
				<p>
					Second update of UI Kit – modules, motion, graphics, illustrations, icons (only functional ones) – End of August
				</p>
				<div className="clearfix"/>
				<div className="pt-4">
					<h3>Release 3</h3>
				</div>
				<p>
					Third update of UI Kit – Extend files for other software versions (Adobe XD and Figma) – End of September
				</p>
				<div className="clearfix"/>
				<div className="pt-4">
					<h2>Spread the word</h2>
				</div>
				<p>
					We’re happy to have you here! Please let anyone who can benefit from Digital Design News know that they can get on the list by e-mailing <a href="mailto:branding@vattenfall.com">branding@vattenfall.com</a>.
				</p>
			</div>

		</React.Fragment>
	);
}

export default Article_2;
