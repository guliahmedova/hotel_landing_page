import HeroSlider, { Overlay, Slide, Nav } from "hero-slider";
import img1 from "../assets/images/hero-image-1.jpg";
import img2 from "../assets/images/hero-image-2.jpg";
import img3 from "../assets/images/hero-image-3.jpg";
import img4 from "../assets/images/hero-image-4.jpg";
import Navbar from "./Navbar";
import HeroText from "./HeroText";

const Hero = () => {
    return (
        <HeroSlider className="hero-slider" slidingAnimation="left_to_right"
            orientation="horizontal"
            initialSlide={1}
            onBeforeChange={(previousSlide, nextSlide) =>
                console.log("onBeforeChange", previousSlide, nextSlide)
            }
            onChange={nextSlide => console.log("onChange", nextSlide)}
            onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.33)",
            }}
            settings={{
                slidingDuration: 250,
                slidingDelay: 100,
                shouldAutoplay: true,
                shouldDisplayButtons: false,
                autoplayDuration: 5000,
                height: "100vh"
            }}>
            <Overlay>
                <Navbar />
                <HeroText />
            </Overlay>

            <Slide
                background={{
                    backgroundImageSrc: img1,
                    backgroundAttachment: "fixed"
                }}
            />

            <Slide
                background={{
                    backgroundImageSrc: img2,
                    backgroundAttachment: "fixed"
                }}
            />

            <Slide
                background={{
                    backgroundImageSrc: img3,
                    backgroundAttachment: "fixed"
                }}
            />

            <Slide
                background={{
                    backgroundImageSrc: img4,
                    backgroundAttachment: "fixed"
                }}
            />
        </HeroSlider>
    )
}

export default Hero