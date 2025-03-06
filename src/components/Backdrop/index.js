import { motion } from "framer-motion";

//2 props
// children : le contenu 
// onClick : custom event handler
const Backdrop = ({children, onClick}) =>{
     return(
        <motion.div
        className="backdrop"
        onClick={onClick}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            {children}
        </motion.div>
        );
};

export default Backdrop;