import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from './Content/trucker.jpg';
import image2 from './Content/coronavirus-2.jpg';
import image3 from './Content/CPU.jpg';

const DemoCarousel = () => {
    return (
        <Carousel>
            <div>
                <img src={image1} alt=""/>
                <p className="legend">Trucker (placeholder)</p>

            </div>
            <div>
                <img src={image2} alt=""/>
                <p className="legend">Covid-19 (placeholder)</p>
            </div>
            <div>
                <img src={image3} alt=""/>
                <p className="legend">CPU (placeholder)</p>
            </div>
        </Carousel>
    );
}

export default DemoCarousel;