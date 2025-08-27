export default function Hero() {
  return (
    <section className="section mt-20 mb-32">
      <img src="./images/logo.svg" className="mx-auto mb-12" />

      <h1 className="mb-8">A history of everything you copy</h1>

      <h3 className="max-w-3xl mx-auto mb-8 leading-10">
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </h3>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        <button className="btn btn-primary">Download for iOS</button>
        <button className="btn btn-secondary">Download for Mac</button>
      </div>
    </section>
  );
}
