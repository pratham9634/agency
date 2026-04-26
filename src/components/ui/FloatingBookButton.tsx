"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

export default function FloatingBookButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Link href="/contact" aria-label="Book a Call">
        <motion.div
          className="relative flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-amber-600 to-red-600 px-6 py-4 text-white shadow-lg"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ boxShadow: "0 0 0 0 rgba(255, 165, 0, 0)" }}
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(255, 165, 0, 0.7)",
              "0 0 0 10px rgba(255, 165, 0, 0)",
            ],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <PhoneCall className="h-5 w-5" />
          <span className="uppercase tracking-wide text-sm font-medium hidden sm:inline-block">Book a Call</span>
        </motion.div>
      </Link>
    </div>
  );
}
