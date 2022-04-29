import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Card = () => {
    const [show, setShow] = useState(false)
  return (
    <div className='card' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        <div>
            <h1> Hello there</h1>
        </div>
        <AnimatePresence>
        { show && <motion.div 
                initial={{x: -10, opacity: 0}} 
                animate={{x: 0, opacity:1}}
                exit={{x: -50, opacity: 0}}
            >
            <h3>Lorem</h3>
        </motion.div> }
        </AnimatePresence>
    </div>
  )
};

export default Card;
