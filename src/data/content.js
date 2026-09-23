import {
  FiUserCheck,
  FiClock,
  FiGlobe,
  FiShield,
  FiHeadphones,
} from "react-icons/fi";
import {
  PiUserCircleFill,
  PiBriefcaseFill,
  PiUsersThreeFill,
  PiMonitorFill,
  PiHeartbeatFill,
  PiFactoryFill,
  PiGlobeHemisphereWestFill,
  PiHandshakeFill,
} from "react-icons/pi";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Job Seekers", href: "#opportunities" },
  { label: "Employers", href: "#partner" },
  { label: "Contact", href: "#footer" },
];

export const trustBadges = [
  { icon: FiShield, label: "Trusted & Verified" },
  { icon: FiClock, label: "Fast & Easy Hiring Process" },
  { icon: FiGlobe, label: "Global Talent Pool" },
  { icon: FiUserCheck, label: "Long Term Partnership" },
  { icon: FiHeadphones, label: "24/7 Support" },
];

export const services = [
  {
    icon: PiUserCircleFill,
    tone: "gold",
    title: "Permanent Staffing",
    text: "Build your core team with skilled and experienced professionals.",
  },
  {
    icon: PiBriefcaseFill,
    tone: "gold",
    title: "Temporary Staffing",
    text: "Get the right talent for short-term and project-based needs.",
  },
  {
    icon: PiUsersThreeFill,
    tone: "gold",
    title: "Executive Search",
    text: "Find top-level leaders to drive your business forward.",
  },
  {
    icon: PiMonitorFill,
    tone: "navy",
    title: "IT & Tech Recruitment",
    text: "Hire specialized tech talent for your digital transformation.",
  },
  {
    icon: PiHeartbeatFill,
    tone: "navy",
    title: "Healthcare Staffing",
    text: "Skilled healthcare professionals for better patient care.",
  },
  {
    icon: PiFactoryFill,
    tone: "navy",
    title: "Industrial Staffing",
    text: "Reliable workforce for manufacturing and industrial sectors.",
  },
  {
    icon: PiGlobeHemisphereWestFill,
    tone: "navy",
    title: "Remote Hiring",
    text: "Access global talent from anywhere in the world.",
  },
  {
    icon: PiHandshakeFill,
    tone: "navy",
    title: "HR Consulting",
    text: "Strategic HR solutions for long-term success.",
  },
];

export const jobs = [
  {
    icon: PiMonitorFill,
    title: "Senior Software Engineer",
    location: "New York, USA",
    type: "Full Time",
  },
  {
    icon: PiBriefcaseFill,
    title: "Marketing Manager",
    location: "London, UK",
    type: "Full Time",
  },
  {
    icon: PiHeartbeatFill,
    title: "Registered Nurse",
    location: "Toronto, Canada",
    type: "Full Time",
  },
  {
    icon: PiHandshakeFill,
    title: "Project Manager",
    location: "Sydney, Australia",
    type: "Full Time",
  },
];

export const testimonials = [
  {
    quote:
      "Antixor Staffing delivered exceptional talent for our team. Their professionalism and understanding of our needs made the hiring process seamless.",
    name: "Michael R. Thompson",
    role: "HR Director, Global Solutions",
  },
  {
    quote:
      "I found my dream job through Antixor Staffing. Their team supported me at every step and helped me build a better future.",
    name: "Sarah Johnson",
    role: "Software Developer",
  },
  {
    quote:
      "Reliable, efficient and professional. Antixor Staffing is our go-to partner for all our recruitment needs.",
    name: "David Chen",
    role: "Operations Manager",
  },
];

export const stats = [
  { value: "5,000+", label: "Successful Placements" },
  { value: "500+", label: "Happy Clients" },
  { value: "15+", label: "Industries Served" },
  { value: "98%", label: "Client Satisfaction" },
];

export const whyChoose = [
  "Access to pre-screened & skilled candidates",
  "Industry-specific hiring expertise",
  "Flexible and cost-effective solutions",
  "Dedicated support team",
];
