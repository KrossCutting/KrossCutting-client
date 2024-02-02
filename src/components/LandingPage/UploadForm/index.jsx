import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { IoIosAddCircle, IoIosCloseCircle } from "react-icons/io";

import useUrlStore from "../../../store";
import API from "../../../../config";

function UploadForm() {
  const [clicked, setClicked] = useState(false);
  const [videos, setVideos] = useState({
    mainVideo: "",
    firstSubVideo: "",
    lastSubVideo: "",
  });

  const { setVideoUrls } = useUrlStore();

  const navigate = useNavigate();

  function handleClick() {
    setClicked((prevState) => !prevState);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setVideos((prevUrls) => ({
      ...prevUrls,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        API.VIDEOS,
        { videoUrls: videos },
        { withCredentials: true },
      );

      if (response.message === "success" && response.urlList) {
        setVideoUrls(response.urlList);

        // TODO: 시작점 셀렉션 페이지 개발 완료시 navigate(시작점 셀렉션 주소); 실행
        // navigate(시작점 셀렉션 주소);
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
              name="mainVideo"
              type="text"
              className="px-10 mb-10 text-black rounded"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col h-auto w-300">
            <span className="text-white">Sub videos</span>
            <input
              name="firstSubVideo"
              type="text"
              className="px-10 mb-10 text-black rounded"
              onChange={handleChange}
            />
            {clicked && (
              <input
                name="lastSubVideo"
                type="text"
                className="px-10 mb-10 text-black rounded"
                onChange={handleChange}
              />
            )}
          </div>
          <div className="flex items-center justify-center h-auto my-10 cursor-pointer">
            {clicked ? (
              <IoIosCloseCircle size={27} onClick={handleClick} />
            ) : (
              <IoIosAddCircle size={27} onClick={handleClick} />
            )}
          </div>
          <div className="flex items-center justify-center w-full">
            <button
              type="button"
              onSubmit={handleSubmit}
              className="my-5 font-bold text-black bg-white rounded-lg w-80 h-30 hover:bg-[#D305FF] hover:text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default UploadForm;
