import React, {Component} from "react";
import ReactDOM from "react-dom";
import styles from "./responsiveTabs.scss";

const responsiveSizes =  [
	{name: 'Phone', width: 375, height: 667},
	{name: 'Tablet', width: 768, height: 1024},
	{name: 'Desktop', width: 1920, height: 1080},
];

class Frame extends Component {
	componentDidMount() {
		this.renderFrameContent();
	}

	renderFrameContent() {
		let doc = ReactDOM.findDOMNode(this).contentDocument;
		if(doc.readyState === 'complete') {
			let contents = React.createElement(
				"div",
				null,
				this.props.head,
				this.props.children
			);
			doc.body.innerHTML = "<div></div>";
			doc.head.innerHTML = "";
			let base = doc.createElement("base");
			base.setAttribute("href", window.location.href);
			doc.head.appendChild(base);
			let pageStyles = Array.from(document.querySelectorAll('head > style, link[rel="stylesheet"]'));
			pageStyles.forEach(function (s) {
				doc.head.appendChild(s.cloneNode(true));
			});
			ReactDOM.unstable_renderSubtreeIntoContainer(this, contents, doc.body.firstChild, function () {
			});
		} else {
			setTimeout(this.renderFrameContent, 0);
		}
	}

	componentDidUpdate() {
		this.renderFrameContent();
	}

	render() {
		return <iframe className={styles.iframe}/>;
	}
}

export default class CodeRenderer extends Component {
	constructor(props){
		super(props);
		this.iframe = React.createRef();
		this.iframeWrapper = React.createRef();
		this.containerRef = React.createRef();
		this.state = {
			selectedTab: responsiveSizes[0].name,
			selectedWidth: responsiveSizes[0].width,
			iframeRef: React.createRef()
		};
	}

	componentDidMount() {
		window.addEventListener('resize', this.resize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.resize)
	}

	resize = () => {
		this.setState({});
	}

	renderSizeIcon = (name) => {
		switch (name) {
			case "Phone": {
				return (
					<svg viewBox="0 0 2 2">
						<rect className="catalog-11861ax-Preview-className" width="0.5622188905547226" height="1" x="0.7188905547226387" y="0.5"></rect>
					</svg>
				);
			}
			case "Tablet": {
				return (
					<svg viewBox="0 0 2 2">
						<rect className="catalog-11861ax-Preview-className" width="0.75" height="1" x="0.625" y="0.5"></rect>
					</svg>
				);
			}
			case "Desktop": {
				return (
					<svg viewBox="0 0 2 2">
						<rect className="catalog-11861ax-Preview-className" width="1.7777777777777777" height="1" x="0.11111111111111116" y="0.5"></rect>
					</svg>
				);
			}
			default: {

			}
		}
	};

	selectTab = (name, width) => {
		if(this.state.selectedTab === name) return;
		this.setState({
			selectedTab: name,
			selectedWidth: width
		});
	};

	renderTabs = () => {
		return responsiveSizes.map((item) => {
			const tabClasses = item.name === this.state.selectedTab ? styles.tabSelected : styles.tab;
			return (
				<div className={tabClasses} onClick={() => this.selectTab(item.name, item.width)}>
					<div className={styles.iconContainer}>
						{this.renderSizeIcon(item.name)}
					</div>
					<div className={styles.titleContainer}>
						{item.name}
						<div className={styles.titleInnerContainer}>
							{item.width + "x" + item.height}
						</div>
					</div>
				</div>
			)
		});
	};

	getFrameContainerClassName() {
		if(this.state.selectedTab === "Phone") {
			return styles.iframePhone;
		} else if(this.state.selectedTab === "Tablet") {
			return styles.iframeTablet;
		} else {
			return styles.iframeDesktop;
		}
	}

	getStyle() {
		if(this.iframeWrapper && this.iframeWrapper.current){
			const scale = Math.min(1, this.iframeWrapper.current.offsetWidth / this.state.selectedWidth);
			return {transform: "scale("+scale+")"};
		}
		return {};
	}

	getContainerStyle = () => {
		if(this.iframeWrapper && this.iframeWrapper.current) {
			const scale = Math.min(1, this.iframeWrapper.current.offsetWidth / this.state.selectedWidth);
			return {width: "100%", height: "100%", maxHeight: "calc(1080px * " + scale + ")"};
		}
		return {width: "100%", height: "100%", maxHeight: "1080px"};
	};

	render() {
		return (
			<div className={styles.container}>
				<div className={styles.menuContainer}>
					{this.renderTabs()}
				</div>
				<div className={styles.html} ref={this.containerRef}>
					<div style={this.getContainerStyle()} ref={this.iframeWrapper}>
					<div className={this.getFrameContainerClassName()} style={this.getStyle()}>
						<Frame>
							<div dangerouslySetInnerHTML={{__html: this.props.children}}/>
						</Frame>
					</div>
					</div>
				</div>
			</div>
		)
	}
}