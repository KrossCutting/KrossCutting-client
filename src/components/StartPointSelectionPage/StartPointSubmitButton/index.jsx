import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Loading from "../../shared/Loading";
import Message from "../../Message";

import { useStartPointStore } from "../../../store";
import { AUDIO_ALERT, PROCEED_MESSAGE } from "../../../constants/message";
import API from "../../../../config";

function StartPointSubmitButton() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [messageContent, setMessageContent] = useState(null);
  const { startPoints } = useStartPointStore();

  function handleNextButtonClick() {
    setMessageContent(PROCEED_MESSAGE);
  }

  async function handleProceedClick() {
    setIsLoading(true);
    setMessageContent(null);

    try {
      const response = await axios.post(API.COMPILATIONS, {
        startPoints,
        // TODO. 시작점 외 정보가 필요할 시 추가해야합니다.
      });

      const { result, message } = response.data;

      if (result === "success") {
        setIsLoading(false);
        navigate("/editing");
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
