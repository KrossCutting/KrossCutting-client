import { useState, useEffect } from "react";

import IntroBox from "../IntroBox";
import UploadForm from "../UploadForm";
import SampleVideo from "../SampleVIdeo";
import Loading from "../../shared/Loading";
import WhiteLogo from "../../shared/WhiteLogo";
import VideoBackground from "../../shared/VideoBackground";

function MainPage() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // To Do 추후 서버 다운로드 구현 로직 완성시 데이터 송신 시 Loading 컴포넌트 언마운트
  }, [isLoading]);

  return (
    <>
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
      {isLoading && <Loading />}
    </>
  );
}

export default MainPage;
