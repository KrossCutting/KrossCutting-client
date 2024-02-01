import { create } from "zustand";

const useUrlStore = create((set) => ({
  videoUrls: { mainVideoUrl: "", firstSubVideoUrl: "", lastSubVideoUrl: "" },
  setVideoUrls: (mainVideoUrl, firstSubVideoUrl, lastSubVideoUrl) =>
    set({ videoUrls: { mainVideoUrl, firstSubVideoUrl, lastSubVideoUrl } }),
}));

export default useUrlStore;
