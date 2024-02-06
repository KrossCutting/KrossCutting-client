function SampleVideo() {
  return (
    <section className="flex items-center justify-center">
      <div className="w-480 h-270 ml-7">
        <video className="relative rounded-md -z-1" autoPlay muted loop>
          <source src="/videos/IVE_sample.mp4" />
        </video>
      </div>
    </section>
  );
}

export default SampleVideo;
