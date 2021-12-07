import image1 from "./Content/cute doggo.jpg";

const WhyYouShouldCare = () => {
    return (
        <div className="content">
            <h1>Why You Should Care</h1>
            <h3>Who does it affect?</h3>
            <p>
                These supply chain issues do not just affect technology buffs, they affect everyone.
                From those of us that have smart homes to those of us that still use flip phones, we all experience these hardships with 
                the supply chain.  Issues with it have also affected other facets of society as well, since
                there have been increases in delivery time and cost for almost all products.
            </p>
            <div className="imageContentRight">
                <img src={image1} style={{height: '20ch'}} alt="Cute small white dog in a red sweater sitting by the fireplace" />
                <p>
                    So many products have had greatly reduced availability, including toilet paper, technology, and even cute sweaters and hats for your pet dogs (y'know, because tis the holiday season and they deserve to be festive too).
                    These products have all been negatively affected by the supply chain, as they have increased not only in price but also scarcity.
                    The issues that we currently face with the supply chain will likely affect the future of consumerism, changing how we shop for and receive items for the forseeable future.
                </p>
            </div>
            <p>
                With the current standing of the supply chain, the general population is struggling.
                Many companies have been forced to cut down on how many employees they employ due to difficulty adapting to the covid-era supply chain.
                While these companies may be in difficult spots currently, it will inevitably cause the industry to evolve and improve.  Thus, it affects everyone, 
                and all we can do at this point is wait and see what the future holds.
            </p>
            <h3>Answer questions about how the supply chain has affected you!</h3>
            <iframe title="GoogleForm" src="https://docs.google.com/forms/d/e/1FAIpQLSevIE1HQaJpiexBIBFdM30orrfQ_GyGx_bf49YEXEGN5jB4wQ/viewform?embedded=true" id="googleForm" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    );
}

export default WhyYouShouldCare;