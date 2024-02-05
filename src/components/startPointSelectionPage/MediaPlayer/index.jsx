import { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";
import TimelinePlugin from "wavesurfer.js/dist/plugins/timeline.esm";

import { useStartPointStore } from "../../../store";

import StartPointSelectButton from "../StartPointSelectButton";
import StartPointSubmitButton from "../StartPointSubmitButton";

function MediaPlayer({ videoUrlList, audioUrlList, currentIndex }) {
  const waveSurferRef = useRef(null);
  const videoRef = useRef(null);
  const [videoSrc, audioSrc] = [
    videoUrlList[currentIndex],
    audioUrlList[currentIndex],
  ];
  const { startPoints, setStartPoints } = useStartPointStore((state) => state);

  useEffect(() => {
    const waveSurferElem = WaveSurfer.create({
      container: waveSurferRef.current,
      height: 50,
      barWidth: 2,
      barGap: 1,
      barHeight: 1,
      cursorWidth: 1,
      interact: false,
      plugins: [TimelinePlugin.create()],
      url: audioSrc,
    });

    function handleAudioTime() {
      if (!Number.isFinite(videoRef.current.duration)) {
        return;
      }

      if (videoRef.current.currentTime > 60) {
        videoRef.current.currentTime = 60;
      }

      const runtime = videoRef.current.currentTime / videoRef.current.duration;

      waveSurferElem.seekTo(runtime);
    }

    videoRef.current.addEventListener("timeupdate", handleAudioTime);

    return () => {
      videoRef.current.removeEventListener("timeupdate", handleAudioTime);
      waveSurferElem.destroy();
    };
  }, [audioSrc, videoSrc, videoRef, waveSurferRef]);

  function handleStartPointSelectButton() {
    const userSelectPoint = Math.floor(videoRef.current.currentTime);

    if (!Number.isNaN(userSelectPoint)) {
      if (currentIndex === 0) {
        setStartPoints({ ...startPoints, mainStartPoint: userSelectPoint });
      }

      if (currentIndex === 1) {
        setStartPoints({ ...startPoints, firstSubStartPoint: userSelectPoint });
      }

      if (currentIndex === 2) {
        setStartPoints({ ...startPoints, lastSubStartPoint: userSelectPoint });
      }
    }
  }

  const isAllSelected =
    videoUrlList.filter((url) => url !== "").length ===
    Object.values(startPoints).filter((point) => point !== undefined).length;

  return (
    <>
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
      <div className="flex flex-row justify-center gap-15">
        <StartPointSelectButton
          handleStartPoint={handleStartPointSelectButton}
        />
        {isAllSelected && <StartPointSubmitButton />}
      </div>
    </>
  );
}

export default MediaPlayer;
