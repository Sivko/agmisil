import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollBlurBackground() {
  const [precentScroll, setPrecentScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = document.documentElement.clientHeight;
      const fullHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollPercentage = (scrollTop / fullHeight) * 100;
      setPrecentScroll(Math.floor(scrollPercentage));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const blurAmount = Math.min(precentScroll / 10, 10); // Ограничиваем блюр до 10px
  const opacityAmount = Math.min(precentScroll / 100, 0.8); // Затемнение до 70%

  return (
    <>
      {/* Затемняющий и блюрящий слой */}
      <div className="fixed bottom-0 right-0 text-2xl text-white">{precentScroll}</div>
      <motion.div
        className="fixed inset-0 bg-black backdrop-blur-md"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${opacityAmount})`,
          backdropFilter: `blur(${blurAmount}px)`,
        }}
      />
    </>
  );
}