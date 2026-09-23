import { motion } from "motion/react";
import { stats } from "../data/content";

export default function CTA() {
  return (
    <section id="partner" className="relative bg-navy-950 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop"
          alt="Handshake symbolizing a strong partnership"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40" />
      </div>

      <div className="container-shell relative py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg"
        >
          <span className="inline-flex items-center gap-2 text-gold-500 text-[13px] font-semibold mb-4">
            <span className="w-6 h-[2px] bg-gold-500" />
            Partner With Us Today
          </span>
          <h2 className="text-balance text-3xl sm:text-[2.4rem] font-extrabold leading-tight text-white">
            Let's Build a Stronger Workforce Together
          </h2>
          <p className="mt-5 text-white/65 leading-relaxed">
            Whether you're a job seeker looking for your next opportunity
            or a business searching for top talent, Antixor Staffing is
            here to help.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#footer"
              className="inline-flex items-center rounded-full bg-gold-500 px-6 py-3.5 font-semibold text-navy-950 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold-400"
            >
              For Employers
            </a>
            <a
              href="#opportunities"
              className="inline-flex items-center rounded-full border border-white/25 px-6 py-3.5 font-semibold text-white transition-colors hover:border-gold-500 hover:text-gold-500"
            >
              For Job Seekers
            </a>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/10 pt-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-white">
                {s.value}
              </p>
              <p className="mt-1 text-[13px] text-white/55">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
