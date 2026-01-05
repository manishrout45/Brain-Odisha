import React, { useEffect } from "react";

const ScrollPromo = () => {
  useEffect(() => {
    const section = document.getElementById("scrollSection");
    const textBox = document.getElementById("scrollText");

    const handleScroll = () => {
      if (!section || !textBox) return;

      let rect = section.getBoundingClientRect();
      let sectionHeight = rect.height;

      if (rect.top <= 0 && Math.abs(rect.top) <= sectionHeight) {
        let progress = Math.abs(rect.top) / sectionHeight;
        textBox.style.transform = `translateY(-${progress * 50}%)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="scrollSection" className="relative h-[80vh] overflow-hidden">

      {/* Fixed Background */}
      <div
        className="fixed inset-0 bg-center bg-cover -z-10"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/doctors-gloved-hands-holding-model-human-brain_1020514-51511.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div id="scrollText" className="space-y-4 sm:space-y-6 text-center">

          <h2 className="text-white text-3xl sm:text-5xl font-extrabold leading-snug sm:leading-tight">
            Early Brain Diagnosis <br /> Protects Your Future
          </h2>

          <p className="text-white text-sm sm:text-lg font-medium tracking-wide max-w-2xl mx-auto">
            Expert neurology care for brain, spine, and nerve disorders using
            advanced diagnostics and evidence-based treatment.
          </p>

          {/* Helpline */}
          <p className="text-yellow-400 text-lg sm:text-xl font-bold tracking-widest">
            24/7 Neurology Helpline: <br className="sm:hidden" />
            <span className="text-white">+91 98765 43210</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              className="bg-white text-gray-900 font-semibold 
                         px-5 sm:px-7 py-2.5 sm:py-3 
                         shadow hover:bg-gray-200 transition rounded-lg"
            >
              BOOK NEURO CONSULTATION
            </button>

            <a
              href="tel:+919876543210"
              className="border border-white text-white font-semibold 
                         px-5 sm:px-7 py-2.5 sm:py-3 
                         hover:bg-white hover:text-gray-900 transition rounded-lg"
            >
              CALL NEURO HELPLINE
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ScrollPromo;
