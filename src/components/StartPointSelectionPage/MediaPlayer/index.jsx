import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import WaveSurfer from "wavesurfer.js";
import TimelinePlugin from "wavesurfer.js/dist/plugins/timeline.esm";

import { useStartPointStore } from "../../../store";

import StartPointSelectButton from "../StartPointSelectButton";
import StartPointSubmitButton from "../StartPointSubmitButton";

function MediaPlayer({ videoUrlList, audioUrlList, currentIndex }) {
  const videoRef = useRef(null);
  const waveSurferRef = useRef(null);
  const [videoSrc, audioSrc] = [
    videoUrlList[currentIndex],
    audioUrlList[currentIndex],
  ];
  const { startPoints, setStartPoints } = useStartPointStore((state) => state);
  let isStartPointSelected;

  switch (currentIndex) {
    case 0:
      isStartPointSelected = startPoints.mainStartPoint !== null;
      break;

    case 1:
      isStartPointSelected = startPoints.subOneStartPoint !== null;
      break;

    case 2:
      isStartPointSelected = startPoints.subTwoStartPoint !== null;
      break;

    default:
      isStartPointSelected = false;
  }

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
        waveSurferElem.pause();
        videoRef.current.currentTime = 60;
      }

      const runtime = videoRef.current.currentTime / videoRef.current.duration;

      waveSurferElem.seekTo(runtime);
    }

    function handleAudioPlay() {
      waveSurferElem.play();
    }

    function handleAudioPause() {
      waveSurferElem.pause();
    }

    videoRef.current.addEventListener("timeupdate", handleAudioTime);
    videoRef.current.addEventListener("play", handleAudioPlay);
    videoRef.current.addEventListener("pause", handleAudioPause);

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("timeupdate", handleAudioTime);
        videoRef.current.removeEventListener("play", handleAudioPlay);
        videoRef.current.removeEventListener("pause", handleAudioPause);
      }

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
        setStartPoints({ ...startPoints, subOneStartPoint: userSelectPoint });
      }

      if (currentIndex === 2) {
        setStartPoints({ ...startPoints, subTwoStartPoint: userSelectPoint });
      }
    }
  }

  const isAllSelected =
    videoUrlList.filter((url) => url !== "").length ===
    Object.values(startPoints).filter((point) => point !== null).length;

  return (
    <main className="space-y-20">
      <section className="w-full h-full">
        <video
          ref={videoRef}
          src={videoSrc}
          controls
          muted
          className="w-720 h-405"
          playsInline
          type="video/mp4"
        >
          <track kind="captions"></track>
        </video>
        <div className="p-10 text-white" ref={waveSurferRef}></div>
        <p className="p-10 mt-10 font-bold text-center text-white capitalize">
          please select start point of music. <br />
          you can choose start point within 60 sec.
        </p>
      </section>
      <section className="flex flex-row justify-center gap-15">
        <StartPointSelectButton
          handleStartPoint={handleStartPointSelectButton}
          isStartPointSelected={isStartPointSelected}
        />
        {isAllSelected && <StartPointSubmitButton />}
      </section>
    </main>
  );
}

MediaPlayer.propTypes = {
  videoUrlList: PropTypes.arrayOf(PropTypes.string).isRequired,
  audioUrlList: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export default MediaPlayer;
