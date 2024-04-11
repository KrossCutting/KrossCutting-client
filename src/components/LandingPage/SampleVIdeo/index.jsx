function SampleVideo() {
  return (
    <section className="flex items-center justify-center">
      <div className="min-w-400 max-w-400 max-h-225 min-h-225 w-[48vw] h-[27vw] ml-7">
        <video
          className="relative w-full h-full rounded -z-1"
          autoPlay
          muted
          loop
        >
          <source src="/videos/IVE_sample.mp4" />
        </video>
      </div>
    </section>
  );
}

export default SampleVideo;
