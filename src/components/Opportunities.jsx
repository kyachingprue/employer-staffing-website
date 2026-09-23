import { motion } from "motion/react";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { jobs } from "../data/content";

export default function Opportunities() {
  return (
    <section id="opportunities" className="bg-white py-20 lg:py-28">
      <div className="container-shell">
        <div className="flex flex-wrap items-start justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-lg"
          >
            <span className="inline-flex items-center gap-2 text-gold-600 text-[13px] font-semibold mb-4">
              <span className="w-6 h-[2px] bg-gold-500" />
              Latest Opportunities
            </span>
            <h2 className="text-balance text-3xl sm:text-[2.4rem] font-extrabold leading-tight text-navy-950">
              Latest Your Opportunities
            </h2>
            <p className="mt-4 text-navy-950/60 leading-relaxed">
              Discover exciting job opportunities with top employers across
              various industries and take the next step in your career.
            </p>
          </motion.div>

          <a
            href="#footer"
            className="inline-flex items-center gap-2 rounded-full border border-navy-950/15 px-5 py-2.5 text-[14px] font-semibold text-navy-950 transition-colors hover:bg-navy-950 hover:text-white"
          >
            View All Jobs
            <FiArrowRight />
          </a>
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-6">
          <div className="space-y-4">
            {jobs.map(({ icon: Icon, title, location, type }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -3 }}
                className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-navy-950/8 p-5 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <span className="grid place-items-center w-11 h-11 rounded-full bg-gold-500 text-navy-950 shrink-0">
                    <Icon size={19} />
                  </span>
                  <div>
                    <h3 className="font-bold text-navy-950 text-[15.5px]">{title}</h3>
                    <p className="flex items-center gap-1.5 text-[13px] text-navy-950/55 mt-0.5">
                      <FiMapPin size={12} /> {location} · {type}
                    </p>
                  </div>
                </div>
                <a
                  href="#footer"
                  className="inline-flex items-center rounded-full bg-navy-950/[0.06] px-5 py-2.5 text-[13.5px] font-semibold text-navy-950 transition-colors hover:bg-gold-500"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden min-h-[280px]"
          >
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
              alt="Professional ready for her next career opportunity"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-extrabold text-xl leading-snug">
                Your Next Opportunity Awaits
              </p>
              <span className="mt-4 inline-grid place-items-center w-11 h-11 rounded-full bg-gold-500 text-navy-950">
                <FiArrowRight />
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
