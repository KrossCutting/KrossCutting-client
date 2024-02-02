import MediaPlayer from "../MediaPlayer";

function SelectionContainer({ videoUrlList, audioUrlList, currentIndex }) {
  return (
    <main className="box-border flex flex-col bg-[rgba(255,255,255,0)] rounded-lg">
      <h1 className="p-10 font-bold text-center text-white uppercase text-30">
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

export default SelectionContainer;
