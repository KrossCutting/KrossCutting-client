function Loading() {
  return (
    <section className="fixed inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <img
        src="/assets/loading-spinner.svg"
        alt="Loading"
        width="200"
        className="fixed transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
      />
    </section>
  );
}

export default Loading;
