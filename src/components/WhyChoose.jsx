import { motion } from "motion/react";
import { FiCheck } from "react-icons/fi";
import { whyChoose } from "../data/content";

export default function WhyChoose() {
  return (
    <section className="bg-navy-950/[0.03] py-20 lg:py-28">
      <div className="container-shell grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden aspect-[16/10]"
        >
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1100&auto=format&fit=crop"
            alt="Diverse group of skilled professionals placed through staffing"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-gold-600 text-[13px] font-semibold mb-4">
            <span className="w-6 h-[2px] bg-gold-500" />
            Why Choose Antixor Staffing?
          </span>
          <h2 className="text-balance text-3xl sm:text-[2.4rem] font-extrabold leading-tight text-navy-950">
            The Right Talent Makes All the Difference
          </h2>

          <ul className="mt-7 space-y-4">
            {whyChoose.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <span className="grid place-items-center mt-0.5 w-6 h-6 rounded-full bg-navy-950 text-gold-500 shrink-0">
                  <FiCheck size={13} />
                </span>
                <span className="text-navy-950/75 text-[15px]">{item}</span>
              </motion.li>
            ))}
          </ul>

          <a
            href="#partner"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 font-semibold text-navy-950 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold-400"
          >
            Partner With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
