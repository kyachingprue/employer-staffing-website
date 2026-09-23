import { motion } from "motion/react";
import { FiArrowRight } from "react-icons/fi";
import { services } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="bg-navy-950 py-20 lg:py-28">
      <div className="container-shell">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-lg"
          >
            <span className="inline-flex items-center gap-2 text-gold-500 text-[13px] font-semibold mb-4">
              <span className="w-6 h-[2px] bg-gold-500" />
              Our Services
            </span>
            <h2 className="text-balance text-3xl sm:text-[2.4rem] font-extrabold leading-tight text-white">
              Comprehensive Staffing Solutions
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              From hiring to long-term talent management, we offer flexible
              and customized staffing solutions for your business needs.
            </p>
            <a
              href="#opportunities"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 font-semibold text-navy-950 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold-400"
            >
              Explore All Services
              <FiArrowRight />
            </a>
          </motion.div>

          <p className="hidden lg:block italic text-white/40 text-lg leading-snug -rotate-1">
            Flexible
            <br />
            Reliable
            <br />
            Scalable
          </p>
        </div>

        <div className="rounded-3xl bg-white p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(({ icon: Icon, title, text, tone }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.07 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-navy-950/8 p-5 transition-shadow duration-300 hover:shadow-lg hover:shadow-navy-950/5"
            >
              <span
                className={`grid place-items-center w-11 h-11 rounded-full mb-4 ${
                  tone === "gold"
                    ? "bg-gold-500 text-navy-950"
                    : "bg-navy-950 text-gold-500"
                }`}
              >
                <Icon size={20} />
              </span>
              <h3 className="font-bold text-navy-950 text-[15.5px]">{title}</h3>
              <p className="mt-2 text-[13.5px] text-navy-950/60 leading-relaxed">
                {text}
              </p>
              <a
                href="#footer"
                className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-gold-600 hover:gap-2.5 transition-all"
              >
                Learn More <FiArrowRight size={13} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
