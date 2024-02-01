import PropTypes from "prop-types";

import {
  ALERT_MESSAGE,
  MAIN_MESSAGE,
  CHECK_MESSAGE,
} from "../../constants/message";

function Message({ messageType }) {
  const MESSAGES = ["QUALITY", "PLAYTIME", "START_POINT"];
  const selectedMessage = MESSAGES.filter((value) => value === messageType);

  return (
    <section className="flex flex-col items-center py-20 text-xl text-center gap-15 px-25 rounded-3xl w-480 h-270 bg-pink">
      <span className="text-2xl font-bold">
        {ALERT_MESSAGE[selectedMessage]}
      </span>
      <span>{MAIN_MESSAGE[selectedMessage]}</span>
      <span>{CHECK_MESSAGE[selectedMessage]}</span>
      <div className="flex justify-around w-full mt-5 text-base">
        <button className="px-10 py-5 rounded-3xl bg-purple">
          Go to Selection
        </button>
        <button className="px-10 py-5 rounded-3xl bg-mint">Yes, proceed</button>
      </div>
    </section>
  );
}

Message.propTypes = {
  messageType: PropTypes.string.isRequired,
};

export default Message;
