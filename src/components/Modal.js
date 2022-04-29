import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ModDrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

const modal = {
    hidden: {
        y:'-100vh'
    },
    visible: {
        y: 100,
        transition: {
            duration: 0.1,
            type: 'spring',
            damping: 15,
            stiffness: 300
        }
    }
}

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence>
        { showModal && (
            <motion.div className='modal_container'
                variants={ModDrop}
                initial='hidden'
                animate='visible'
                exit='hidden'
                onClick={ () => setShowModal(false) }
            >
                <motion.div className='modal'
                    variants={modal}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                >
                    <p>Do something if you want to...</p>
                    <button>Clcik Here</button>
                </motion.div>

            </motion.div>
        ) }
    </AnimatePresence>
  )
};

export default Modal;
