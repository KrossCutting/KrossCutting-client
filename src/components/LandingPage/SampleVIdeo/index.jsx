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
      <div className="px-8 py-4 mt-10 text-gray-600 bg-white rounded text-10">
        This video is edited by&nbsp;
        <b>KrossCutting</b>
      </div>
    </section>
  );
}

export default SampleVideo;
