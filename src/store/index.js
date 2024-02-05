import { create } from "zustand";
import { devtools } from "zustand/middleware";

const awsUrlStore = (set) => ({
  videoUrls: {
    mainVideoUrl: "",
    firstSubVideoUrl: "",
    lastSubVideoUrl: "",
  },
  audioUrls: {
    mainAudioUrl: "",
    firstSubAudioUrl: "",
    lastSubAudioUrl: "",
  },
  setVideoUrls: (mainVideoUrl, firstSubVideoUrl, lastSubVideoUrl) =>
    set({
      videoUrls: {
        mainVideoUrl,
        firstSubVideoUrl,
        lastSubVideoUrl,
      },
    }),
  setAudioUrls: (mainAudioUrl, firstSubAudioUrl, lastSubAudioUrl) =>
    set({
      audioUrls: {
        mainAudioUrl,
        firstSubAudioUrl,
        lastSubAudioUrl,
      },
    }),
});

const youtubeUrlStore = (set) => ({
  youtubeUrls: { mainVideoUrl: "", firstSubVideoUrl: "", lastSubVideoUrl: "" },
  setYoutubeUrls: ({ mainVideoUrl, firstSubVideoUrl, lastSubVideoUrl }) =>
    set({
      youtubeUrls: {
        mainVideoUrl,
        firstSubVideoUrl,
        lastSubVideoUrl,
      },
    }),
});

const startPointStore = (set) => ({
  startPoints: {
    mainStartPoint: undefined,
    firstSubStartPoint: undefined,
    lastSubStartPoint: undefined,
  },
  setStartPoints: ({ mainStartPoint, firstSubStartPoint, lastSubStartPoint }) =>
    set({
      startPoints: {
        mainStartPoint,
        firstSubStartPoint,
        lastSubStartPoint,
      },
    }),
});

const useAwsUrlStore = create(devtools(awsUrlStore));
const useStartPointStore = create(devtools(startPointStore));
const useYouTubeUrlStore = create(devtools(youtubeUrlStore));

export { useAwsUrlStore, useStartPointStore, useYouTubeUrlStore };
