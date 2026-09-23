import { motion } from "motion/react";
import { FiArrowRight } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="container-shell grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative order-2 lg:order-1"
        >
          <div className="rounded-3xl overflow-hidden aspect-[5/4]">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
              alt="Team of recruiters collaborating in the office"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 sm:-right-8 grid place-items-center w-28 h-28 rounded-full bg-gold-500 text-navy-950 text-center shadow-xl">
            <span>
              <span className="block text-xl font-extrabold">10+</span>
              <span className="block text-[11px] font-semibold leading-tight">
                Years of
                <br />
                Experience
              </span>
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <span className="inline-flex items-center gap-2 text-gold-600 text-[13px] font-semibold mb-4">
            <span className="w-6 h-[2px] bg-gold-500" />
            About Antixor Staffing
          </span>
          <h2 className="text-balance text-3xl sm:text-[2.4rem] font-extrabold leading-tight text-navy-950">
            We're More Than Just a Staffing Agency
          </h2>
          <p className="mt-5 text-navy-950/65 leading-relaxed max-w-md">
            Antixor Staffing is a global recruitment and talent solutions
            company, dedicated to connecting exceptional people with
            incredible opportunities. We help businesses grow with the
            right talent and support job seekers in building better
            careers.
          </p>
          <a
            href="#services"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-navy-950 px-6 py-3.5 font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            Learn More About Us
            <FiArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
