// Import modules
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// Import CSS
import "./Particles.css";

function BackgroundAnimation() {
    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    return (
        <div className="background-animation-container">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: {
                        enable: false,
                    },
                    particles: {
                        number: {
                            value: 20,
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                        },
                        color: {
                            value: "#f05d23",
                        },
                        shape: {
                            type: "circle",
                        },
                        opacity: {
                            value: 0.8,
                        },
                        rotate: {
                            value: 0,
                            random: true,
                            direction: "clockwise",
                            animation: {
                                enable: true,
                                speed: 2,
                                sync: false,
                            },
                        },
                        line_linked: {
                            enable: true,
                            distance: 80,
                            color: "#5a429d",
                            opacity: 0.4,
                            width: 2,
                        },
                        move: {
                            enable: true,
                            speed: 0.5,
                            direction: "none",
                            random: false,
                            straight: false,
                            out_mode: "out",
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: ["grab"],
                            },
                        },
                        modes: {
                            grab: {
                                distance: 100,
                                line_linked: {
                                    opacity: 0.5,
                                },
                            },
                        },
                    },
                    background: {
                        color: "#f7f7f2",
                        image: "",
                        position: "50% 50%",
                        repeat: "no-repeat",
                        size: "cover",
                    },
                }}
            />
        </div>
    );
}

export default BackgroundAnimation;
