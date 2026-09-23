import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { PiTriangleFill } from "react-icons/pi";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(10,19,48,0.08)]"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="container-shell flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2.5 shrink-0">
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-navy-950 text-gold-500">
            <PiTriangleFill size={18} />
          </span>
          <span className="leading-tight">
            <span className="block font-extrabold text-[15px] text-navy-950">Employer</span>
            <span className="block text-[10px] tracking-wide text-navy-950/60 -mt-0.5">STAFFING</span>
          </span>
        </a>

        {/* Desktop routes */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative text-[14.5px] font-medium text-navy-950/80 hover:text-navy-950 transition-colors group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1.5 h-[2px] w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#partner"
          onClick={(e) => handleNavClick(e, "#partner")}
          className="hidden lg:inline-flex items-center rounded-full bg-gold-500 px-5 py-2.5 text-[14.5px] font-semibold text-navy-950 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold-400"
        >
          Get Started
        </a>

        {/* Mobile: 3-bar icon */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center w-10 h-10 rounded-lg border border-navy-950/10 text-navy-950"
        >
          {open ? <HiOutlineX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
        </button>
      </div>

      {/* Mobile menu: slides in from right, settles centered */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-navy-950/40 backdrop-blur-[2px] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="fixed top-[72px] right-0 left-0 lg:hidden bg-white shadow-2xl rounded-b-2xl overflow-hidden"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
            >
              <ul className="flex flex-col items-center gap-1 py-8 px-6">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.3 }}
                    className="w-full text-center"
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block py-3 text-[17px] font-semibold text-navy-950"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * navLinks.length, duration: 0.3 }}
                  className="w-full mt-3"
                >
                  <a
                    href="#partner"
                    onClick={(e) => handleNavClick(e, "#partner")}
                    className="block w-full text-center rounded-full bg-gold-500 py-3 font-semibold text-navy-950"
                  >
                    Get Started
                  </a>
                </motion.li>
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
