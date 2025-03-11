import { motion } from "framer-motion";

const Hero = () => {
    return (
        <motion.section className="hero">
            <h1>
                Monteuse vidéo passionnée et disponible 🎬✨
            </h1>
            <section className="hero-text">
                <p>Je m'appelle Omowumi OLABISI, je suis monteuse vidéo depuis plusieurs années. Je maîtrise Premiere Pro et After Effects, entre autres.
                    Découvrez mon travail et contactez-moi pour en savoir plus !

                </p>
                <a href="mailto:wumi.olabisi@gmail.com" title="E-mail">Par email 📧</a>
                <a href="tel:0650069809" title="Numéro de téléphone"> ou par téléphone 📞</a>

            </section>
        </motion.section >
    )

};

export default Hero;