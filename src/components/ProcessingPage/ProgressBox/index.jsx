import { useState } from "react";

import DownloadBox from "../DownloadBox";

import { PROGRESS_MESSAGE } from "../../../constants/message";

function ProgressBox({ children }) {
  const [progressStatus, setProgressStatus] = useState();
  // TODO. 리액트 쿼리, 혹은 다른 적절한 방법을 통해 작업이 완료될 시 DownloadBox컴포넌트를 렌더링합니다.
  // TODO. 작업이 진행중일 경우 진행상황에 맞춰 PROGRESS_MESSAGE를 렌더링합니다.

  return (
    <div className="bg-[rgba(255,255,255,0.3)] w-700 h-400 rounded-3xl flex justify-center items-center">
      <div className="text-white text-30">
        {/* <p>{PROGRESS_MESSAGE.AUDIO_EXTRACTING}</p> */}
        <DownloadBox />
      </div>
    </div>
  );
}

export default ProgressBox;
