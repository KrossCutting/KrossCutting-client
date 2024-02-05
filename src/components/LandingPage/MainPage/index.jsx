import IntroBox from "../IntroBox";
import UploadForm from "../UploadForm";
import SampleVideo from "../SampleVIdeo";
import WhiteLogo from "../../shared/WhiteLogo";
import VideoBackground from "../../shared/VideoBackground";

function MainPage() {
  return (
    <div className="box-border flex flex-col w-screen h-screen">
      <VideoBackground />
      <div className="flex items-center justify-center w-full h-full">
        <main className="flex flex-col w-full h-full text-white">
          <div className="flex items-center justify-start">
            <WhiteLogo />
          </div>
          <section className="w-full flex flex-col justify-center items-center py-2.5 my-20">
            <IntroBox />
          </section>
          <section className="flex items-center justify-center w-full space-x-30">
            <UploadForm />
            <SampleVideo />
          </section>
        </main>
      </div>
    </div>
  );
}

export default MainPage;
