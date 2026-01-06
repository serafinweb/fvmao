import { FiMail } from "react-icons/fi"

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 py-8 px-6 mt-0 relative overflow-hidden">

      {/* Línea superior animada */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-pulse"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Derechos */}
        <p className="text-xs tracking-wide opacity-80">
          © {new Date().getFullYear()} FVMAO — Todos los derechos reservados.
        </p>

        {/* Contacto con icono estilo redes */}
        <a
          href="mailto:infofvmao@gmail.com"
          className="text-xs flex items-center gap-2 hover:text-purple-400 transition tracking-wide"
        >
          <FiMail className="text-purple-400 text-sm" />
          Contacto
        </a>

      </div>
    </footer>
  )
}