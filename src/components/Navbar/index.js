import { motion } from "framer-motion";
const Navbar = () => {
    return (
        <motion.nav>

            <ul>
                <li id="logo">
                   Omowumi OLABISI
               </li>
               <li className="infos">
               <a href="mailto:wumi.olabisi@gmail.com" title="E-mail">E-mail</a> 
               </li>
               <li className="infos">
               <a href="tel:0650069809" title="Numéro de téléphone">Téléphone</a>
               </li>
            </ul>
        </motion.nav>
    )

};

export default Navbar;