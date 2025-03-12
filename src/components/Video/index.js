import React from 'react';
import ReactPlayer from 'react-player/lazy';


const Video = ({ url, playing = false, muted = false, loop = false, controls=true }) => {
    return (

        <section className="video-container">
            <ReactPlayer
                url={url}
                playing={playing}
                muted={muted}
                loop={loop}
                controls={controls}
                width="100%" height="100%"
            />
        </section>
    );
}

export default Video;