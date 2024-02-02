import MediaPlayer from "../MediaPlayer";
import StartPointSelectButton from "../StartPointSelectButton";
import StartPointSubmitButton from "../StartPointSubmitButton";

function SelectionContainer({
  selectedVideoUrl,
  selectedAudioUrl,
  isMainMedia,
}) {
  return (
    <main className="box-border flex flex-col bg-[rgba(255,255,255,0)] rounded-lg">
      <h1 className="p-10 font-bold text-center text-white uppercase text-30">
        {isMainMedia ? "main video" : "sub video"}
      </h1>
      <MediaPlayer videoSrc={selectedVideoUrl} audioSrc={selectedAudioUrl} />
      <div className="flex flex-row justify-center gap-15">
        <StartPointSelectButton />
        <StartPointSubmitButton />
      </div>
    </main>
  );
}

export default SelectionContainer;
