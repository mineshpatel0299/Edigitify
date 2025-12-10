"use client";

import { motion } from "framer-motion";

export function WhatsAppFloat() {
  const phoneNumber = "919911081234"; // India country code + number
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulsing ring effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* WhatsApp Icon */}
      <div className="relative z-10">
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 0C7.164 0 0 7.164 0 16c0 2.825.738 5.481 2.029 7.788L0.696 30.42l6.812-1.32A15.934 15.934 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333c-2.585 0-5.009-.742-7.055-2.019l-.506-.296-5.232 1.014 1.044-5.073-.326-.523A13.286 13.286 0 012.667 16c0-7.364 5.97-13.333 13.333-13.333S29.333 8.636 29.333 16 23.364 29.333 16 29.333z" />
          <path d="M23.271 19.654c-.383-.192-2.27-1.121-2.621-1.249-.352-.129-.608-.192-.864.192-.256.384-.991 1.249-1.215 1.505-.224.256-.448.288-.831.096-.384-.192-1.617-.596-3.078-1.9-1.138-.996-1.905-2.228-2.129-2.612-.224-.383-.024-.591.168-.783.173-.173.384-.448.576-.672.192-.224.256-.384.384-.64.128-.256.064-.48-.032-.672-.096-.192-.864-2.08-1.184-2.848-.312-.747-.628-.646-.864-.658-.224-.011-.48-.013-.736-.013-.256 0-.672.096-.992.48-.32.383-1.223 1.195-1.223 2.916s1.249 3.38 1.425 3.612c.176.232 2.465 3.764 5.968 5.28.834.36 1.485.576 1.992.736.837.264 1.599.227 2.201.137.671-.1 2.07-.847 2.362-1.664.292-.816.292-1.512.204-1.664-.088-.152-.344-.24-.728-.432z" />
        </svg>
      </div>
    </motion.a>
  );
}
