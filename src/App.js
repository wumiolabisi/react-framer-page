import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "./components/Modal";
import { v4 as uuidv4 } from 'uuid';
import videos from "./data/videos";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const close = () => setModalOpen(false);
  const open = (video) => {
    setSelectedVideo(video);
    setModalOpen(true);
  }



  return (
    <main>
      <header><Navbar/><Hero/></header>
    
    <h2>Mes projets</h2>
    <section className="cards">
      {videos.map((video) => {
        return (
          <section key={uuidv4()} id={uuidv4()}>
            <motion.article className="card"   
            initial={{ opacity: 0, y: 100 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          viewport={{ once: true, amount: 0.2 }} 
        >
              <picture className="card-thumbnail-container">
                <img src={video.img} alt="Miniature de la vidéo" className="card-thumbnail" />
              </picture>
            </motion.article>
            <article className="card-content">
              <header>
                <p className="h2-title">{video.title}</p>
              </header>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="button"
                onClick={() => open(video)}>
                Voir
              </motion.button>
            </article>


          </section>
        );
      })}

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}>
        {modalOpen && selectedVideo && (
          <Modal
            modalOpen={modalOpen}
            src={selectedVideo.src}
            title={selectedVideo.title}
            desc={selectedVideo.desc}
            img={selectedVideo.img}
            handleClose={close}
          />
        )}

      </AnimatePresence>

    </section>
    </main>
  );
}

export default App;
