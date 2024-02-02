import { create } from "zustand";
import { devtools } from "zustand/middleware";

const urlStore = (set) => ({
  videoUrls: { mainVideoUrl: "", firstSubVideoUrl: "", lastSubVideoUrl: "" },
  audioUrls: { mainAudioUrl: "", firstSubAudioUrl: "", lastSubAudioUrl: "" },
  startPoints: {
    mainStartPoint: undefined,
    firstSubStartPoint: undefined,
    lastSubStartPoint: undefined,
  },
  setVideoUrls: (mainVideoUrl, firstSubVideoUrl, lastSubVideoUrl) =>
    set({ videoUrls: { mainVideoUrl, firstSubVideoUrl, lastSubVideoUrl } }),
  setAudioUrls: (mainAudioUrl, firstSubAudioUrl, lastSubAudioUrl) =>
    set({ audioUrls: { mainAudioUrl, firstSubAudioUrl, lastSubAudioUrl } }),
  setStartPoints: ({ mainStartPoint, firstSubStartPoint, lastSubStartPoint }) =>
    set({
      startPoints: {
        mainStartPoint,
        firstSubStartPoint,
        lastSubStartPoint,
      },
    }),
});

const useUrlStore = create(devtools(urlStore));

export default useUrlStore;
