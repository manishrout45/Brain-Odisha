import React, { useEffect, useState } from "react";
import { Star, Calendar, Clock, ChevronDown, Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    role: "NEUROLOGY PATIENT",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The neurology team gave me confidence and clarity. Their diagnosis and treatment completely changed my life.",
  },
  {
    name: "Emily Johnson",
    role: "STROKE RECOVERY PATIENT",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "From emergency care to rehabilitation, everything was handled with precision and compassion.",
  },
  {
    name: "Michael Brown",
    role: "BRAIN HEALTH CHECK",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    text: "Advanced technology, expert doctors, and excellent facilities. Highly recommended.",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#eef2ff] via-white to-[#e0e7ff]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          {/* ================= LEFT : TESTIMONIAL ================= */}
          <div className="relative bg-gradient-to-br from-[#132573] to-[#0f1f5e] 
                          text-white rounded-3xl p-10 md:p-14 shadow-2xl 
                          flex flex-col justify-between">

            <Quote className="absolute top-8 right-8 w-16 h-16 text-white/10" />

            <div>
              <span className="text-xs tracking-widest text-white/70 font-semibold">
                PATIENT STORIES
              </span>

              <h3 className="text-3xl font-extrabold mt-3 mb-6 leading-snug">
                Trusted by Thousands <br /> of Neurology Patients
              </h3>

              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p
                key={index}
                className="text-white/90 leading-relaxed text-lg transition-all duration-700 animate-fade"
              >
                {current.text}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mt-10">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-14 h-14 rounded-full border-2 border-white/30"
                />
                <div>
                  <h4 className="font-semibold">{current.name}</h4>
                  <p className="text-sm text-white/70">{current.role}</p>
                </div>
              </div>

              <div className="flex gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      i === index ? "w-6 bg-white" : "w-2.5 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT : APPOINTMENT FORM ================= */}
          <div className="bg-white/90 backdrop-blur rounded-3xl 
                          p-8 md:p-12 shadow-xl">

            <span className="text-xs tracking-widest text-blue-700 font-semibold">
              APPOINTMENT
            </span>

            <h2 className="text-3xl font-extrabold text-gray-900 mt-3 mb-8">
              Book Your <span className="text-blue-700">Neurology Consultation</span>
            </h2>

            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="input" placeholder="Full Name" />
              <input className="input" placeholder="Email Address" />

              <div className="relative">
                <select className="select">
                  <option>Neurology Department</option>
                  <option>Neurosurgery</option>
                  <option>Stroke Care</option>
                </select>
                <ChevronDown className="icon" />
              </div>

              <div className="relative">
                <select className="select">
                  <option>Select Neurologist</option>
                  <option>Dr. A. Sharma</option>
                </select>
                <ChevronDown className="icon" />
              </div>

              <input className="input" placeholder="Phone Number" />

              <div className="relative">
                <input type="date" className="input" />
                <Calendar className="icon" />
              </div>

              <div className="relative">
                <select className="select">
                  <option>09:00 AM</option>
                  <option>11:30 AM</option>
                </select>
                <Clock className="icon" />
              </div>

              <textarea
                rows="4"
                placeholder="Describe your symptoms"
                className="input sm:col-span-2"
              />

              <button className="sm:col-span-2 mt-4 bg-blue-700 
                                 hover:bg-blue-800 transition 
                                 text-white font-semibold py-3 
                                 rounded-xl shadow-lg">
                CONFIRM APPOINTMENT
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* ===== Utility Styles ===== */}
      <style jsx>{`
        .input,
        .select {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          font-size: 0.875rem;
          outline: none;
        }
        .input:focus,
        .select:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
        }
        .icon {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          width: 1rem;
          height: 1rem;
          color: #9ca3af;
        }
        @keyframes fade {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade {
          animation: fade 0.7s ease;
        }
      `}</style>
    </section>
  );
}
