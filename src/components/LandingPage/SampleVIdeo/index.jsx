function SampleVideo() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="min-w-400 max-w-400 max-h-225 min-h-225 w-[48vw] h-[27vw] ml-7">
        <video
          className="relative w-full h-full rounded -z-1"
          aria-label="sample video"
          autoPlay
          muted
          loop
        >
          <source src="/videos/IVE_sample.mp4" />
        </video>
      </div>
      <div className="mt-10 py-4 px-8 bg-[rgba(255,255,255,0.1)] rounded-lg text-10">
        This video is edited using KrossCutting
      </div>
    </section>
  );
}

export default SampleVideo;
