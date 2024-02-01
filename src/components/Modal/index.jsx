import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Modal({ children }) {
  return (
    <div>
      <Link to="..">
        <div className="top-0 left-0 w-screen h-screen"></div>
      </Link>
      <div className="max-w-full overflow-y-auto transform -translate-x-1/2 -translate-y-1/2 rounded-lg ixed top-1/2 left-1/2 w-80 md:w-full max-h-90vh">
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Modal;
