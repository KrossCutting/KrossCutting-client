import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { IoIosAddCircle, IoIosCloseCircle } from "react-icons/io";

import Message from "../../Message";
import API from "../../../../config";
import Loading from "../../shared/Loading";
import { useAwsUrlStore, useYouTubeUrlStore } from "../../../store";
import { QUALITY_MESSAGE, PLAYTIME_ALERT } from "../../../constants/message";

function UploadForm() {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState("");
  const { setVideoUrls, setAudioUrls } = useAwsUrlStore();
  const { youtubeUrls, setYoutubeUrls } = useYouTubeUrlStore((state) => state);

  function handleClick() {
    setIsClicked((prevState) => !prevState);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setYoutubeUrls({ ...youtubeUrls, [name]: value });
  }

  async function requestUrls(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(API.CONTENTS, {
        videoUrls: youtubeUrls,
        isPermitted: false,
      });

      const { result } = response.data;

      if (result === "success") {
        const { mainVideoUrl, firstSubVideoUrl, lastSubVideoUrl } =
          response.data.videoUrlList;
        const { mainAudioUrl, firstSubAudioUrl, lastSubAudioUrl } =
          response.data.audioUrlList;

        setVideoUrls(mainVideoUrl, firstSubVideoUrl, lastSubVideoUrl);
        setAudioUrls(mainAudioUrl, firstSubAudioUrl, lastSubAudioUrl);
        setIsLoading(false);
        navigate("/selection");

        return;
      }

      const { message } = response.data;

      if (message === "quality") {
        setServerMessage(QUALITY_MESSAGE);
        return;
      }

      if (message === "length") {
        setServerMessage(PLAYTIME_ALERT);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="w-400 h-300 bg-[rgba(255,255,255,0.1)] rounded-lg">
        <form className="flex flex-col items-center justify-center w-full h-full space-y-15">
          <div className="flex flex-col justify-center w-300 h-70">
            <span className="text-white">Main video</span>
            <input
              name="mainVideoUrl"
              type="text"
              className="px-10 mb-10 text-black rounded"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col h-auto w-300">
            <span className="text-white">Sub videos</span>
            <input
              name="firstSubVideoUrl"
              type="text"
              className="px-10 mb-10 text-black rounded"
              onChange={handleChange}
            />
            {isClicked && (
              <input
                name="lastSubVideoUrl"
                type="text"
                className="px-10 mb-10 text-black rounded"
                onChange={handleChange}
              />
            )}
          </div>
          <div className="flex items-center justify-center h-auto my-10 cursor-pointer">
            {isClicked ? (
              <IoIosCloseCircle size={27} onClick={handleClick} />
            ) : (
              <IoIosAddCircle size={27} onClick={handleClick} />
            )}
          </div>
          <div className="flex items-center justify-center w-full">
            <button
              type="button"
              onClick={requestUrls}
              className="my-5 font-bold text-black bg-white rounded-lg w-80 h-30 hover:bg-[#D305FF] hover:text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {isLoading && <Loading />}
      {serverMessage && <Message messageType={serverMessage} />}
    </main>
  );
}

export default UploadForm;
