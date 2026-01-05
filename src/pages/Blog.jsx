import React from "react";
import BlogSection from "../components/BlogSection";


export default function Blog() {
  return (
    <>
    {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[50vh] min-h-[350px]">
        {/* Background Image */}
        <img
          src="https://img.freepik.com/premium-photo/selective-focus-doctor-white-coat-holds-out-his-hand-with-glowing-holographic-brain-model-his-hand-background-is-medical-laboratory_1208049-7057.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80" // replace if needed
          alt="Blog"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Centered Heading */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
            Blog
          </h1>
        </div>
      </section>
    <BlogSection />
    </>
  );
}
