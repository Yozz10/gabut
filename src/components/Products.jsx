import React from "react";
import { motion } from "framer-motion";

export default function Products() {
  const products = [
    {
      name: "Canva Premium",
      details: ["1 Hari: 800p", "3 Hari: 1k", "7 Hari: 1.5k", "1 Bulan: 3k", "1 Tahun: 13k"],
    },
    {
      name: "Spotify (Famplan)",
      details: ["1 Bulan: 9k", "2 Bulan: 14k", "3 Bulan: 19k", "4 Bulan: 24k"],
    },
    {
      name: "Netflix (1P-1U)",
      details: ["1 Hari: 4k", "3 Hari: 8k", "1 Bulan: 30k", "3 Bulan: 80k"],
    },
    {
      name: "Viu",
      details: ["1 Bulan: 4k", "3 Bulan: 9k", "6 Bulan: 12k", "1 Tahun: 18k"],
    },
    {
      name: "Loklok",
      details: ["1 Bulan: 10k", "3 Bulan: 16k", "Platinum: 25k"],
    },
    {
      name: "iQIYI",
      details: ["1 Bulan: 10k", "3 Bulan: 12k", "1 Tahun: 15k"],
    },
  ];

  const waLink = "https://wa.me/6285741767752?text=Halo%20Riyo!%20Saya%20mau%20pesan%20premium%20akun%20🙏";

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold text-pink-700 mb-4 text-center">💎 Pricelist Produk</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-3">
        {products.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white/60 backdrop-blur-md p-4 rounded-2xl shadow-md border border-pink-200"
          >
            <h3 className="font-bold text-pink-700 text-lg mb-2">{item.name}</h3>
            <ul className="text-sm text-gray-700 mb-3">
              {item.details.map((d, idx) => (
                <li key={idx}>• {d}</li>
              ))}
            </ul>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center py-2 rounded-xl bg-gradient-to-r from-pink-400 to-pink-500 text-white font-medium hover:from-pink-500 hover:to-pink-600 transition-all"
            >
              Pesan via WhatsApp 💬
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
