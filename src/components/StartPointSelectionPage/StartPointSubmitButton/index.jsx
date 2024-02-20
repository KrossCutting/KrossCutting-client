import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Loading from "../../shared/Loading";
import Message from "../../Message";

import { useStartPointStore, useFinalVideoUrlStore } from "../../../store";
import { AUDIO_ALERT, PROCEED_MESSAGE } from "../../../constants/message";
import API from "../../../../config";

function StartPointSubmitButton() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [messageContent, setMessageContent] = useState(null);
  const { startPoints } = useStartPointStore();
  const { setFinalVideoUrl } = useFinalVideoUrlStore();

  function handleNextButtonClick() {
    setMessageContent(PROCEED_MESSAGE);
  }

  async function handleProceedClick() {
    setIsLoading(true);
    setMessageContent(null);

    try {
      const response = await axios.post(`${API.VALIDATIONS}/audios`, {
        startPoints,
      });

      const { result, message, labelInfo } = response.data;

      // To Do. 추후 배포시 렌더링되는 EditPage로 옮겨할 수 있음
      // 현재 여기에쓴 이유는 개발자 모드로 useEffect가 두번 발동되기 때문
      if (result === "success") {
        setIsLoading(false);
        navigate("/editing");

        const lastResponse = await axios.post(`${API.COMPILATIONS}`, labelInfo);

        const { lastResult, s3ClientFinalVideoUrl } = lastResponse.data;

        if (lastResult === "success") {
          setFinalVideoUrl(s3ClientFinalVideoUrl);
        }
      }

      if (message === "audio") {
        setIsLoading(false);
        setMessageContent(AUDIO_ALERT);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <button
        type="button"
        className="button-submission"
        onClick={handleNextButtonClick}
      >
        next step
      </button>
      {isLoading && <Loading />}
      {messageContent && (
        <Message
          messageType={messageContent}
          handleProceedClick={handleProceedClick}
          handleSelectionClick={setMessageContent}
        />
      )}
    </>
  );
}

export default StartPointSubmitButton;
