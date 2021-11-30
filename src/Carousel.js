import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from './Content/Trucker-man.jpg';
import image2 from './Content/coronavirus-2.jpg';
import image3 from './Content/CPU.jpg';

const DemoCarousel = () => {
    return (
        <Carousel>
            <div>
                <img src={image1} />
                <p className="legend">Truck Driving Man</p>

            </div>
            <div>
                <img src={image2} />
                <p className="legend">Covid-19</p>
            </div>
            <div>
                <img src={image3} />
                <p className="legend">CPU</p>
            </div>
        </Carousel>
    );
}

export default DemoCarousel;