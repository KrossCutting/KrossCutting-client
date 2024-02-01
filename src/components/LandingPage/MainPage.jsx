import WhiteLogo from "../shared/WhiteLogo";
import UploadForm from "./UploadFrom";
import SampleVideo from "./SampleVideo";
import IntroBox from "./IntroBox";

function MainPage() {
  return (
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
  );
}

export default MainPage;
