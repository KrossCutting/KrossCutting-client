import { useState, useEffect } from "react";

function ProgressBar({ progressStatus }) {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const stageWidths = {
      start: 10,
      audios: 30,
      frames: 50,
      editpoints: 70,
      completed: 100,
    };

    const currentStageWidth = stageWidths[progressStatus] || 0;
    setProgressWidth(currentStageWidth);
  }, [progressStatus]);

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
  progressStatus: "frames",
};

export default ProgressBar;
