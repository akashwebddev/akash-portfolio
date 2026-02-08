"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-black text-white">
      <motion.img
        src="/profile.jpg"
        alt="Akash Soekar"
        className="w-40 h-40 rounded-full border-4 border-purple-500 shadow-[0_0_30px_#7c3aed]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <motion.h1
        className="text-4xl font-bold mt-6"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Akash Soekar
      </motion.h1>

      <p className="text-cyan-400 mt-3">
        Gaming API & Payment Automation Expert <br />
        7+ Years Experience
      </p>
    </section>
  );
}
