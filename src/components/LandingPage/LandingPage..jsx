import MainContent from "./MainContent";
import VideoBackground from "../shared/VideoBackground";

function LandingPage() {
  return (
    <main className="box-border flex flex-col w-screen h-screen">
      <VideoBackground />
      <div className="flex items-center justify-center w-full h-full">
        <MainContent />
      </div>
    </main>
  );
}

export default LandingPage;
