import {
  FiFacebook,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import { PiTriangleFill } from "react-icons/pi";

const quickLinks = ["Home", "About Us", "Services", "Job Seekers", "Employers", "Blog", "Contact"];
const serviceLinks = [
  "Permanent Staffing",
  "Temporary Staffing",
  "Executive Search",
  "IT & Tech Recruitment",
  "Healthcare Staffing",
  "Industrial Staffing",
  "Remote Hiring",
  "HR Consulting",
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-navy-950 text-white/60">
      <div className="container-shell py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="grid place-items-center w-9 h-9 rounded-lg bg-white text-navy-950">
              <PiTriangleFill size={18} />
            </span>
            <span className="leading-tight">
              <span className="block font-extrabold text-[15px] text-white">Employer</span>
              <span className="block text-[10px] tracking-wide text-white/50 -mt-0.5">STAFFING</span>
            </span>
          </div>
          <p className="text-[13.5px] leading-relaxed">
            Connecting talent with opportunity. Building a stronger tomorrow.
          </p>
          <div className="flex items-center gap-3 mt-5">
            {[FiFacebook, FiLinkedin, FiTwitter, FiInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#footer"
                className="grid place-items-center w-9 h-9 rounded-full bg-white/8 transition-colors hover:bg-gold-500 hover:text-navy-950"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4 text-[15px]">Quick Links</h4>
          <ul className="space-y-2.5 text-[13.5px]">
            {quickLinks.map((l) => (
              <li key={l}>
                <a href="#footer" className="hover:text-gold-500 transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4 text-[15px]">Our Services</h4>
          <ul className="space-y-2.5 text-[13.5px]">
            {serviceLinks.map((l) => (
              <li key={l}>
                <a href="#services" className="hover:text-gold-500 transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4 text-[15px]">Contact Us</h4>
          <ul className="space-y-3 text-[13.5px]">
            <li className="flex items-start gap-2.5">
              <FiMapPin className="mt-0.5 shrink-0" />
              123 Business Avenue, New York, NY 10001
            </li>
            <li className="flex items-center gap-2.5">
              <FiPhone className="shrink-0" /> +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-2.5">
              <FiMail className="shrink-0" /> info@antixorstaffing.com
            </li>
          </ul>
          <a
            href="#partner"
            className="mt-5 inline-flex items-center rounded-full bg-gold-500 px-5 py-2.5 text-[13.5px] font-semibold text-navy-950"
          >
            Get Started
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell py-5 flex flex-wrap items-center justify-between gap-3 text-[12.5px]">
          <p>© {new Date().getFullYear()} Antixor Staffing. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#footer" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
            <a href="#footer" className="hover:text-gold-500 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
