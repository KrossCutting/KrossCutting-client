/* eslint-disable */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import PropTypes from "prop-types";

import { IoIosAddCircle, IoIosCloseCircle } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";

import Message from "../../Message";
import API from "../../../../config";
import {
  useAwsVideoStore,
  useAwsAudioStore,
  useUploadedVideoStore,
} from "../../../store";
import { QUALITY_MESSAGE, PLAYTIME_ALERT } from "../../../constants/message";

function UploadVideoForm({ handleIsLoading }) {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [messageContent, setMessageContent] = useState("");
  const { setVideoUrls } = useAwsVideoStore();
  const { setAudioUrls } = useAwsAudioStore();
  const { uploadedVideos, setVideoFiles, clearVideoFiles } =
    useUploadedVideoStore((state) => state); // TODO. 이후 서버작업에 따라 store 변경이 필요합니다.

  function handleCountButtonClick() {
    setIsClicked((prevState) => !prevState);
  }

  function handleFileChange(event) {
    const { name, file } = event.target;

    setVideoFiles({ ...uploadedVideos, [name]: file });
  }

  async function handleVideoSubmit(event) {
    event.preventDefault();
    handleIsLoading(true);

    try {
      const response = await axios.post(API.CONTENTS, {
        // TODO. 이후 서버작업에 따라 API Endpoint 변경이 필요합니다.
        videoFiles: uploadedVideos,
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
      const response = await axios.post(API.CONTENTS, {
        videoFiles: uploadedVideos,
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
        clearVideoFiles();
        handleIsLoading(false);
        navigate("/selection");
      }
      // TODO. 필요시 else문을 추가해 에러를 처리합니다.
    } catch (err) {
      clearVideoFiles();
      handleIsLoading(false);

      // TODO. 에러 발생시 Message창을 통해 혹은 다른 방식으로 처리합니다.
      console.error(err);
    }
  }

  return (
    <>
      <form
        className="flex flex-col items-center justify-center w-full h-auto "
        onSubmit={handleVideoSubmit}
      >
        <div className="flex flex-col justify-center w-300 h-70">
          <span> Main video</span>
          <label
            className="justify-between text-gray-400 input-common"
            htmlFor="mainVideo"
          >
            Upload Main Video
            <MdOutlineFileUpload size={20} />
          </label>
          <input
            id="mainVideo"
            name="mainVideoFile"
            type="file"
            accept="video/mp4"
            className="hidden"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="flex flex-col h-auto w-300">
          <span>Sub videos</span>
          <label
            className="justify-between text-gray-400 input-common"
            htmlFor="subOneVideo"
          >
            Upload Sub 1 video
            <MdOutlineFileUpload size={20} />
          </label>
          <input
            id="subOneVideo"
            name="subOneVideoFile"
            type="file"
            accept="video/mp4"
            className="hidden"
            onChange={handleFileChange}
            required
          />
          {isClicked && (
            <>
              <label
                className="justify-between text-gray-400 input-common"
                htmlFor="subTwoVideo"
              >
                Upload Sub 2 video
                <MdOutlineFileUpload size={20} />
              </label>
              <input
                id="subTwoVideo"
                name="subTwoVideoFile"
                type="file"
                accept="video/mp4"
                className="hidden"
                onChange={handleFileChange}
              />
            </>
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

UploadVideoForm.prototype = {
  handleIsLoading: PropTypes.func.isRequired,
};

export default UploadVideoForm;
