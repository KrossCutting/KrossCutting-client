function VideoBackground() {
  return (
    <video
      data-testid="video-background"
      autoPlay
      muted
      loop
      preload="metadata"
      poster="/assets/background_thumbnail.png"
      className="absolute object-cover w-full h-auto min-h-screen z-[-1] top-0 left-0"
      style={{ filter: "brightness(20%)", objectFit: "cover" }}
    >
      <source src="/videos/background.webm" type="video/webm" />
    </video>
  );
}

export default VideoBackground;
