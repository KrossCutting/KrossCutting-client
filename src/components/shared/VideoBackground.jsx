function VideoBackground() {
  return (
    <video
      autoPlay
      muted
      loop
      className="absolute object-cover w-full h-full z-[-1] top-0 left-0"
      style={{ filter: "brightness(20%)" }}
    >
      <source src="/videos/background.mp4" type="video/mp4" />
    </video>
  );
}

export default VideoBackground;
