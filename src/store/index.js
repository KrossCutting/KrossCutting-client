import { create } from "zustand";
import { devtools } from "zustand/middleware";

const awsUrlStore = (set) => ({
  videoUrls: {
    mainVideoUrl: "",
    subOneVideoUrl: "",
    subTwoVideoUrl: "",
  },
  audioUrls: {
    mainAudioUrl: "",
    subOneAudioUrl: "",
    subTwoAudioUrl: "",
  },
  setVideoUrls: (mainVideoUrl, subOneVideoUrl, subTwoVideoUrl) =>
    set({
      videoUrls: {
        mainVideoUrl,
        subOneVideoUrl,
        subTwoVideoUrl,
      },
    }),
  setAudioUrls: (mainAudioUrl, subOneAudioUrl, subTwoAudioUrl) =>
    set({
      audioUrls: {
        mainAudioUrl,
        subOneAudioUrl,
        subTwoAudioUrl,
      },
    }),
});

const youtubeUrlStore = (set) => ({
  youtubeUrls: {
    mainYoutubeUrl: "",
    subOneYoutubeUrl: "",
    subTwoYoutubeUrl: "",
  },
  setYoutubeUrls: ({ mainYoutubeUrl, subOneYoutubeUrl, subTwoYoutubeUrl }) =>
    set({
      youtubeUrls: {
        mainYoutubeUrl,
        subOneYoutubeUrl,
        subTwoYoutubeUrl,
      },
    }),
});

const startPointStore = (set) => ({
  startPoints: {
    mainStartPoint: undefined,
    subOneStartPoint: undefined,
    subTwoStartPoint: undefined,
  },
  setStartPoints: ({ mainStartPoint, subOneStartPoint, subTwoStartPoint }) =>
    set({
      startPoints: {
        mainStartPoint,
        subOneStartPoint,
        subTwoStartPoint,
      },
    }),
});

const useAwsUrlStore = create(devtools(awsUrlStore));
const useStartPointStore = create(devtools(startPointStore));
const useYouTubeUrlStore = create(devtools(youtubeUrlStore));

export { useAwsUrlStore, useStartPointStore, useYouTubeUrlStore };
