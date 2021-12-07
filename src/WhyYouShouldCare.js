import image1 from "./Content/cute doggo.jpg";

const WhyYouShouldCare = () => {
    return (
        <div className="content">
            <h1>Why You Should Care</h1>
            <h3>Who does it affect?</h3>
            <p>
                These supply chain issues do not just affect technology buffs, they affect everyone.
                From those of us that have smart homes to those of us that use flip phones, we all experience these hardships with the supply chain.
                Issues with it have also affected other facets of society.
                There have been increases in delivery time for almost all products and an increase in cost.
            </p>
            <div className="imageContentRight">
                <img src={image1} style={{height: '20ch'}} alt="Cute small white dog in a red sweater sitting by the fireplace" />
                <p>
                    So many products have greatly reduced availability, including toilet paper, technology, and even cute sweaters and hats for your pet dogs (y'know, because tis the holiday season and they deserve to be festive too).
                    These products have all felt the shift in the supply chain as they have increased in not only price but also scarcity.
                    The issues that we currently face with the supply chain can effect the future of consumerism, chaning how we shop for and receive itmes for the forseeable future.
                </p>
            </div>
            <p>
                With the current standing of the supply chain, the general population is struggling.
                Companies are forced to cut down on how many employees they are capable of having due to health restrictions but also because the amount of reduced materials.
                COVID-19 has put many companies in difficult spots but will inevitably cause the industry to evolve and improve.
                It will lead to increased performance of manufacturers but the pandemic is predicted to having long lasting effects on the global production society.
            </p>
            <h3>Answer questions about how it has affected you!</h3>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSevIE1HQaJpiexBIBFdM30orrfQ_GyGx_bf49YEXEGN5jB4wQ/viewform?embedded=true" id="googleForm" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    );
}

export default WhyYouShouldCare;