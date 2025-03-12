import { motion } from "framer-motion";
import Backdrop from "../Backdrop";
import Video from "../Video";

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
            <motion.section
                onClick={(e) => e.stopPropagation()}
                className="modal orange-grandient"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <h2>{title}</h2>
                <p><strong>Description du projet</strong></p>
                <p>{desc}</p>
                <picture className="thumbnail-container">
                
                    { src.includes("youtube.") || src.includes("soundcloud.") ? (<Video url={src}/>) : (
                        <a href={src} title="Lien vers la source du projet">
                            <img src={img} alt="Illustration of video {title}" className="thumbnail"/>
                            </a>)}
               
                </picture>
                    <p className="source">Regarder à la source : <a href={src} target="_blank" rel="noreferrer">{src}</a></p>

                <button onClick={handleClose} className="button-close">Fermer</button>
            </motion.section>
        </Backdrop>
    )
};

export default Modal;