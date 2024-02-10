import PropTypes from "prop-types";

import Modal from "../shared/Modal";
import { useStartPointStore, useAwsVideoStore } from "../../store";
import {
  AUDIO_ALERT,
  PLAYTIME_ALERT,
  PROCEED_MESSAGE,
} from "../../constants/message";

function Message({ messageType, handleProceedClick, handleSelectionClick }) {
  const { startPoints } = useStartPointStore.getState();
  const { videoUrls } = useAwsVideoStore.getState();
  const { HEADER, BODY, FOOTER } = messageType;

  const isProceedDisabled =
    messageType === AUDIO_ALERT || messageType === PLAYTIME_ALERT;

  const startPointMessageBody = `Main video: +${startPoints.mainStartPoint} sec,
    \nSub video 1: +${startPoints.subOneStartPoint} sec,
    ${
      videoUrls.subTwoVideoUrl
        ? `\nSub video 2: +${startPoints.subTwoStartPoint} sec`
        : ""
    }`;

  if (messageType === PROCEED_MESSAGE) {
    PROCEED_MESSAGE.BODY = startPointMessageBody;
  }

  return (
    <>
      {console.log(isProceedDisabled)}
      <Modal>
        <main className="modal-wrapper">
          <section className="space-y-20 text-white">
            <p className="font-bold text-25">{HEADER}</p>
            <div className="space-y-5">
              <p className="font-thin text-20">{BODY}</p>
              <p className="font-thin text-20">{FOOTER}</p>
            </div>
          </section>
          <section className="flex mt-5 font-bold space-x-30 jw-full">
            <button
              className="button-selection"
              onClick={() => handleSelectionClick(null)}
            >
              Go to Selection
            </button>
            {!isProceedDisabled && (
              <button
                className="button-submission"
                onClick={handleProceedClick}
              >
                Yes, proceed
              </button>
            )}
          </section>
        </main>
      </Modal>
    </>
  );
}

Message.propTypes = {
  messageType: PropTypes.instanceOf(Object).isRequired,
};

export default Message;
