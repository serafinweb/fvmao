import { FaInstagram, FaYoutube, FaKickstarterK, FaPaypal } from "react-icons/fa"
import { SiEpicgames } from "react-icons/si"

export default function Hero() {
  return (
    <section className="w-full pt-20 md:pt-16 pb-20 px-6 bg-gradient-to-b from-zinc-900 to-black text-white">
      <div className="max-w-3xl mx-auto text-center">

        {/* Título principal */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2 md:mb-4">
          mis redes oficiales
        </h1>

        {/* Subtexto */}
        <p className="mt-3 md:mt-6 text-base md:text-lg text-gray-400">
          Sígueme para formar parte de mi comunidad
        </p>

        {/* Botones */}
        <div className="mt-10 md:mt-16 flex flex-col gap-4 md:gap-6 items-center">

          {/* Kick (PRIMERO) */}
          <a
            href="https://kick.com/fvmao"
            target="_blank"
            className="w-[85%] md:w-[60%] bg-[#53FC18] hover:bg-[#3ec412] transition-all py-4 rounded-xl font-semibold text-lg shadow-lg flex items-center justify-center gap-3 text-black relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-20 transition-all"></span>
            <FaKickstarterK className="text-2xl" />
            <span className="font-medium tracking-wide">Kick</span>
          </a>

          {/* YouTube (SEGUNDO) */}
          <a
            href="https://youtube.com/@fvmao"
            target="_blank"
            className="w-[85%] md:w-[60%] bg-[#FF0000] hover:bg-[#cc0000] transition-all py-4 rounded-xl font-semibold text-lg shadow-lg flex items-center justify-center gap-3 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-20 transition-all"></span>
            <FaYoutube className="text-2xl" />
            <span className="font-medium tracking-wide">YouTube</span>
          </a>

          {/* Instagram (TERCERO) */}
          <a
            href