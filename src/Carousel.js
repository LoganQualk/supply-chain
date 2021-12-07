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
                <p className="legend">Trucker shortages have greatly exacerbated the supply chain issues.</p>

            </div>
            <div>
                <img src={image2} alt="COVID-19 molecule"/>
                <p className="legend">COVID-19 was the catalyst for the supply chain downfall, but not the only reason.</p>
            </div>
            <div>
                <img src={image3} alt="CPU being placed into a motherboard"/>
                <p className="legend">Technology across the board has had tremendous issues adapting to the supply chain crisis.</p>
            </div>
        </Carousel>
    );
}

export default DemoCarousel;