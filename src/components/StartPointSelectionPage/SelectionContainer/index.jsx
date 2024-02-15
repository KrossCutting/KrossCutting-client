import PropTypes from "prop-types";
import MediaPlayer from "../MediaPlayer";

function SelectionContainer({ videoUrlList, audioUrlList, currentIndex }) {
  return (
    <main className="box-border flex flex-col bg-[rgba(255,255,255,0)] rounded-lg">
      <h1 className="px-10 py-5 font-bold text-center text-white uppercase sm:px-5 sm:py-3 md:py-5 md:px-10 text-30">
        {currentIndex === 0 ? "main video" : "sub video"}
      </h1>
      <MediaPlayer
        videoUrlList={videoUrlList}
        audioUrlList={audioUrlList}
        currentIndex={currentIndex}
      />
    </main>
  );
}

SelectionContainer.propTypes = {
  videoUrlList: PropTypes.arrayOf(PropTypes.string).isRequired,
  audioUrlList: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export default SelectionContainer;
