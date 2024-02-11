import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { IoIosAddCircle, IoIosCloseCircle } from "react-icons/io";

import Message from "../../Message";
import Loading from "../../shared/Loading";
import API from "../../../../config";
import {
  useAwsVideoStore,
  useAwsAudioStore,
  useYouTubeUrlStore,
} from "../../../store";
import { QUALITY_MESSAGE, PLAYTIME_ALERT } from "../../../constants/message";

function UploadForm() {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messageContent, setMessageContent] = useState("");
  const { setVideoUrls } = useAwsVideoStore();
  const { setAudioUrls } = useAwsAudioStore();
  const { youtubeUrls, setYoutubeUrls } = useYouTubeUrlStore((state) => state);

  function handleClick() {
    setIsClicked((prevState) => !prevState);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setYoutubeUrls({ ...youtubeUrls, [name]: value });
  }

  async function handleUrlSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(API.CONTENTS, {
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
        setIsLoading(false);
        navigate("/selection");
      }

      if (message === "quality") {
        setIsLoading(false);
        setMessageContent(QUALITY_MESSAGE);
      }

      if (message === "length") {
        setIsLoading(false);
        setMessageContent(PLAYTIME_ALERT);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function handleProceedClick(event) {
    setMessageContent(null);
    setIsLoading(true);

    try {
      const response = await axios.post(API.CONTENTS, {
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
        setIsLoading(false);
        navigate("/selection");
      }
      // TODO. 필요시 else문을 추가해 에러를 처리합니다.
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="w-400 h-300 bg-[rgba(255,255,255,0.1)] rounded-lg">
        <form
          className="flex flex-col items-center justify-center w-full h-full space-y-15"
          onSubmit={handleUrlSubmit}
        >
          <div className="flex flex-col justify-center w-300 h-70">
            <span className="text-white">Main video</span>
            <input
              name="mainYoutubeUrl"
              type="text"
              className="px-10 mb-10 text-black rounded"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col h-auto w-300">
            <span className="text-white">Sub videos</span>
            <input
              name="subOneYoutubeUrl"
              type="text"
              className="px-10 mb-10 text-black rounded"
              onChange={handleChange}
              required
            />
            {isClicked && (
              <input
                name="subTwoYoutubeUrl"
                type="text"
                className="px-10 mb-10 text-black rounded"
                onChange={handleChange}
              />
            )}
          </div>
          <div className="flex items-center justify-center h-auto my-10 cursor-pointer">
            {isClicked ? (
              <IoIosCloseCircle
                size={27}
                onClick={handleClick}
                className="hover:text-purple"
              />
            ) : (
              <IoIosAddCircle
                size={27}
                onClick={handleClick}
                className="hover:text-purple"
              />
            )}
          </div>
          <div className="flex items-center justify-center w-full">
            <button className="my-5 font-bold text-black bg-white rounded-lg w-80 h-30 hover:bg-[#D305FF] hover:text-white active:bg-purple">
              Submit
            </button>
          </div>
        </form>
      </div>
      {isLoading && <Loading />}
      {messageContent && (
        <Message
          messageType={messageContent}
          handleProceedClick={handleProceedClick}
          handleSelectionClick={setMessageContent}
        />
      )}
    </main>
  );
}

export default UploadForm;
