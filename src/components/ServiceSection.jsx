import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    tag: "Neurology Consultation",
    title: "Expert Brain & Nerve Evaluation",
    image:
      "https://img.freepik.com/free-photo/doctor-doing-girl-s-brain-scan-procedure-scientific-lab-brain-waves-scanning-helmet_482257-31628.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    tag: "Stroke Care",
    title: "Advanced Stroke Treatment",
    image:
      "https://img.freepik.com/premium-photo/doctor-consoling-senior-man_107420-67719.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    tag: "Neurosurgery",
    title: "Brain & Spine Surgery",
    image:
      "https://img.freepik.com/premium-photo/advanced-medical-imaging-surgeon-with-holographic-brain-model-hightech-operating-room_49047-3908.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    tag: "Epilepsy Center",
    title: "Seizure Diagnosis & Management",
    image:
      "https://img.freepik.com/premium-photo/rear-view-young-woman-using-digital-tablet-while-sitting-table_1048944-2563233.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    tag: "Neuro Diagnostics",
    title: "MRI, EEG & Nerve Tests",
    image:
      "https://img.freepik.com/free-photo/senior-woman-hospital-office-looking-brain-ct-scan-while-discussing-with-doctor-about-diagnosis-sick-young-woman-elderly-medic-with-grey-hair-clinic-corridor_482257-9563.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    tag: "Rehabilitation",
    title: "Neuro Recovery & Physiotherapy",
    image:
      "https://img.freepik.com/free-photo/back-view-man-patient-wearing-performant-brainwave-scanning-headset-sitting-neurological-research-laboratory-while-medical-researcher-adjusting-it-examining-nervous-system-typing-tablet_482257-13184.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
];

export default function ServiceSection() {
  const [current, setCurrent] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  /* -------- RESPONSIVE CARD COUNT -------- */
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  /* -------- AUTO SLIDE -------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev + 1 > services.length - visibleCards ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [visibleCards]);

  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= HEADER ================= */}
        <div className="grid lg:grid-cols-2 gap-8 mb-14">
          <div>
            <p className="text-sm tracking-widest text-blue-600 font-semibold mb-4">
              NEUROLOGY SERVICES
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Comprehensive Brain & Nerve <br />
              <span className="text-blue-700">Care Solutions</span>
            </h2>
          </div>

          <p className="text-gray-500 max-w-lg lg:ml-auto text-base md:text-lg">
            We offer advanced neurological diagnosis, treatment, and rehabilitation
            using state-of-the-art technology and experienced specialists.
          </p>
        </div>

        {/* ================= SLIDER ================= */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(current * 100) / visibleCards}%)`,
            }}
          >
            {services.map((item, index) => (
              <div
                key={index}
                className="px-3 flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
              >
                <div className="bg-slate-50 rounded-2xl p-5 md:p-6 h-full hover:shadow-xl transition-all duration-300">

                  {/* Image */}
                  <div className="rounded-xl overflow-hidden mb-5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 sm:h-52 lg:h-56 object-cover hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* Content */}
                  <p className="text-sm text-gray-500 mb-2">{item.tag}</p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-6">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between border-t pt-4">
                    <span className="text-sm font-medium text-gray-700">
                      Learn More
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-slate-900" />
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DOTS ================= */}
        <div className="flex justify-center mt-10 gap-3">
          {Array.from({
            length: services.length - visibleCards + 1,
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 rounded-full ${
                current === index
                  ? "w-3.5 h-3.5 bg-blue-700"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
