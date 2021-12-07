import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from './Content/trucker.jpg';
import image2 from './Content/coronavirus-2.jpg';
import image3 from './Content/CPU.jpg';

const DemoCarousel = () => {
    return (
        <Carousel>
            <div>
                <img src={image1} alt="African America woman driving a semi truck in the snow"/>
                <p className="legend">Truckers often have to deal with stressful or high risk situations such as snow.</p>

            </div>
            <div>
                <img src={image2} alt="COVID-19 molecule"/>
                <p className="legend">COVID-19 has been a catalyst for supply chain issues.</p>
            </div>
            <div>
                <img src={image3} alt="CPU being placed into a motherboard"/>
                <p className="legend">Technology across the board have all felt tremendous issues with the supply chain crisis.</p>
            </div>
        </Carousel>
    );
}

export default DemoCarousel;