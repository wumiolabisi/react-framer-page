import { motion } from "framer-motion";

const logoSrc = '';

const Navbar = ({anchor1,anchor2,anchor3,nav1,nav2,nav3})=>{
    return(
        <motion.nav>
            <div>
                <img src={logoSrc} alt="" className="logo-img"/>
            </div>
            <ul>
                <li><a href="#{anchor1}">{nav1}</a></li>
                <li><a href="#{anchor2}">{nav2}</a></li>
                <li><a href="#{anchor3}">{nav3}</a></li>
             </ul>
        </motion.nav>
    )

};

export default Navbar;