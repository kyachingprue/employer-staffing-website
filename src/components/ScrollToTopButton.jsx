import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HiArrowUp } from "react-icons/hi";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("#home");
    const threshold = hero ? hero.offsetHeight - 120 : 480;
    const onScroll = () => setVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40 grid place-items-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-navy-950 text-gold-500 shadow-[0_8px_24px_rgba(10,19,48,0.35)]"
        >
          <HiArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
