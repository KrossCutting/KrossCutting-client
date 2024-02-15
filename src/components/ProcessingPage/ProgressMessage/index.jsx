import PropTypes from "prop-types";

function ProgressMessage({ messageContent }) {
  return (
    <div className="flex items-center justify-center px-20 min-w-200">
      <p className="font-thin text-center text-white whitespace-normal sm:text-20 md:text-25 lg:text-30">
        {messageContent}
      </p>
    </div>
  );
}

ProgressMessage.propTypes = {
  messageContent: PropTypes.string.isRequired,
};

export default ProgressMessage;
