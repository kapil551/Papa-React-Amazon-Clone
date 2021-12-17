// https://www.npmjs.com/package/react-responsive-carousel
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Banner() {
    return (
        <div className="relative">

            {/* gradient container */}
            {/* https://tailwindcss.com/docs/gradient-color-stops */}
            <div className="border-2 border-black bg-gradient-to-t from-gray-100 to-transparent absolute w-full h-32 bottom-0 z-50">
                
            </div>

            {/* https://www.npmjs.com/package/react-responsive-carousel */}
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >

                <div>
                    <img src="https://links.papareact.com/gi1" alt="" loading="lazy" />
                </div>

                <div>
                    <img src="https://links.papareact.com/6ff" alt="" loading="lazy" />
                </div>

                <div>
                    <img src="https://links.papareact.com/7ma" alt="" loading="lazy" />
                </div>
            </Carousel>
            
        </div>
    )
}

export default Banner;
