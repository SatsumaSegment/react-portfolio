import { motion } from "framer-motion";
import Card from "../Card/Card";
import "./Carousel.css";

function Carousel() {
    return (
        <motion.div className="carousel-container">
            <motion.div drag="x" dragConstraints={{ right: 200, left: -580 }} initial={{ x: -200 }} className="carousel">
                <motion.div className="item">
                    <Card />
                </motion.div>
                <motion.div className="item">
                    <Card />
                </motion.div>
                <motion.div className="item">
                    <Card />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Carousel;
