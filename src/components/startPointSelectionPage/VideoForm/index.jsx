/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";
import TimelinePlugin from "wavesurfer.js/dist/plugins/timeline.esm";

function VideoForm({ videoSrc }) {
  const waveSurferRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (waveSurferRef.current) {
      const videoElem = document.querySelector("#selectionVideo");
      const waveSurferElem = WaveSurfer.create({
        container: waveSurferRef.current,
        barWidth: 2,
        barGap: 1,
        mediaControls: true,
        plugins: [TimelinePlugin.create()],
        media: videoElem,
      });

      const handleTimeupdateEvent = () => {
        if (videoElem.currentTime > 60) {
          waveSurferElem.seekTo(0);
        } else {
          console.log(videoElem.currentTime);
        }
      };

      videoElem.addEventListener("timeupdate", handleTimeupdateEvent);

      return () => {
        waveSurferElem.destroy();
        videoElem.removeEventListener("timeupdate", handleTimeupdateEvent);
      };
    }

    return null;
  }, [videoSrc]);

  return (
    <>
      <div ref={waveSurferRef} className="p-10">
        <video
          id="selectionVideo"
          ref={videoRef}
          src={videoSrc}
          controls
          className="w-800"
          playsInline
          type="video/mp4"
        />
      </div>
      <div>
        <p className="p-10 text-center">
          노래의 시작시간을 지정해주세요! <br />
          시작 시간은 60초 이내로 선택가능합니다.
        </p>
      </div>
    </>
  );
}

export default VideoForm;
