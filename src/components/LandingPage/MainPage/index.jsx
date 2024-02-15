import IntroBox from "../IntroBox";
import FormBox from "../FormBox";
import SampleVideo from "../SampleVIdeo";
import WhiteLogo from "../../shared/WhiteLogo";
import VideoBackground from "../../shared/VideoBackground";

function MainPage() {
  return (
    <div className="flex flex-col w-screen h-screen md:min-h-screen py-30">
      <VideoBackground />
      <div className="flex flex-col items-center justify-start flex-1 overflow-x-hidden scrollbar-hide">
        <main className="flex flex-col justify-center w-full px-4 text-white">
          <div className="flex items-center justify-start mt-4 md:mt-0">
            <WhiteLogo />
          </div>
          <section className="flex flex-col items-center justify-center py-2.5 my-20">
            <IntroBox />
          </section>
          <section className="flex flex-col items-center justify-center w-full space-y-30 md:flex-row md:space-y-0 md:space-x-20">
            <FormBox />
            <SampleVideo />
          </section>
        </main>
      </div>
    </div>
  );
}

export default MainPage;
