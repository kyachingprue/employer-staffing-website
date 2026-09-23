import { motion } from "motion/react";
import { trustBadges } from "../data/content";

export default function TrustBadges() {
  return (
    <section className="bg-white border-b border-navy-950/5">
      <div className="container-shell py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {trustBadges.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-3"
            >
              <span className="grid place-items-center w-9 h-9 rounded-full bg-navy-950/5 text-navy-800 shrink-0">
                <Icon size={16} />
              </span>
              <span className="text-[13.5px] font-medium text-navy-950/80 leading-tight">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
