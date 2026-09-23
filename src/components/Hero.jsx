import { motion } from "motion/react";
import { FiArrowRight, FiPlay } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="home" className="relative bg-navy-950 pt-[72px] overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-navy-700/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-gold-500/10 blur-3xl" />

      <div className="container-shell relative grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-gold-500 text-[13px] font-semibold mb-5">
            <span className="w-6 h-[2px] bg-gold-500" />
            Your Trusted Staffing Partner
          </span>

          <h1 className="text-balance text-[2.4rem] sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.08] text-white">
            Right People.
            <br />
            Right Skills.
            <br />
            <span className="text-gold-500">Greater Success.</span>
          </h1>

          <p className="mt-6 max-w-md text-white/70 text-[15.5px] leading-relaxed">
            At Antixor Staffing, we connect talented professionals with
            forward-thinking companies. Our mission is to build stronger
            teams and create better opportunities for everyone.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 font-semibold text-navy-950 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold-400"
            >
              Find Your Next Hire
              <FiArrowRight />
            </a>
            <button
              type="button"
              className="inline-flex items-center gap-3 font-semibold text-white group"
            >
              <span className="grid place-items-center w-11 h-11 rounded-full border border-white/25 transition-colors group-hover:border-gold-500 group-hover:text-gold-500">
                <FiPlay />
              </span>
              Watch Our Story
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] max-w-md mx-auto ring-1 ring-white/10">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=900&auto=format&fit=crop"
              alt="Staffing professional holding a tablet in a modern office"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 sm:-left-10 rounded-2xl bg-gold-500 text-navy-950 px-6 py-5 w-44 shadow-xl">
            <p className="font-bold leading-snug text-[15px]">
              Better Talent Brighter Future
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
