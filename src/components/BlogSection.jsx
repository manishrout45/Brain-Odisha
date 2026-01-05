import React from "react";
import { User, Calendar, ArrowRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    category: "Neurology",
    title: "Understanding Mental & Brain Health Disorders",
    excerpt:
      "Early diagnosis of neurological conditions can significantly improve recovery and quality of life.",
    image:
      "https://img.freepik.com/premium-photo/flat-abstract-neon-art-featuring-brain-health-concept_980716-702084.jpg",
    date: "November 23, 2024",
  },
  {
    id: 2,
    category: "Brain Care",
    title: "Advanced Stroke & Neuro Recovery Programs",
    excerpt:
      "Discover how modern neurology treatments are transforming stroke rehabilitation outcomes.",
    image:
      "https://img.freepik.com/premium-photo/brain-scan-digital-interface-medical-technology_99433-6563.jpg",
    date: "November 23, 2024",
  },
  {
    id: 3,
    category: "Neuroscience",
    title: "How Technology Is Changing Neurology Care",
    excerpt:
      "From AI diagnosis to precision surgery, explore innovations shaping the future of neurology.",
    image:
      "https://img.freepik.com/premium-photo/futuristic-brain-hologram-medical-interface_110488-3702.jpg",
    date: "November 23, 2024",
  },
];

export default function BlogSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#eef2ff] via-white to-[#e0e7ff] overflow-hidden">

      {/* Decorative Blur */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-400/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs tracking-widest font-semibold text-indigo-700 bg-indigo-100 px-5 py-1.5 rounded-full mb-4">
            LATEST INSIGHTS
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Latest Articles & Updates <br className="hidden sm:block" />
            From Our Neurology Experts
          </h2>

          <p className="mt-4 text-gray-600">
            Stay informed with expert-written blogs on brain health,
            neuroscience, and advanced neurological care.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group relative bg-white/80 backdrop-blur 
                         border border-white/40 rounded-3xl 
                         overflow-hidden shadow-lg hover:shadow-2xl 
                         transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover 
                             transition-transform duration-700 
                             group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Category */}
                <span className="absolute top-4 left-4 bg-indigo-600/90 
                                 text-white text-xs font-semibold 
                                 px-4 py-1.5 rounded-full shadow-md">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <User size={14} /> Admin
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {blog.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-indigo-700 transition">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {blog.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm 
                             font-semibold text-indigo-700 
                             group-hover:gap-3 transition-all"
                >
                  Read Full Article
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-3 mt-14">
          <span className="w-3 h-3 rounded-full bg-gray-300" />
          <span className="w-4 h-4 rounded-full bg-indigo-600" />
          <span className="w-3 h-3 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  );
}
