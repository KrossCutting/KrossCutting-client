import { useNavigate } from "react-router-dom";

function StartPointSubmitButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="text-white bg-purple rounded-lg text-sm px-5 py-2.5 mb-2"
      onClick={() => navigate("/selection/verification")}
    >
      next step
    </button>
  );
}

export default StartPointSubmitButton;
