import Media from "../Media";

function SelectionPage({ selectedVideoUrl, selectedAudioUrl, isMain }) {
  return (
    <main className="box-border flex flex-col bg-[rgba(255,255,255,0)] rounded-lg">
      <h1 className="p-10 font-bold text-center text-white uppercase text-30">
        {isMain ? "main video" : "sub video"}
      </h1>
      <Media videoSrc={selectedVideoUrl} audioSrc={selectedAudioUrl} />
      {/* <StartPointSelectButton /> */}
      {/* <StartPointSubmitButton /> */}
    </main>
  );
}

export default SelectionPage;
