import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Modal({ children }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-99">
      <Link to={-1}>
        <div className="fixed inset-0 bg-black opacity-25"></div>
      </Link>
      <div className="fixed flex justify-center max-w-full overflow-y-auto transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 min-w-400 w-80 md:w-full max-h-90vh">
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Modal;
