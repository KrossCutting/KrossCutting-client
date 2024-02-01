import VideoForm from "../VideoForm";

function SelectionPage() {
  return (
    <main className="box-border flex flex-col bg-white rounded-lg">
      <h1 className="text-center uppercase text-25">main page</h1>
      <VideoForm videoSrc="/videos/IVE_sample.mp4" />
      {/* <StartPointSelectButton /> */}
      {/* <StartPointSubmitButton /> */}
    </main>
  );
}

export default SelectionPage;
