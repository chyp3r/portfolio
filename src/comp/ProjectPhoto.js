import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import colorSharp from "../assets/img/color-sharp.png"

export const ProjectPhoto = ({photo1,photo2,photo3,photo4,count = 1}) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2/count
        },
        desktop: {
            breakpoint: { max: 3000, min: 1000 },
            items: 2/count
        },
        tablet: {
            breakpoint: { max: 1000, min: 800 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 800, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme project-slider">
                                <div className="item">
                                    <img src={photo1} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={photo2} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={photo3} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={photo4} alt="Image" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
        </section>
    )
}
