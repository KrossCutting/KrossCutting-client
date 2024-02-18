import { useState, useEffect } from "react";

import DownloadBox from "../DownloadBox";
import ProgressMessage from "../ProgressMessage";
import Loading from "../../shared/Loading";

import { useFinalVideoUrlStore } from "../../../store";
import { PROGRESS_MESSAGE } from "../../../constants/message";

function ProgressBox({ progressStatus }) {
  const [isLoading, setIsLoading] = useState(true);
  const { finalVideoUrl } = useFinalVideoUrlStore();
  let messageType = "Loading...";

  useEffect(() => {
    if (progressStatus) {
      setIsLoading(false);
    }
  }, [progressStatus]);

  switch (progressStatus) {
    case "frames":
      messageType = PROGRESS_MESSAGE.FRAME_EXPORTING;
      break;

    case "editpoints":
      messageType = PROGRESS_MESSAGE.MOVEMENT_DETECTION;
      break;

    case "completed":
      messageType = "completed";
      break;

    default:
      messageType = "Loading...";
  }

  const progressContent =
    finalVideoUrl !== "" ? (
      <DownloadBox />
    ) : (
      <ProgressMessage messageContent={messageType} />
    );

  return (
    <div className="bg-[rgba(255,255,255,0.3)] w-[60vw] h-auto min-h-400 min-w-400 rounded-3xl flex justify-center items-center">
      <div className="text-sm text-white md:text-lg lg:text-30">
        {progressContent}
      </div>
      {isLoading && <Loading />}
    </div>
  );
}

ProgressBox.defaultProps = {
  progressStatus: "frames",
};

export default ProgressBox;
