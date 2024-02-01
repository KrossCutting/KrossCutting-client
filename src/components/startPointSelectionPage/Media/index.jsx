import { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";
import TimelinePlugin from "wavesurfer.js/dist/plugins/timeline.esm";

function Media({ videoSrc, audioSrc }) {
  const waveSurferRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const waveSurferElem = WaveSurfer.create({
      container: waveSurferRef.current,
      barWidth: 2,
      barGap: 1,
      interact: false,
      plugins: [TimelinePlugin.create()],
      url: audioSrc,
    });

    const handleAudioTime = () => {
      if (!Number.isFinite(videoRef.current.duration)) {
        return;
      }

      if (videoRef.current.currentTime > 60) {
        videoRef.current.currentTime = 60;
      }

      const runtime = videoRef.current.currentTime / videoRef.current.duration;

      waveSurferElem.seekTo(runtime);
    };

    videoRef.current.addEventListener("timeupdate", handleAudioTime);

    return () => {
      videoRef.current.removeEventListener("timeupdate", handleAudioTime);
      waveSurferElem.destroy();
    };
  }, [audioSrc, videoSrc, videoRef, waveSurferRef]);

  return (
    <div className="w-full h-full">
      <video
        ref={videoRef}
        src={videoSrc}
        controls
        className="w-720 h-405"
        playsInline
        type="video/mp4"
      >
        <track kind="captions"></track>
      </video>
      <div className="p-10 text-white" ref={waveSurferRef}></div>
      <p className="p-10 font-bold text-center text-white capitalize">
        please select start point of music. <br />
        you can choose start point within 60 sec.
      </p>
    </div>
  );
}

export default Media;
