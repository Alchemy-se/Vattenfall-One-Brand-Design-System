import React from "react";
import './Guidelines.css'
import PageHeader from "./lib/pageHeader";

const Guidelines = () => (
    <React.Fragment>
        <PageHeader title={"Design guidelines"}/>
        <div style={{ margin: '10px 30px' }}>
            <div style={{height: '50vh', maxWidth: '750px', background: 'transparent'}}>
                <p className="guidelines_text">In order to set the components in context here are a few examples of designs you can create with the Digital Design system.</p>

                <h2 className="guidelines_header">Color</h2>
                <p className="guidelines_text">In order to comply with Digital Design System, always stick to brand’s palettes. It is necessary to use only brand approved colors in order to follow general brand expression.</p>

                <h2 className="guidelines_header">Layout and spacing</h2>
                <p className="guidelines_text">Vattenfall Digital Design System encourage consistency across platforms, environments, and screen sizes by using uniform elements, spacing and layouts. When creating a new design from scratch, make sure to watch white space balance and dimensional contrast between your design elements. If necessary, refer to the Design Gallery to get inspiration for your new product.</p>

                <h2 className="guidelines_header">Typography</h2>
                <p className="guidelines_text">
                Vattenfall Digital Design Kit includes a typography set for general usage.
                Use typography to present your design and content as clearly and efficiently as possible. This set is a range of contrasting styles that support the needs of your product and its content.
                </p>

                <h2 className="guidelines_header">Icons</h2>
                <p className="guidelines_text">
                In the Design Kit you will also be able to find a set of icons that were designed with brand in mind. When using the icons, make sure to double check their pisitioning and size, as well as the right metaphor for the case. For your convenience, all icons inside the kit are already named and have their own contextual purpose,.
                </p>

                <h2 className="guidelines_header">Motion</h2>
                <p className="guidelines_text">
                When designing with Vattenfall Digital Design System, make sure to think through the motion effects and transitions that are included to it. Watch over the purpose of each effect and do not combine several components with heavy animations at once: the digital behaviour of such should bring liveliness and subtle motion rather than chaotic movement.
                </p>

            </div>
        </div>
    </React.Fragment>
);

export default Guidelines;
