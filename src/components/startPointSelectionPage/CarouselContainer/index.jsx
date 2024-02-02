import { useState } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

import useUrlStore from "../../../store";
import SelectionContainer from "../SelectionContainer";

function CarouselContainer() {
  const { videoUrls, audioUrls } = useUrlStore((state) => state);
  const [currentIndex, setCurrentIndex] = useState(0);

  const videoUrlList = Object.values(videoUrls);
  const audioUrlList = Object.values(audioUrls);

  const CAROUSEL_ICON_SIZE = 40;

  const handleLeftClick = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleRightClick = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="box-border flex flex-col w-screen h-screen bg-[rgba(0,0,0)]">
      <main className="flex flex-col items-center justify-center w-full h-full">
        <section className="flex items-center space-x-30">
          <FaCircleChevronLeft
            size={CAROUSEL_ICON_SIZE}
            className={`fill-white ${currentIndex === 0 ? "invisible" : null} cursor-pointer`}
            onClick={handleLeftClick}
          />
          <SelectionContainer
            videoUrlList={videoUrlList}
            audioUrlList={audioUrlList}
            currentIndex={currentIndex}
          />
          <FaCircleChevronRight
            size={CAROUSEL_ICON_SIZE}
            className={`fill-white ${currentIndex === 2 ? "invisible" : null} cursor-pointer`}
            onClick={handleRightClick}
          />
        </section>
      </main>
    </div>
  );
}

export default CarouselContainer;
