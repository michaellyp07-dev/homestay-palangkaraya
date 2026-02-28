import { useEffect, useState } from "react"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navTextColor = scrolled ? "text-neutral-900" : "text-white"

  return (
    <header
     className={`fixed w-full z-50 transition-all duration-500 ${
    scrolled
      ? "bg-white/95 backdrop-blur-md shadow-md border-b border-neutral-200"
      : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <div className={`text-lg font-semibold ${navTextColor}`}>
          Homestay Palangkaraya
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide">
  <a
  href="#tentang"
  className={`${navTextColor} hover:opacity-60 transition-all duration-300`}
>
  Tentang
</a>

  <a
  href="#fasilitas"
  className={`${navTextColor} hover:opacity-60 transition-all duration-300`}
>
 Fasilitas
</a>

<a
  href="#gallery"
  className={`${navTextColor} hover:opacity-60 transition-all duration-300`}
>
  Galeri
</a>

  <a
    href="https://wa.me/628134493193"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-amber-600 hover:bg-amber-500 text-white px-5 py-2 rounded-md transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
  >
    Reservasi
  </a>
</nav>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden text-2xl ${navTextColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-center gap-6 py-8 text-neutral-800 font-medium">
            <a href="#tentang" onClick={() => setMenuOpen(false)}>
              Tentang
            </a>
            <a href="#fasilitas" onClick={() => setMenuOpen(false)}>
              Fasilitas
            </a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>
              Galeri
            </a>
            <a
              href="https://wa.me/628134493193"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2 rounded-md tracking-wide transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Reservasi
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar