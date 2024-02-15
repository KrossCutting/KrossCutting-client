const PLAYTIME_ALERT = {
  HEADER: "Video Is Too Long",
  BODY: "Some of the video you provided are too long to proceed Kross-cutting",
  FOOTER: "Please ensure other video URLs have a playtime below 5 minutes",
};

const AUDIO_ALERT = {
  HEADER: "Start points do not match",
  BODY: "Start points of the selected videos do not match",
  FOOTER: "Please set the start point of all videos to be the same",
};

const INVALID_URL_ALERT = {
  HEADER: "No video found for the submitted URL",
  BODY: "Some of the submitted URL does not contain a video",
  FOOTER: "Please verify that all URLs are correct and submit valid ones",
};

const QUALITY_MESSAGE = {
  HEADER: "Unable to load 1080hd quality",
  BODY: "Some of the submitted URLs cannot load videos in 1080hd quality",
  // TODO: 서버작업의 에러핸들링 완료시 어떤 영상의 화질이 1080hd로 받을 수 없는지 알려줄 수 있도록 합니다.
  FOOTER: "Would you like to proceed with 720hd for those videos?",
};

const PROCEED_MESSAGE = {
  HEADER: "All Start Points Have Been Selected",
  BODY: "",
  FOOTER: "Do you want to proceed KrossCutting?",
};

const PROGRESS_MESSAGE = {
  AUDIO_EXTRACTING: "Extracting audio files...",
  FRAME_EXPORTING: "Exporting frames to analyze...",
  MOVEMENT_DETECTION: "Motion detection in progress, please wait a moment...",
  EDITING: "Editing video, please wait...",
  EXPORTING: "Exporting video, please wait...",
};

export {
  PLAYTIME_ALERT,
  AUDIO_ALERT,
  INVALID_URL_ALERT,
  QUALITY_MESSAGE,
  PROCEED_MESSAGE,
  PROGRESS_MESSAGE,
};
