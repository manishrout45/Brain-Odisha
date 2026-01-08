import React from "react";
import {
  Play,
  Brain,
  Activity,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="relative w-full bg-[#132573] overflow-hidden">

      {/* ================= FLOATING WHITE CARD ================= */}
      <div className="relative w-full px-4 z-10">
        <div className="max-w-5xl mx-auto mt-10 md:mt-16">
          <div className="bg-gray-200 rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.2)] p-6 md:p-12 text-center">

            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 rounded-full bg-[#132573]/10 flex items-center justify-center">
                <Play className="w-6 h-6 text-[#132573]" />
              </div>
            </div>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 leading-snug">
              Advanced Neurology Care <br className="hidden sm:block" />
              For Brain & Nervous System Health
            </h2>

            <p className="mt-4 max-w-xl mx-auto text-gray-500 text-sm md:text-base">
              Comprehensive diagnosis and treatment for neurological disorders
              including stroke, epilepsy, brain injuries, and nerve conditions
              using advanced medical technology.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-7 py-2.5 rounded-full bg-[#132573] text-white font-semibold hover:bg-[#0f1f5e] transition">
                Explore Treatments
              </button>
              <button className="px-7 py-2.5 rounded-full border border-[#132573] text-[#132573] font-semibold hover:bg-[#132573] hover:text-white transition">
                Book Consultation
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ===== SPACER ===== */}
      <div className="h-[40px] md:h-[80px] lg:h-[120px]"></div>

      {/* ================= BELOW CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start pb-32">

        {/* -------- LEFT COLUMN -------- */}
        <div>
          <p className="text-white/70 max-w-sm mb-10 text-sm md:text-base leading-relaxed">
            Neurology is a lifeline for those suffering from several neurological disorders and looking for
a solution to get treated for their health conditions. Without this important medical field, the
diagnosis and treatment of complex neural diseases would become impossible. Here’s why
this department stands out from the crowd and is the toughest field among other medical
branches.
          </p>

          <div className="space-y-6">

            <div className="bg-[#0f1f5e] rounded-2xl p-5 flex gap-4 text-white">
              <Brain className="w-12 h-12 " />
              <div>
                <h4 className="font-bold">Complex Brain Disorder Diagnosis</h4>
                <p className="text-sm text-white/70 mb-2">
                  With the Help of Neuroimaging Advancements
like PET Scanning, it is now possible to scan the details of brain cells to detect the
early stages of Epilepsy and Multiple Sclerosis, Alzheimer’s, and Parkinson’s
Disease.
                </p>
                
              </div>
            </div>

            <div className="bg-[#0f1f5e] rounded-2xl p-5 flex gap-4 text-white">
              <Activity className="w-12 h-12" />
              <div>
                <h4 className="font-bold">Advance Care for Neurodegenerative Diseases</h4>
                <p className="text-sm text-white/70 mb-2">
                  Several complex neural disorders
are now treatable with medically approved drugs, prescribed by a neurologist.
                </p>
                
              </div>
            </div>

            <div className="bg-[#0f1f5e] rounded-2xl p-5 flex gap-4 text-white">
              <Stethoscope className="w-12 h-12" />
              <div>
                <h4 className="font-bold">Minimally Invasive Surgery</h4>
                <p className="text-sm text-white/70 mb-2">
                  With the advancement in neuroscience, minimally
invasive surgery is creating hope for brain and spinal tumor surgery with less scarring
and faster recovery.

                </p>
                
              </div>
            </div>

          </div>
        </div>

        {/* -------- RIGHT COLUMN -------- */}
        <div className="flex flex-col items-center lg:items-start mt-10 lg:mt-0">
          <p className="uppercase tracking-[3px] text-sm text-white/60 mb-3">
            Neuroscience Expertise
          </p>

          <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-8 text-center lg:text-left">
            Why is Neurology  <br />
            Important?
          </h3>

          <img
            src="https://img.freepik.com/premium-photo/doctor-looks-brain-hologram-checks-test-result-virtual-interface-analyzes-data-alzheimer-s-disease-brain-dementia-innovative-technologies-medicine-future_99433-6563.jpg"
            alt="Neurology Care"
            className="max-w-xs sm:max-w-sm md:max-w-md w-full object-contain"
          />
        </div>

      </div>
    </section>
  );
}
