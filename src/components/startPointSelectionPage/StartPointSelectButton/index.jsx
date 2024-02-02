function StartPointSelectButton({ handleStartPoint }) {
  return (
    <button
      type="button"
      className="text-white bg-pink rounded-lg text-sm px-5 py-2.5 mb-2"
      onClick={handleStartPoint}
    >
      select start
    </button>
  );
}

export default StartPointSelectButton;
