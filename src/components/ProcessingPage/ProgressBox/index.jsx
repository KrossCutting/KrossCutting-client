import { useState } from "react";

import { PROGRESS_MESSAGE } from "../../../constants/message";

function ProgressBox({ children }) {
  const [progressStatus, setProgressStatus] = useState();

  return (
    <div className="bg-[rgba(255,255,255,0.3)] w-700 h-400 rounded-3xl flex justify-center items-center">
      <div className="text-white font-lg text-30">
        <p>Extracting audio files, in progress...</p>
      </div>
    </div>
  );
}

export default ProgressBox;
