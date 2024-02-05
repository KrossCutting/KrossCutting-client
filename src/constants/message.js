const QUALITY_MESSAGE = {
  HEADER: "No Quality Found Above 720p",
  BODY: "Some of the URLs you provided don't have qualities above 720p",
  FOOTER: "Do you want to proceed with low quality?",
};

const VERIFICATION_MESSAGE = {
  HEADER: "All Start Points Have Been Selected",
  BODY: "",
  FOOTER: "Do you want to proceed KrossCutting",
};

const PLAYTIME_ALERT = {
  HEADER: "Video Is Too Long",
  BODY: "Some of the video you provided are too long to proceed Kross-cutting",
  FOOTER: "Please ensure other video URLs have a playtime below 5 minutes",
};

const START_POINT_ALERT = {
  HEADER: "Start Point Not Selected",
  BODY: "The start point of the main video has not been selected",
  FOOTER: "Please select start point to proceed Kross-cutting",
};

export {
  QUALITY_MESSAGE,
  VERIFICATION_MESSAGE,
  PLAYTIME_ALERT,
  START_POINT_ALERT,
};
