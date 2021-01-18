import React, {Fragment} from "react"
import { useScript } from "../../helpers/hooks/useEffects/useScript"
const parallax = () => {
    
    let container = document.querySelector(".main__container___31py4")
    if (container != null) container.style.overflow = "unset"

    useScript("/js/horizon.min.js")
    return (
        <Fragment>
            <h2>Parallax Image Block</h2>
            <h2>Parallax Image Block</h2>
            <h2>Parallax Image Block</h2>
            <section className="vf-two-column-boxes">
                <h3 className="vf-two-column-boxes__headline">
                    Energy solutions <br />
                    in a broader perspective
                </h3>
                <div className="vf-two-column-boxes__body">
                    <div className="vf-two-column-boxes__image">
                        <img src="/img/example-startpage/energy-and-solutions.png" />
                    </div>

                    <div className="vf-two-column-boxes__content">
                        <p className="vf-two-column-boxes__paragraph">
                            We see things in a broader perspective: the need to power the change to fossil free fuels beyond our own production and committed   to act on it on a much broader scale.
                        </p>
                        <a href="#" className="vf-link-with-arrow">Read more</a>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default parallax