import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import PropTypes from "prop-types";

import { IoIosAddCircle, IoIosCloseCircle } from "react-icons/io";

import Message from "../../Message";
import API from "../../../../config";
import {
  useAwsVideoStore,
  useAwsAudioStore,
  useYouTubeUrlStore,
} from "../../../store";
import { QUALITY_MESSAGE, PLAYTIME_ALERT } from "../../../constants/message";

function UploadUrlForm({ handleIsLoading }) {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [messageContent, setMessageContent] = useState("");
  const { setVideoUrls } = useAwsVideoStore();
  const { setAudioUrls } = useAwsAudioStore();
  const { youtubeUrls, setYoutubeUrls } = useYouTubeUrlStore((state) => state);

  function handleCountButtonClick() {
    setIsClicked((prevState) => !prevState);
  }

  function handleUrlChange(event) {
    const { name, value } = event.target;

    setYoutubeUrls({ ...youtubeUrls, [name]: value });
  }

  async function handleUrlSubmit(event) {
    event.preventDefault();
    handleIsLoading(true);

    try {
      const response = await axios.post(API.URLS, {
        videoUrls: youtubeUrls,
        isPermitted: false,
      });

      const { result, message } = response.data;

      if (result === "success") {
        const [mainVideoUrl, subOneVideoUrl, subTwoVideoUrl] =
          response.data.videoUrlList;
        const [mainAudioUrl, subOneAudioUrl, subTwoAudioUrl] =
          response.data.audioUrlList;

        setVideoUrls(mainVideoUrl, subOneVideoUrl, subTwoVideoUrl);
        setAudioUrls(mainAudioUrl, subOneAudioUrl, subTwoAudioUrl);
        handleIsLoading(false);
        navigate("/selection");
      }

      if (message === "quality") {
        handleIsLoading(false);
        setMessageContent(QUALITY_MESSAGE);
      }

      if (message === "length") {
        handleIsLoading(false);
        setMessageContent(PLAYTIME_ALERT);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function handleProceedClick() {
    setMessageContent(null);
    handleIsLoading(true);

    try {
      const response = await axios.post(API.URLS, {
        videoUrls: youtubeUrls,
        isPermitted: true,
      });

      const { result } = response.data;

      if (result === "success") {
        const [mainVideoUrl, subOneVideoUrl, subTwoVideoUrl] =
          response.data.videoUrlList;
        const [mainAudioUrl, subOneAudioUrl, subTwoAudioUrl] =
          response.data.audioUrlList;

        setVideoUrls(mainVideoUrl, subOneVideoUrl, subTwoVideoUrl);
        setAudioUrls(mainAudioUrl, subOneAudioUrl, subTwoAudioUrl);
        handleIsLoading(false);
        navigate("/selection");
      }
      // TODO. 필요시 else문을 추가해 에러를 처리합니다.
    } catch (err) {
      handleIsLoading(false);

      // TODO. 에러 발생시 Message창을 통해 혹은 다른 방식으로 처리합니다.
      console.error(err);
    }
  }

  return (
    <>
      <form
        className="flex flex-col items-center justify-center w-full h-auto "
        onSubmit={handleUrlSubmit}
      >
        <div className="flex flex-col justify-center w-full h-70">
          <span className="text-white">Main video</span>
          <input
            name="mainYoutubeUrl"
            type="text"
            className="input-common text-slate-900"
            placeholder="Main video URL"
            onChange={handleUrlChange}
            required
          />
        </div>
        <div className="flex flex-col justify-center w-full h-auto">
          <span className="text-white">Sub videos</span>
          <input
            name="subOneYoutubeUrl"
            type="text"
            className="input-common text-slate-900"
            placeholder="Sub 1 video URL"
            onChange={handleUrlChange}
            required
          />
          {isClicked && (
            <input
              name="subTwoYoutubeUrl"
              type="text"
              className="input-common text-slate-900"
              placeholder="Sub 2 video URL"
              onChange={handleUrlChange}
            />
          )}
        </div>
        <div className="flex items-center justify-center h-auto my-10 cursor-pointer">
          {isClicked ? (
            <IoIosCloseCircle
              size={27}
              onClick={handleCountButtonClick}
              className="hover:text-purple button-animation active:scale-90"
            />
          ) : (
            <IoIosAddCircle
              size={27}
              onClick={handleCountButtonClick}
              className="hover:text-purple button-animation active:scale-90"
            />
          )}
        </div>
        <div className="flex items-center justify-center w-full">
          <button className="input-button">Submit</button>
        </div>
      </form>
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

UploadUrlForm.prototype = {
  handleIsLoading: PropTypes.func.isRequired,
};

export default UploadUrlForm;
