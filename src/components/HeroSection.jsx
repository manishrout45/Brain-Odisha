import React from "react";
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/assets/images/BrainOdisha-Hero.jpg"
          alt="Brain Disease Awareness"
          className="w-full h-full object-cover object-center"
        />

        {/* BLUE TRANSPARENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#132573] via-[#132573]/45 to-white/10" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-28 sm:pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white space-y-6 max-w-xl">

            <span className="uppercase tracking-widest text-sm text-white/80">
              Brain Disease Awareness
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Understanding <br />
              Brain Disorders & <br />
              Neurological Health
            </h1>

            <p className="text-white/80">
              Raising awareness about brain diseases such as stroke, epilepsy,
              Parkinson’s, Alzheimer’s, brain tumors, and other neurological
              disorders to promote early detection, timely treatment, and
              better quality of life.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-6 pt-4 ml-8">
              <button className="flex items-center gap-3 text-white font-semibold group">
                <span className="w-14 h-14 flex items-center justify-center rounded-full border border-white/40 group-hover:bg-white/10 transition">
                  <Play className="w-5 h-5 ml-1" />
                </span>
                Learn About Brain Diseases
              </button>
            </div>
          </div>

          {/* RIGHT FLOATING INFO */}
          <div className="relative hidden lg:block">

            {/* PATIENTS CARD */}
            <div className="absolute -bottom-60 right-32 bg-[#132f7b]/90 backdrop-blur-md rounded-[40px] px-6 py-4 text-white shadow-xl">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img
                    className="w-9 h-9 rounded-full border-2 border-white"
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt=""
                  />
                  <img
                    className="w-9 h-9 rounded-full border-2 border-white"
                    src="https://randomuser.me/api/portraits/women/45.jpg"
                    alt=""
                  />
                  <img
                    className="w-9 h-9 rounded-full border-2 border-white"
                    src="https://randomuser.me/api/portraits/men/65.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-xl font-bold">Early Care Matters</p>
                  <p className="text-sm text-white/80">
                    Awareness Leads to Prevention
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      

    </section>
  );
}
