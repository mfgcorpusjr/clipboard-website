export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <section className="max-w-6xl mx-auto p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img src="./images/logo.svg" className="w-16" />

          <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-20 lg:pl-8  text-center md:text-left">
            <div className="space-y-4">
              <a href="#" className="anchor">
                FAQS
              </a>
              <a href="#" className="anchor">
                Contact Us
              </a>
            </div>
            <div className="space-y-4">
              <a href="#" className="anchor">
                Privacy Policy
              </a>
              <a href="#" className="anchor">
                Press Kit
              </a>
            </div>
            <div className="space-y-4">
              <a href="#" className="anchor">
                Install Guide
              </a>
            </div>
          </div>

          <div className="flex gap-8">
            <img src="./images/icon-facebook.svg" />
            <img src="./images/icon-twitter.svg" />
            <img src="./images/icon-instagram.svg" />
          </div>
        </div>
      </section>
    </footer>
  );
}
