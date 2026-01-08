import React from "react";
import {
  Brain,
  Activity,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  AlertCircle,
} from "lucide-react";

export default function BrainDiseaseSection() {
  const diseases = [
    {
      name: "Neurodegenerative Diseases",
      desc: "It refers to the gradual loss of neural structures affecting the brain and spinal cord functionality, or complete failure of organs. E.gAlzheimer’s, Parkinson’s diseases, Multiple Sclerosis, etc. ",
      icon: <Brain />,
    },
    {
      name: "Brain Tumor",
      desc: " The abnormal growth of cells in a mass inside the brain, categorized into benign or malignant, affecting brain functionality",
      icon: <Activity />,
    },
    {
      name: "Seizure",
      desc: " Sudden failure of neural activity leading to temporary changes in behaviour,sensation, and movement due to excessive electrical signals in neurons.",
      icon: <HeartPulse />,
    },
    {
      name: "Stroke",
      desc: "When blood flow to the brain is disrupted due to a rupture or blockage in the blood vessels.",
      icon: <AlertCircle />,
    },
  ];

  const prevention = [
    "Eat a balanced diet rich in omega-3 fatty acids",
    "Exercise regularly to improve blood circulation",
    "Control blood pressure, sugar, and cholesterol",
    "Avoid smoking and excessive alcohol consumption",
    "Practice stress management and quality sleep",
  ];

  const treatment = [
    "Early diagnosis using MRI / CT Scan",
    "Medication and targeted therapy",
    "Surgical intervention when necessary",
    "Rehabilitation and physiotherapy",
    "Continuous medical monitoring",
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-[#f8faff] to-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== HEADING ===== */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest text-[#132573] bg-[#e1e4f0] px-4 py-1 rounded-full mb-4">
            BRAIN CARE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Common Neuro Diseases,  <br className="hidden sm:block" />
             Prevention, and Treatment Procedures
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Understanding neurological diseases, prevention tips, and treatment approaches helps
maintain overall health.

          </p>
        </div>

        {/* ===== MAIN GRID ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ===== DISEASE LIST ===== */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Common Neuro Disorders
            </h3>

            <ul className="space-y-5">
              {diseases.map((disease, index) => (
                <li
                  key={index}
                  className="flex gap-4 items-start p-4 rounded-xl hover:bg-[#f4f6ff] transition"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 text-[#132573]">
                    {disease.icon}
                  </div>

                  <div>
                    <h4 className="text-base font-semibold text-gray-900">
                      {disease.name}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {disease.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== SIDE INFO ===== */}
          <div className="space-y-6">

            {/* Prevention */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-[#132573]" />
                <h4 className="text-lg font-semibold text-gray-900">
                  Prevention Tips
                </h4>
              </div>

              <ul className="space-y-3 text-sm text-gray-600">
                {prevention.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#132573]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatment */}
            <div className="bg-[#132573] rounded-2xl shadow-lg p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Stethoscope className="w-5 h-5" />
                <h4 className="text-lg font-semibold">
                  Treatment Approach
                </h4>
              </div>

              <ul className="space-y-3 text-sm text-indigo-100">
                {treatment.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-white" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
