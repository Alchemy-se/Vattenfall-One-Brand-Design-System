import React, {Component} from "react";
import GettingStartedDevelopersMarkdown from "./getting-started-developers.md";
import ReactMarkdown from "react-markdown";

export default class Developers extends Component {
	render() {
		console.log("#DEBUG Gett #", GettingStartedDevelopersMarkdown);
		return <div style={{height: "100vh"}}>
			<ReactMarkdown source={GettingStartedDevelopersMarkdown} />
		</div>
	}
};