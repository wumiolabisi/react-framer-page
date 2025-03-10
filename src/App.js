import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "./components/Modal";
import { v4 as uuidv4 } from 'uuid';
import videos from "./data/videos";

function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const close = () => setModalOpen(false);
  const open = (video) => {
    setSelectedVideo(video);
    setModalOpen(true);
  }



  return (
    <div className="cards">
      {videos.map((video) => {
        return (
          <section key={uuidv4()} id={uuidv4()}>
            <section className="card">
            <picture className="card-thumbnail-container">
              <img src={video.img} alt="Miniature de la vidéo" className="card-thumbnail"/>
            </picture>
            </section>
            <header>{video.title}</header>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="button"
              onClick={() => open(video)}>
              Voir
            </motion.button>
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
        );
      })}



    </div>
  );
}

export default App;
