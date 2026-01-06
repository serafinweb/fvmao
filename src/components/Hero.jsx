import { FaInstagram, FaTiktok, FaYoutube, FaKickstarterK, FaPaypal } from "react-icons/fa"
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

          {/* Instagram */}
          <a
            href="https://instagram.com/fvmao"
            target="_blank"
            className="w-[85%] md:w-[60%] bg-[#E1306C] hover:bg-[#c02557] transition-all py-4 rounded-xl font-semibold text-lg shadow-lg flex items-center justify-center gap-3 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-20 transition-all"></span>
            <FaInstagram className="text-2xl" />
            <span className="font-medium tracking-wide">Instagram</span>
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com/@fvmao"
            target="_blank"
            className="w-[85%] md:w-[60%] bg-[#69C9D0] hover:bg-[#4ab3b9] transition-all py-4 rounded-xl font-semibold text-lg shadow-lg flex items-center justify-center gap-3 text-black relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-20 transition-all"></span>
            <FaTiktok className="text-2xl" />
            <span className="font-medium tracking-wide">TikTok</span>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@fvmao"
            target="_blank"
            className="w-[85%] md:w-[60%] bg-[#FF0000] hover:bg-[#cc0000] transition-all py-4 rounded-xl font-semibold text-lg shadow-lg flex items-center justify-center gap-3 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-20 transition-all"></span>
            <FaYoutube className="text-2xl" />
            <span className="font-medium tracking-wide">YouTube</span>
          </a>

          {/* Kick */}
          <a
            href="https://kick.com/fvmao"
            target="_blank"
            className="w-[85%] md:w-[60%] bg-[#53FC18] hover:bg-[#3ec412] transition-all py-4 rounded-xl font-semibold text-lg shadow-lg flex items-center justify-center gap-3 text-black relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-20 transition-all"></span>
            <FaKickstarterK className="text-2xl" />
            <span className="font-medium tracking-wide">Kick</span>
          </a>

          {/* PayPal */}
          <a
            href="https://paypal.me/elcrushdetucrush"
            target="_blank"
            className="w-[85%] md:w-[60%] bg-[#003087] hover:bg-[#00246a] transition-all py-4 rounded-xl font-semibold text-lg shadow-lg flex items-center justify-center gap-3 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-20 transition-all"></span>
            <FaPaypal className="text-2xl" />
            <span className="font-medium tracking-wide">Donaciones</span>
          </a>

        </div>

        {/* Código FVMAO */}
        <p className="mt-10 md:mt-16 text-sm text-gray-400">
          Utiliza el código <span className="text-purple-400 font-bold">FVMAO</span> para apoyarme.
        </p>

        {/* Botón Fortnite */}
        <div className="mt-4 flex justify-center">
          <a
            href="https://www.fortnite.com/item-shop"
            target="_blank"
            className="w-[85%] md:w-[40%] bg-pink-500 hover:bg-pink-600 transition-all py-4 rounded-xl font-semibold text-lg shadow-lg flex items-center justify-center gap-3 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-20 transition-all"></span>
            <SiEpicgames className="text-2xl text-white" />
            <span className="font-medium tracking-wide">Tienda de Fortnite</span>
          </a>
        </div>

      </div>
    </section>
  )
}