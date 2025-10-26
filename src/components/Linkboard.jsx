import { motion } from "framer-motion";

export default function Linkboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-200 to-pink-400">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white/20 backdrop-blur-lg p-8 rounded-3xl shadow-xl text-center w-80"
      >
        <motion.img
          src="https://pomf2.lain.la/f/w6orjdvt.jpg"
          alt="Avatar"
          className="w-24 h-24 rounded-full border-4 border-pink-300 mx-auto mb-4 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        />

        <h1 className="text-2xl font-bold text-pink-700">@Riyo</h1>
        <p className="text-pink-600 mb-6">Pemula 😹</p>

        <div className="space-y-3">
          {[
            { label: "🌸 Channel WhatsApp", link: "#" },
            { label: "💬 Grup WhatsApp", link: "#" },
            { label: "📸 Instagram", link: "#" },
            { label: "🎵 TikTok", link: "#" },
          ].map((btn, i) => (
            <motion.a
              key={i}
              href={btn.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block bg-gradient-to-r from-pink-400 to-pink-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-pink-400/50 transition-all"
            >
              {btn.label}
            </motion.a>
          ))}
        </div>

        <p className="mt-6 text-xs text-pink-800">
          © 2025 Made with 💖 by Riyo
        </p>
      </motion.div>
    </div>
  );
}
