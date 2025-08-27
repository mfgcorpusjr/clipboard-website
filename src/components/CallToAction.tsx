export default function CallToAction() {
  return (
    <section className="section my-20">
      <h1 className="mb-8">Clipboard for iOS and MacOS</h1>

      <h3 className="max-w-3xl mx-auto mb-8 leading-10">
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you're ready to start adding to your clipboard.
      </h3>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        <button className="btn btn-primary">Download for iOS</button>
        <button className="btn btn-secondary">Download for Mac</button>
      </div>
    </section>
  );
}
