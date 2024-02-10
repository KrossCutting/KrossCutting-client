import PropTypes from "prop-types";

function StartPointSelectButton({ handleStartPoint, isStartPointSelected }) {
  return (
    <button
      type="button"
      className={
        isStartPointSelected ? "button-reselection" : "button-selection"
      }
      onClick={handleStartPoint}
    >
      {isStartPointSelected ? "re-select" : "select start"}
    </button>
  );
}

StartPointSelectButton.propTypes = {
  handleStartPoint: PropTypes.func.isRequired,
  isStartPointSelected: PropTypes.bool,
};

StartPointSelectButton.defaultProps = {
  isStartPointSelected: false,
};

export default StartPointSelectButton;
