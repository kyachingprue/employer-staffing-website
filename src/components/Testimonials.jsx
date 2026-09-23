import { useState } from "react";
import { motion } from "motion/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BsQuote } from "react-icons/bs";
import { testimonials } from "../data/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-white py-20 lg:py-28 border-t border-navy-950/5">
      <div className="container-shell">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-lg"
          >
            <span className="inline-flex items-center gap-2 text-gold-600 text-[13px] font-semibold mb-4">
              <span className="w-6 h-[2px] bg-gold-500" />
              Success Stories
            </span>
            <h2 className="text-balance text-3xl sm:text-[2.4rem] font-extrabold leading-tight text-navy-950">
              Trusted by Businesses, Loved by Candidates
            </h2>
            <p className="mt-4 text-navy-950/60 leading-relaxed">
              Hear from our clients and candidates about their experience
              with Antixor Staffing.
            </p>
          </motion.div>

          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="grid place-items-center w-10 h-10 rounded-full border border-navy-950/15 text-navy-950 transition-colors hover:bg-navy-950 hover:text-white"
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="grid place-items-center w-10 h-10 rounded-full border border-navy-950/15 text-navy-950 transition-colors hover:bg-navy-950 hover:text-white"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`rounded-2xl border p-6 transition-all duration-300 ${
                i === index
                  ? "border-gold-500 shadow-lg shadow-gold-500/10"
                  : "border-navy-950/8"
              }`}
            >
              <BsQuote className="text-gold-500" size={26} />
              <p className="mt-4 text-[14.5px] text-navy-950/75 leading-relaxed">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="grid place-items-center w-10 h-10 rounded-full bg-navy-950 text-gold-500 font-bold text-sm shrink-0">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="font-bold text-navy-950 text-[14px]">{t.name}</p>
                  <p className="text-[12.5px] text-navy-950/50">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
