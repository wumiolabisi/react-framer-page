import { motion } from "framer-motion";
import Backdrop from "../Backdrop";

const dropIn = {
    hidden:{
        y:"-100vh",
        opacity:0,
    },
    visible:{
        y:0,
        opacity:1,
        transition: {
            duration:0.1,
            type:"spring",
            damping:100,
            stiffness:500
        }
    },
    exit:{
       opacity:0, 
       y:"100vh"    
},
};

const Modal = ({handleClose, title, img, desc, src}) =>{
    return(
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal orange-grandient"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <h2>{title}</h2>
                <p>{desc}</p>
                <a href={src}>
                    <img src={img} alt="Illustration of video {title}" className="thumbnail"/>
                </a>
                <button onClick={handleClose}>Fermer</button>
            </motion.div>
        </Backdrop>
    )
};

export default Modal;