import { create } from "zustand";
import { devtools } from "zustand/middleware";

const awsVideoStore = (set) => ({
  videoUrls: {
    mainVideoUrl: "",
    subOneVideoUrl: "",
    subTwoVideoUrl: "",
  },
  setVideoUrls: (mainVideoUrl, subOneVideoUrl, subTwoVideoUrl) =>
    set({
      videoUrls: {
        mainVideoUrl,
        subOneVideoUrl,
        subTwoVideoUrl,
      },
    }),
  clearVideoUrls: () =>
    set({
      videoUrls: {
        mainVideoUrl: "",
        subOneVideoUrl: "",
        subTwoVideoUrl: "",
      },
    }),
});

const awsAudioStore = (set) => ({
  audioUrls: {
    mainAudioUrl: "",
    subOneAudioUrl: "",
    subTwoAudioUrl: "",
  },
  setAudioUrls: (mainAudioUrl, subOneAudioUrl, subTwoAudioUrl) =>
    set({
      audioUrls: {
        mainAudioUrl,
        subOneAudioUrl,
        subTwoAudioUrl,
      },
    }),
  clearAudioUrls: () => {
    set({
      audioUrls: {
        mainAudioUrl: "",
        subOneAudioUrl: "",
        subTwoAudioUrl: "",
      },
    });
  },
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
  clearYoutubeUrls: () => {
    set({
      youtubeUrls: {
        mainYoutubeUrl: "",
        subOneYoutubeUrl: "",
        subTwoYoutubeUrl: "",
      },
    });
  },
});

const startPointStore = (set) => ({
  startPoints: {
    mainStartPoint: null,
    subOneStartPoint: null,
    subTwoStartPoint: null,
  },
  setStartPoints: ({ mainStartPoint, subOneStartPoint, subTwoStartPoint }) =>
    set({
      startPoints: {
        mainStartPoint,
        subOneStartPoint,
        subTwoStartPoint,
      },
    }),
  clearStartPointStore: () => {
    set({
      startPoints: {
        mainStartPoint: null,
        subOneStartPoint: null,
        subTwoStartPoint: null,
      },
    });
  },
});

const finalVideoUrlStore = (set) => ({
  finalVideoUrl: "",
  setFinalVideoUrl: (finalVideoUrl) => set({ finalVideoUrl }),
  clearFinalVideoUrl: () =>
    set({
      finalVideoUrl: "",
    }),
});

const useAwsVideoStore = create(devtools(awsVideoStore));
const useAwsAudioStore = create(devtools(awsAudioStore));
const useStartPointStore = create(devtools(startPointStore));
const useYouTubeUrlStore = create(devtools(youtubeUrlStore));
const useFinalVideoUrlStore = create(devtools(finalVideoUrlStore));

export {
  useAwsVideoStore,
  useAwsAudioStore,
  useStartPointStore,
  useYouTubeUrlStore,
  useFinalVideoUrlStore,
};
