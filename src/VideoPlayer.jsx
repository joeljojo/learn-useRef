import { useState, useRef } from "react";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  const ref = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOnClick = () => {
    const nextPlay = !isPlaying;
    setIsPlaying(nextPlay);
    if (nextPlay) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };
  return (
    <div className="container">
      <div className="video-player">
        <button className="play-button" onClick={handleOnClick}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <video
          muted
          width={400}
          ref={ref}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source
            src="https://player.vimeo.com/external/342867287.sd.mp4?s=0cb8b28bf29ac7fd7e4d2b10f30343aeaa742aeb&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};
export default VideoPlayer;
