/* eslint-disable */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import PropTypes from "prop-types";

import { IoIosAddCircle, IoIosCloseCircle } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";

import API from "../../../../config";
import { useAwsVideoStore, useAwsAudioStore } from "../../../store";

function UploadFileForm({ handleIsLoading }) {
  const navigate = useNavigate();
  const { setVideoUrls } = useAwsVideoStore();
  const { setAudioUrls } = useAwsAudioStore();
  const [isClicked, setIsClicked] = useState(false);
  const [videoFiles, setVideoFiles] = useState({
    mainVideoFile: null,
    subOneVideoFile: null,
    subTwoVideoFile: null,
  });

  function handleCountButtonClick() {
    setIsClicked((prevState) => !prevState);
  }

  function handleFileChange(event) {
    const videoFileName = event.target.name;
    const videoFile = event.target.files[0];

    if (videoFile) {
      setVideoFiles((prevState) => {
        return { ...prevState, [videoFileName]: videoFile };
      });
    }
  }

  async function handleVideoSubmit(event) {
    event.preventDefault();
    handleIsLoading(true);

    const formData = new FormData();
    const videoFileList = Object.keys(videoFiles);
    videoFileList.forEach((fileName) => {
      formData.append(fileName, videoFiles[fileName]);
    });

    try {
      const response = await axios.post(API.FILES, formData);
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
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form
      className="flex flex-col items-center justify-center w-full h-auto"
      onSubmit={handleVideoSubmit}
    >
      <div className="flex flex-col justify-center w-full h-70">
        <span> Main video</span>
        <label
          className="justify-between text-gray-400 input-common"
          htmlFor="mainVideo"
        >
          {videoFiles.mainVideoFile?.name || "Upload Main Video"}
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
      <div className="flex flex-col justify-center w-full h-auto">
        <span>Sub videos</span>
        <label
          className="justify-between text-gray-400 input-common"
          htmlFor="subOneVideo"
        >
          {videoFiles.subOneVideoFile?.name || "Upload Sub 1 Video"}
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
              {videoFiles.subTwoVideoFile?.name || "Upload Sub 2 Video"}
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
  );
}

UploadFileForm.prototype = {
  handleIsLoading: PropTypes.func.isRequired,
};

export default UploadFileForm;
