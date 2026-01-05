import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* FULL WIDTH NAVBAR */}
      <nav
        className={`w-full h-20 transition
          ${scrolled ? "lg:bg-white/80 lg:backdrop-blur-md lg:shadow-md" : "lg:bg-transparent"} 
          bg-[#132573]`}
      >
        {/* INNER CONTAINER */}
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 h-full">

          {/* LOGO */}
          <div className="flex items-center gap-2 font-bold text-xl">
            <div
              className={`w-20 h-9 rounded-full flex items-center justify-center font-extrabold
                ${scrolled ? "lg:bg-[#132573] lg:text-white" : "lg:bg-white lg:text-[#132573]"} 
                bg-white text-[#132573]`}
            >
              BRAIN
            </div>
            <span className={`${scrolled ? "lg:text-[#132573]" : "lg:text-white"} text-white`}>
              ODISHA
            </span>
          </div>

          {/* DESKTOP MENU */}
          <ul
            className={`hidden lg:flex items-center gap-8 font-medium 
              ${scrolled ? "lg:text-[#132573]" : "lg:text-white"} text-white`}
          >
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `relative transition hover:text-blue-500 ${
                    isActive
                      ? "text-blue-500 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-blue-600"
                      : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </ul>

          {/* RIGHT ACTIONS */}
          <div
            className={`hidden lg:flex items-center gap-6 
              ${scrolled ? "lg:text-[#132573]" : "lg:text-white"} text-white`}
          >
            <Search className="w-5 h-5 cursor-pointer" />
            <button className="px-6 py-3 rounded-full font-semibold bg-[#132573] hover:bg-blue-900 text-white transition">
              Make An Appointment
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button onClick={() => setOpen(true)} className="lg:hidden text-white">
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#132573] z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-20 border-b border-white/10">
          <span className="text-white font-bold text-lg">Menu</span>
          <button onClick={() => setOpen(false)} className="text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* MOBILE LINKS */}
        <ul className="flex flex-col px-6 py-6 text-white font-medium">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-3 border-b border-white/10 transition ${
                  isActive
                    ? "bg-white/10 border-l-4 border-blue-400 pl-4"
                    : "pl-1"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>

        {/* MOBILE CTA */}
        <div className="px-6 mt-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold transition">
            Make An Appointment
          </button>
        </div>
      </div>
    </header>
  );
}
