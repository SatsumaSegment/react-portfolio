import { motion } from "framer-motion";
import { useState } from "react";

import Card from "../Card/Card";

import data from "../../assets/projects.json";

import "./Carousel.css";

let sleep = false;
function Carousel() {
    const [positionIndex, setPositionIndex] = useState([0, 1, 2]);

    function handleNext() {
        setPositionIndex((prevIndex) => {
            const updatedIndex = prevIndex.map((prevInd) => (prevInd + 1) % 3);
            return updatedIndex;
        });
    }

    function sleepScroll() {
        if (sleep === false) {
            handleNext();
        }
        sleep = true;
        setTimeout(function () {
            sleep = false;
        }, 200);
    }

    const cards = [
        <Card key={data.data.id} title={data.data[0].name} image={data.data[0].images[0]} description={data.data[0].description} code={data.data[0].links.code} demo={data.data[0].links.demo} />,
        <Card key={data.data.id} title={data.data[1].name} image={data.data[1].images[0]} description={data.data[1].description} code={data.data[1].links.code} demo={data.data[1].links.demo} />,
        <Card key={data.data.id} title={data.data[2].name} image={data.data[2].images[0]} description={data.data[2].description} code={data.data[2].links.code} demo={data.data[2].links.demo} />,
    ];

    const positions = ["left", "center", "right"];

    let variants = {
        left: { x: "160%", scale: 0.7 },
        center: { x: "80%", scale: 1 },
        right: { x: "-3%", scale: 0.7 },
    };

    if (window.innerWidth <= 780) {
        variants = {
            left: { x: "450%", scale: 0.7 },
            center: { x: "30%", scale: 1 },
            right: { x: "-290%", scale: 0.7 },
        };
    }

    return (
        <div className="carousel-container">
            <div className="carousel">
                {cards.map((card, index) => (
                    <motion.div onPan={sleepScroll} key={index} className="item" initial="center" animate={positions[positionIndex[index]]} variants={variants} transition={{ duration: 0.5 }}>
                        {card}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
