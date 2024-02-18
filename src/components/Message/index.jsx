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

  const startPointMessageBody = (
    <div className="space-y-5">
      <p className="font-thin text-15">
        Main video: +{startPoints.mainStartPoint} sec
        <br />
        Sub video 1: +{startPoints.subOneStartPoint} sec
        {videoUrls.subTwoVideoUrl && (
          <>
            <br />
            Sub video 2: +{startPoints.subTwoStartPoint} sec
          </>
        )}
      </p>
    </div>
  );

  if (messageType === PROCEED_MESSAGE) {
    PROCEED_MESSAGE.BODY = startPointMessageBody;
  }

  return (
    <Modal>
      <main className="overflow-hidden modal-wrapper m-w-500">
        <section className="space-y-20 text-white">
          <div className="text-lg font-bold md:text-25">{HEADER}</div>
          <div className="space-y-5">
            <span className="text-base font-thin md:text-20">{BODY}</span>
            <span className="text-base font-thin md:text-20">{FOOTER}</span>
          </div>
        </section>
        <section className="flex mt-5 space-x-20 font-bold">
          <button
            className="button-selection"
            onClick={() => handleSelectionClick(null)}
          >
            Go to Selection
          </button>
          {!isProceedDisabled && (
            <button className="button-submission" onClick={handleProceedClick}>
              Yes, proceed
            </button>
          )}
        </section>
      </main>
    </Modal>
  );
}

Message.propTypes = {
  messageType: PropTypes.instanceOf(Object).isRequired,
  handleProceedClick: PropTypes.func.isRequired,
  handleSelectionClick: PropTypes.func.isRequired,
};

export default Message;
