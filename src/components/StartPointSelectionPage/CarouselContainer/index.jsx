import { useState } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

import { Outlet } from "react-router-dom";
import { useAwsVideoStore, useAwsAudioStore } from "../../../store";
import SelectionContainer from "../SelectionContainer";

function CarouselContainer() {
  const { videoUrls } = useAwsVideoStore((state) => state);
  const { audioUrls } = useAwsAudioStore((state) => state);
  const [currentIndex, setCurrentIndex] = useState(0);

  const videoUrlList = Object.values(videoUrls).filter((url) => Boolean(url));
  const audioUrlList = Object.values(audioUrls).filter((url) => Boolean(url));

  const CAROUSEL_ICON_SIZE = 40;

  function handleLeftClick() {
    setCurrentIndex((prev) => prev - 1);
  }

  function handleRightClick() {
    setCurrentIndex((prev) => prev + 1);
  }

  return (
    <main className="box-border flex flex-col items-center justify-center w-screen h-screen bg-black">
      <section className="flex items-center justify-center space-x-30">
        <FaCircleChevronLeft
          size={CAROUSEL_ICON_SIZE}
          className={`fill-white ${currentIndex === 0 ? "invisible" : null} cursor-pointer`}
          onClick={handleLeftClick}
          data-testid="left"
        />
        <SelectionContainer
          videoUrlList={videoUrlList}
          audioUrlList={audioUrlList}
          currentIndex={currentIndex}
        />
        <FaCircleChevronRight
          size={CAROUSEL_ICON_SIZE}
          className={`fill-white ${currentIndex === videoUrlList.length - 1 ? "invisible" : null} cursor-pointer`}
          onClick={handleRightClick}
          data-testid="right"
        />
      </section>
      <Outlet />
    </main>
  );
}

export default CarouselContainer;
