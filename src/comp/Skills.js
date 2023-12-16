import pytorch_icon from "../assets/icons/pytorch.svg"
import unity_icon from "../assets/icons/unity.svg"
import tensorflow_icon from "../assets/icons/tensorflow.svg"
import c_icon from "../assets/icons/c.svg"
import cpp_icon from "../assets/icons/cplus.svg"
import csharp_icon from "../assets/icons/csharp.svg"
import flutter_icon from "../assets/icons/flutter.svg"
import arduino_icon from "../assets/icons/ardiuno.svg"
import py_icon from "../assets/icons/python.svg"
import java_icon from "../assets/icons/java.svg"
import r_icon from "../assets/icons/r.svg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1500 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1500, min: 1000 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 1000, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <span className="tagline">Some Alien Technologies</span>
                            <h2>Technologies & Skills</h2>
                            <p>You can see the technologies I generally use in my projects below.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={pytorch_icon} alt="Image" />
                                    <h5>Pytorch</h5>
                                </div>
                                <div className="item">
                                    <img src={unity_icon} alt="Image" />
                                    <h5>Unity</h5>
                                </div>
                                <div className="item">
                                    <img src={tensorflow_icon} alt="Image" />
                                    <h5>Tensorflow</h5>
                                </div>
                                <div className="item">
                                    <img src={flutter_icon} alt="Image" />
                                    <h5>Flutter</h5>
                                </div>
                                <div className="item">
                                    <img src={arduino_icon} alt="Image" />
                                    <h5>Ardiuno</h5>
                                </div>
                                <div className="item">
                                    <img src={c_icon} alt="Image" className="clang" />
                                    <h5>C</h5>
                                </div>
                                <div className="item">
                                    <img src={csharp_icon} alt="Image" className="clang" />
                                    <h5>C#</h5>
                                </div>
                                <div className="item">
                                    <img src={cpp_icon} alt="Image" className="clang" />
                                    <h5>C++</h5>
                                </div>
                                <div className="item">
                                    <img src={py_icon} alt="Image" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={java_icon} alt="Image" />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={r_icon} alt="Image" />
                                    <h5>R</h5>
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
