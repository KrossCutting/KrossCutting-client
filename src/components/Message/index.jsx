import { useState } from "react";

import axios from "axios";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import API from "../../../config";
import Modal from "../shared/Modal";
import Loading from "../shared/Loading";
import { VERIFICATION_MESSAGE } from "../../constants/message";
import {
  useAwsVideoStore,
  useAwsAudioStore,
  useStartPointStore,
  useYouTubeUrlStore,
} from "../../store";

function Message({ messageType }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { startPoints } = useStartPointStore();
  const { youtubeUrls } = useYouTubeUrlStore();
  const { setVideoUrls } = useAwsVideoStore();
  const { setAudioUrls } = useAwsAudioStore();

  async function handleProcessClick() {
    if (messageType === VERIFICATION_MESSAGE) {
      const response = await axios.post(API.COMPILATIONS, { startPoints });
      // To Do resopnse 받으면 영상 다운 받을 수 있게 처리
      return;
    }

    setIsLoading(true);

    const response = await axios.post(API.CONTENTS, {
      videoUrls: youtubeUrls,
      isPermitted: true,
    });

    const { result } = response.data;

    if (result === "success") {
      const { mainVideoUrl, subOneVideoUrl, subTwoVideoUrl } =
        response.data.videoUrlList;
      const { mainAudioUrl, subOneAudioUrl, subTwoAudioUrl } =
        response.data.audioUrlList;

      setVideoUrls(mainVideoUrl, subOneVideoUrl, subTwoVideoUrl);
      setAudioUrls(mainAudioUrl, subOneAudioUrl, subTwoAudioUrl);
      setIsLoading(false);
      navigate("/selection");
    }
  }

  return (
    <>
      <Modal>
        <section className="z-50 flex flex-col items-center py-20 text-xl text-center px-25 gap-15 rounded-3xl bg-pink">
          <p className="text-2xl font-bold">{messageType.HEADER}</p>
          <p>{messageType.BODY}</p>
          <p>{messageType.FOOTER}</p>
          <div className="flex justify-around w-full mt-5 text-base">
            <button
              className="px-10 py-5 rounded-3xl bg-purple"
              onClick={() => navigate(-1)}
            >
              Go to Selection
            </button>
            <button
              className="px-10 py-5 rounded-3xl bg-mint"
              onClick={handleProcessClick}
            >
              Yes, proceed
            </button>
          </div>
        </section>
      </Modal>
      {isLoading && <Loading />}
    </>
  );
}

Message.propTypes = {
  messageType: PropTypes.instanceOf(Object).isRequired,
};

export default Message;
