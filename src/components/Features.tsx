export default function Features() {
  return (
    <section className="section my-20 relative">
      <div className="flex flex-col md:flex-row gap-20">
        <div className="md:w-1/2">
          <img
            src="./images/image-computer.png"
            className="md:absolute md:right-[50%] md:top-0"
          />
        </div>

        <div className="flex flex-col gap-8 md:w-1/2">
          <div>
            <h5 className="md:text-left mb-4">Quick Search</h5>
            <h4 className="max-w-2xl mx-auto md:text-left">
              Easily search your snippets by content, category, web address,
              application, and more.
            </h4>
          </div>

          <div>
            <h5 className="md:text-left mb-4">iCloud Sync</h5>
            <h4 className="max-w-2xl mx-auto md:text-left">
              Instantly saves and syncs snippets across all your devices.
            </h4>
          </div>

          <div>
            <h5 className="md:text-left mb-4">Completely History</h5>
            <h4 className="max-w-2xl mx-auto md:text-left">
              Retrieve any snippets from the first moment you started using the
              app.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
