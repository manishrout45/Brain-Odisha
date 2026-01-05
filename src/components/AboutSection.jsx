import React from "react";
import { Check } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative w-full bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-[520px_1fr] gap-20 items-center">

          {/* ================= LEFT IMAGE AREA ================= */}
          <div className="relative">

            {/* MAIN IMAGE */}
            <div className="relative w-full h-[520px] rounded-2xl overflow-hidden">
              <img
                src="https://img.freepik.com/premium-photo/medical-team-reviewing-x-ray-laptop-collaborative-consultation_1134-127471.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80"
                alt="Neurology Specialists"
                className="w-full h-full object-cover"
              />
            </div>

            {/* EXPERIENCE CIRCLE */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20">
              <div className="w-40 h-40 rounded-full bg-[#142f7a] text-white flex flex-col items-center justify-center shadow-2xl border-[10px] border-white">
                <p className="text-4xl font-extrabold">30+</p>
                <p className="text-sm tracking-wide">Years in Neurology Care</p>
              </div>
            </div>

            {/* BOTTOM IMAGE */}
            <div className="absolute bottom-0 right-0 w-[360px] h-[220px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67"
                alt="Neurological Diagnosis"
                className="w-full h-full object-cover"
              />
            </div>

            {/* DOTTED CIRCLES */}
            <div className="absolute -bottom-20 -left-16 hidden lg:block">
              <div className="w-44 h-44 border-2 border-dashed border-blue-200 rounded-full"></div>
            </div>

            {/* VERTICAL TEXT */}
            <div className="absolute top-1/2 -right-20 hidden xl:flex flex-col items-center gap-3 text-blue-700">
              <span className="-rotate-90 tracking-widest font-medium">
                About Neurology
              </span>
              <span className="w-10 h-10 rounded-full border ml-8 border-blue-300 flex items-center justify-center"></span>
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="space-y-8 text-center lg:text-left">

            <span className="uppercase tracking-widest text-sm text-blue-700 font-semibold">
              What Is Neurology
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Understanding the Brain, <br />
              <span className="text-blue-700">Nerves & Nervous System.</span>
            </h2>

            <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Neurology is a specialized branch of medicine focused on the
              diagnosis, treatment, and prevention of disorders affecting the
              brain, spinal cord, nerves, and muscles. It plays a crucial role
              in maintaining cognitive function, movement, sensation, and
              overall neurological health.
            </p>

            {/* CHECK LIST */}
            <div className="space-y-5 pt-2">
              {[
                "Diagnosis and treatment of brain and nerve disorders",
                "Management of stroke, epilepsy, Parkinson’s & Alzheimer’s",
                "Advanced neurological testing and long-term care planning",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 justify-center lg:justify-start"
                >
                  <span className="w-8 h-8 rounded-full border-2 border-blue-700 flex items-center justify-center">
                    <Check className="w-5 h-5 text-blue-700" />
                  </span>
                  <p className="text-gray-900 font-semibold">{item}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-8 flex justify-center lg:justify-start">
              <button className="px-12 py-4 rounded-full bg-[#142f7a] text-white font-semibold hover:bg-[#0f245e] transition">
                Learn More About Neurological Care
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
