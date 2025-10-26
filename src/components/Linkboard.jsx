import React from "react";
import Products from "./Products";

export default function Linkboard() {
  const links = [
    {
      name: "🌸 Channel WhatsApp",
      url: "https://whatsapp.com/channel/0029VaecgZU89ineTHYLdA42",
    },
    {
      name: "💬 Grup WhatsApp",
      url: "https://chat.whatsapp.com/LOp5rjjcmn61QW4BqmkJZy?mode=ems_copy_t",
    },
    {
      name: "📸 Instagram",
      url: "https://instagram.com/",
    },
    {
      name: "🎵 TikTok",
      url: "https://tiktok.com/",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300 text-center p-6 relative overflow-hidden">
      {/* Efek partikel pink lembut */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-64 h-64 bg-pink-300/40 rounded-full blur-3xl top-[-4rem] left-[-3rem] animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-pink-400/40 rounded-full blur-3xl bottom-[-4rem] right-[-3rem] animate-pulse delay-2000"></div>
      </div>

      <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl shadow-2xl max-w-sm w-full border border-white/50 relative z-10">
        <img
          src="https://pomf2.lain.la/f/0y73mdb9.mp4"
          alt="Avatar"
          className="w-28 h-28 rounded-full mx-auto border-4 border-pink-400 shadow-md animate-bounce-slow"
        />
        <h1 className="text-2xl font-semibold mt-4 text-pink-700">@Riyo</h1>
        <p className="text-sm text-gray-600 mb-6">Ini Bio🗿</p>

        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 my-2 rounded-xl bg-gradient-to-r from-pink-400 to-pink-500 text-white font-medium hover:from-pink-500 hover:to-pink-600 transition-all duration-300 shadow-lg"
          >
            {link.name}
          </a>
        ))}

        <audio autoPlay loop className="hidden">
          <source src="/music.mp3" type="audio/mpeg" />
        </audio>

        <footer className="mt-6 text-xs text-gray-700">
          © 2025 Made with 💖 by Riyo
        </footer>
      </div>
    </div>
  );
}
