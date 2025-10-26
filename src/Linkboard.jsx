import React from "react";

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
    <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center border border-white/50">
      <img
        src="/avatar.jpg"
        alt="Avatar"
        className="w-28 h-28 rounded-full mx-auto border-4 border-pink-400 shadow-md"
      />
      <h1 className="text-2xl font-semibold mt-4 text-pink-700">@Riyo</h1>
      <p className="text-sm text-gray-600 mb-6">Link board official 💗</p>

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
  );
}
