import { useState, useEffect } from "react";
import { useFinalVideoUrlStore } from "../../../store";

function ProgressBar({ progressStatus }) {
  const [progressWidth, setProgressWidth] = useState(0);
  const { finalVideoUrl } = useFinalVideoUrlStore();

  useEffect(() => {
    const stageWidths = {
      start: 5,
      audios: 10,
      frames: 25,
      singleShot: 50,
      editing: 70,
      exporting: 90,
    };

    const currentStageWidth = stageWidths[progressStatus] || 0;
    setProgressWidth(currentStageWidth);

    if (finalVideoUrl !== "") {
      setProgressWidth(100);
    }
  }, [progressStatus, finalVideoUrl]);

  return (
    <div className="bg-[rgba(255,255,255,0.3)] min-w-400 w-[60vw] min-h-30 rounded-lg flex items-center justify-start px-5">
      <div
        className="transition-all duration-1000 ease-in-out rounded-lg h-25 bg-purple animate-fadeIn shadow-neon"
        style={{
          width: `${progressWidth}%`,
        }}
      ></div>
    </div>
  );
}

ProgressBar.defaultProps = {
  progressStatus: "start",
};

export default ProgressBar;
