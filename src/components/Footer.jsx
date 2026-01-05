import React from "react";
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-tr from-[#132573] to-[#0f1f5e] text-gray-100 overflow-hidden ">

      {/* Decorative Circles */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

        {/* Brand + Contact */}
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold text-white mb-2">
            Brain<span className="text-yellow-400">Odisha</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Raising awareness about neurological health, providing treatment resources, and supporting patients and families.
          </p>

          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-yellow-400" /> Bhubaneswar, Odisha
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-yellow-400" /> info@brainodisha.org
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-yellow-400" /> +91 98765 43210
            </li>
          </ul>

          <div className="flex gap-3 mt-4">
            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 text-[#132573] hover:bg-white hover:text-[#132573] transition-shadow shadow-md"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">Our Services</h3>
          <ul className="space-y-2 text-gray-200 text-sm hover:gap-1 transition-all">
            {[
              "Neurology Consultations",
              "Brain Surgery & Treatment",
              "Rehabilitation Programs",
              "Patient & Family Support",
              "Community Awareness",
            ].map((item, i) => (
              <li key={i} className="hover:text-white cursor-pointer transition-colors">
                → {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            {["About Us", "Our Doctors", "Treatment Options", "Patient Resources", "Contact & Support"].map(
              (item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    → {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Brain Health Topics + Newsletter */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">Brain Health Topics</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            {[
              "Stroke Awareness",
              "Neurodegenerative Diseases",
              "Epilepsy Management",
              "Head Injury Care",
              "Migraine & Pain Relief",
            ].map((item, i) => (
              <li key={i} className="hover:text-white cursor-pointer transition-colors">
                → {item}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <p className="text-gray-300 mb-2">Subscribe to our newsletter</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg text-gray-800 outline-none"
              />
              <button className="bg-yellow-400 px-4 py-2 rounded-r-lg font-semibold text-[#132573] hover:bg-white hover:text-[#132573] transition">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 py-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} BrainOdisha. All Rights Reserved. | Developed by{" "}
        <a
          href="https://marcadspro.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:underline"
        >
          Marcads Pro
        </a>
      </div>
    </footer>
  );
}
