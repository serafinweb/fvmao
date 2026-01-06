import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col">

      <Header />

      {/* Línea animada entre header y hero */}
      <div className="w-full h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-pulse"></div>

      <div className="flex-grow">
        <Hero />
      </div>

      <Footer />
    </div>
  )
}

export default App