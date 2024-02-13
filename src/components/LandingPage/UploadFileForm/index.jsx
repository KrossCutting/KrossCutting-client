/* eslint-disable */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import PropTypes from "prop-types";

import { IoIosAddCircle, IoIosCloseCircle } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";

import API from "../../../../config";
import {
  useAwsVideoStore,
  useAwsAudioStore,
} from "../../../store";

function UploadFileForm({ handleIsLoading }) {
  const navigate = useNavigate();
  const { setVideoUrls } = useAwsVideoStore();
  const { setAudioUrls } = useAwsAudioStore();
  const [isClicked, setIsClicked] = useState(false);
  const [files, setFiles] = useState({
    mainVideoFile: null,
    subOneVideoFile: null,
    subTwoVideoFile: null,
  });

  function handleCountButtonClick() {
    setIsClicked((prevState) => !prevState);
  }

  function handleFileChange(event) {
    const fileName = event.target.name;
    const file = event.target.files[0];
    console.log(file);

    if (file) {
      setFiles((prevState) => {
        return { ...prevState, [fileName]: file }
      });
    }
  }

  async function handleVideoSubmit(event) {
    event.preventDefault();
    handleIsLoading(true);

    const formData = new FormData();
    const fileList = Object.keys(files);
    fileList.forEach(fileName => {
      formData.append(fileName, files[fileName]);
    });

    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

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
      className="flex flex-col items-center justify-center w-full h-auto "
      onSubmit={handleVideoSubmit}
    >
      <div className="flex flex-col justify-center w-300 h-70">
        <span> Main video</span>
        <label
          className="justify-between text-gray-400 input-common"
          htmlFor="mainVideo"
        >
          {files.mainVideoFile?.name || "Upload Main Video"}
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
          {files.subOneVideoFile?.name || "Upload Sub 1 Video"}
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
              {files.subTwoVideoFile?.name || "Upload Sub 2 Video"}
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
