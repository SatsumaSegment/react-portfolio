import { motion } from "framer-motion";
import Card from "../Card/Card";

import data from "../../assets/projects.json";

import "./Carousel.css";

function Carousel() {
    return (
        <motion.div className="carousel-container">
            <motion.div drag="x" dragConstraints={{ right: 200, left: -580 }} initial={{ x: -200 }} className="carousel">
                <motion.div className="item">
                    <Card
                        key={data.data.id}
                        title={data.data[0].name}
                        image={data.data[0].images[0]}
                        description={data.data[0].description}
                        code={data.data[0].links.code}
                        demo={data.data[0].links.demo}
                    />
                </motion.div>
                <motion.div className="item">
                    <Card
                        key={data.data.id}
                        title={data.data[1].name}
                        image={data.data[1].images[0]}
                        description={data.data[1].description}
                        code={data.data[1].links.code}
                        demo={data.data[1].links.demo}
                    />
                </motion.div>
                <motion.div className="item">
                    <Card
                        key={data.data.id}
                        title={data.data[2].name}
                        image={data.data[2].images[0]}
                        description={data.data[2].description}
                        code={data.data[2].links.code}
                        demo={data.data[2].links.demo}
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Carousel;
