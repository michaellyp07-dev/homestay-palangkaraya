import Navbar from "./components/Navbar"
import heroImage from "./assets/images/hero.png"
import ruangTamu from "./assets/images/ruang-tamu.png"
import kamarUtama from "./assets/images/kamar-utama.png"
import kamar1 from "./assets/images/kamar-1.png"
import kamar2 from "./assets/images/kamar-2.png"
import dapur from "./assets/images/dapur.png"
import kamarMandi from "./assets/images/kamar-mandi.png"
import teras from "./assets/images/teras.png"
import parkir from "./assets/images/parkir.png"
import { useEffect, useState } from "react"
function App() {

  const [showWA, setShowWA] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
  const handleScroll = () => {
    const currentScroll = window.scrollY

    if (Math.abs(currentScroll - lastScroll) < 10) return

    if (currentScroll > lastScroll && currentScroll > 100) {
      setShowWA(false)
    } else {
      setShowWA(true)
    }

    setLastScroll(currentScroll)
  }

  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
}, [lastScroll])

  // Reveal animation
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.15 }
    )

    reveals.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <Navbar />

      {/* ================= HERO ================= */}
    <section
  id="home"
  className="relative h-screen flex items-center justify-center overflow-hidden"
>

  {/* Background Image */}
  <div className="absolute inset-0 overflow-hidden">
    <img
  src={heroImage}
  alt="Tampak depan Homestay Palangkaraya"
  className="w-full h-full object-cover hero-zoom brightness-105"
/>
  </div>

  {/* Cinematic Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>

  {/* Content */}
  <div className="relative z-10 text-center px-6 max-w-3xl">
    <p className="text-xs tracking-[0.25em] text-amber-400 mb-4">
      PRIVATE FAMILY HOUSE
    </p>

    <h1 className="text-5xl md:text-7xl font-heading text-white leading-[1.1] tracking-tight mb-6 drop-shadow-2xl">
  Rasakan Nyaman <br />
  Seperti di Rumah Sendiri
</h1>

    <p className="text-neutral-300 text-lg mb-8 max-w-xl mx-auto tracking-wide">
     Tempat pulang sementara bagi keluarga Anda.
    </p>

    <div className="flex justify-center gap-4">
     <a
  href="https://wa.me/628134493193"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-amber-600 hover:bg-amber-500 hover:scale-105 transition-all duration-300 text-white px-8 py-3 rounded-md text-sm font-medium tracking-wide shadow-lg shadow-amber-600/30"
>
 Reservasi via WhatsApp
</a>

     <a
  href="#fasilitas"
  className="border border-white/30 bg-white/5 backdrop-blur-sm text-white px-8 py-3 rounded-md text-sm hover:bg-white/10 transition-all duration-300"
>
  Lihat Fasilitas
</a>
    </div>
  </div>
</section>


    {/* ================= FASILITAS ================= */}
<section id="fasilitas" className="py-32 bg-neutral-50 reveal">
  <div className="max-w-screen-xl mx-auto px-6">

    <div className="text-center mb-20">
   <h2 className="text-4xl md:text-6xl font-heading tracking-tight leading-[1.1] mb-6 drop-shadow-xl">
        Fasilitas Unggulan
      </h2>
      <p className="text-neutral-500 max-w-2xl mx-auto">
        Dirancang untuk mendukung kenyamanan keluarga selama menginap.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

      <div className="border border-neutral-200 rounded-2xl p-10 bg-white shadow-sm hover:shadow-md transition duration-500">
         <h3 className="text-xl font-heading tracking-tight mb-4">
          3 Kamar Nyaman
        </h3>
        <p className="text-sm text-neutral-600 leading-relaxed">
          Dua kamar ber-AC untuk kenyamanan maksimal keluarga.
        </p>
      </div>

      <div className="border border-neutral-200 rounded-2xl p-10 bg-white shadow-sm hover:shadow-md transition duration-500">
       <h3 className="text-xl font-heading tracking-tight mb-4">
          Parkir Pribadi
        </h3>
        <p className="text-sm text-neutral-600 leading-relaxed">
          Area parkir aman untuk kendaraan keluarga.
        </p>
      </div>

      <div className="border border-neutral-200 rounded-2xl p-10 bg-white shadow-sm hover:shadow-md transition duration-500">
        <h3 className="text-xl font-heading tracking-tight mb-4">
          WiFi Stabil
        </h3>
        <p className="text-sm text-neutral-600 leading-relaxed">
          Koneksi internet yang mendukung kebutuhan harian.
        </p>
      </div>

      <div className="border border-neutral-200 rounded-2xl p-10 bg-white shadow-sm hover:shadow-md transition duration-500">
         <h3 className="text-xl font-heading tracking-tight mb-4">
          Lingkungan Tenang
        </h3>
         <p className="text-neutral-600 leading-relaxed text-sm">
          Berada di kawasan hunian yang aman dan nyaman.
        </p>
      </div>

    </div>
  </div>
</section>
<div className="max-w-screen-xl mx-auto px-6">
 <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-10"></div>
</div>
      


      {/* ================= KENAPA MEMILIH KAMI ================= */}
      <section id="tentang" className="py-32 bg-neutral-50 reveal">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading tracking-tight leading-[1.1] mb-6 drop-shadow-xl">
              Kenapa Memilih Kami
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed max-w-2xl mx-auto mt-4">
  Dirancang untuk keluarga yang mengutamakan kenyamanan, privasi, dan ketenangan.
</p>
          </div>

         <div className="grid md:grid-cols-3 gap-10 mt-12">
  
  <div className="bg-white rounded-2xl p-10 border border-neutral-200/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500 ease-out">
    <h3 className="text-xl font-heading tracking-tight mb-4">
      Privasi yang Tenang
    </h3>
    <p className="text-neutral-600 leading-relaxed text-sm">
      Satu rumah sepenuhnya untuk keluarga Anda, tanpa berbagi ruang dengan tamu lain.
    </p>
  </div>

  <div className="bg-white rounded-2xl p-10 border border-neutral-200/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500 ease-out">
    <h3 className="text-xl font-heading tracking-tight mb-4">
      Lingkungan Nyaman
    </h3>
    <p className="text-neutral-600 leading-relaxed text-sm">
      Berada di kawasan perumahan yang aman, tenang, dan cocok untuk keluarga.
    </p>
  </div>

  <div className="bg-white rounded-2xl p-10 border border-neutral-200/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500 ease-out">
    <h3 className="text-xl font-heading tracking-tight mb-4">
      Fasilitas Siap Pakai
    </h3>
    <p className="text-neutral-600 leading-relaxed text-sm">
      Dilengkapi AC, WiFi, dapur, dan ruang keluarga untuk kenyamanan selama menginap.
    </p>
  </div>

</div>
        </div>
      </section>
    <div className="max-w-screen-xl mx-auto px-6">
  <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-10"></div>
</div>
      

      {/* ================= TESTIMONI ================= */}
<section className="py-28 bg-neutral-50 reveal">
  <div className="max-w-screen-xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-6xl font-heading tracking-tight leading-[1.1] mb-6 drop-shadow-xl">
        Apa Kata Tamu Kami
      </h2>
      <p className="text-neutral-500">
        Pengalaman nyata dari keluarga yang sudah menginap.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-10">
      
      {/* Card 1 */}
     <div className="bg-white rounded-2xl p-10 border border-neutral-200/60 shadow-sm hover:shadow-md transition-all duration-500 ease-out">
    <p className="=text-neutral-700 leading-relaxed text-[15px] mb-6">
      “Rumahnya bersih, nyaman, dan terasa seperti rumah sendiri. Anak-anak bisa istirahat dengan tenang.”
    </p>
  <div className="text-sm text-neutral-500">
  <span className="font-medium text-neutral-700">Andi</span>
  <span className="mx-2">•</span>
  Tamu Keluarga
</div>
  </div>

      {/* Card 2 */}
       <div className="bg-white rounded-2xl p-10 border border-neutral-200/60 shadow-sm hover:shadow-md transition-all duration-500 ease-out">
    <p className="text-neutral-700 leading-relaxed text-[15px] mb-6">
      “Lingkungannya aman dan tidak bising. Cocok sekali untuk keluarga yang ingin suasana tenang.”
    </p>
    <div className="text-sm text-neutral-500">
  <span className="font-medium text-neutral-700">Rina</span>
  <span className="mx-2">•</span>
  Tamu Keluarga
</div>
  </div>

      {/* Card 3 */}
     <div className="bg-white rounded-2xl p-10 border border-neutral-200/60 shadow-sm hover:shadow-md transition-all duration-500 ease-out">
    <p className="text-neutral-700 leading-relaxed text-[15px] mb-6">
      “Fasilitas lengkap dan tertata rapi. Kami merasa sangat nyaman selama menginap.”
    </p>
    <div className="text-sm text-neutral-500">
  <span className="font-medium text-neutral-700">adit</span>
  <span className="mx-2">•</span>
  Tamu Keluarga
</div>
  </div>

    </div>
  </div>
</section>
<div className="max-w-screen-xl mx-auto px-6">
  <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-10"></div>
</div>

{/* ================= GALLERY ================= */}
{/* ================= GALLERY ================= */}
<section id="gallery" className="py-32 bg-neutral-50 text-center reveal">
  
  <h2 className="text-4xl md:text-6xl font-heading tracking-tight leading-[1.1] mb-6">
    Galeri Properti
  </h2>

  <p className="text-neutral-600 text-lg leading-relaxed max-w-2xl mx-auto mb-16">
    Setiap sudut dirancang untuk kenyamanan keluarga dan suasana yang tenang.
  </p>

  <div className="max-w-screen-xl mx-auto px-6">
    <div className="grid md:grid-cols-3 gap-8">

      {[
        { src: ruangTamu, alt: "Ruang tamu Homestay Palangkaraya" },
        { src: kamarUtama, alt: "Kamar utama Homestay Palangkaraya" },
        { src: kamar1, alt: "Kamar tidur single pertama" },
        { src: kamar2, alt: "Kamar tidur single kedua" },
        { src: dapur, alt: "Area dapur Homestay Palangkaraya" },
        { src: kamarMandi, alt: "Kamar mandi bersih dan terang" },
        { src: teras, alt: "Teras rumah Homestay Palangkaraya" },
        { src: parkir, alt: "Area parkir mobil Homestay Palangkaraya" },
      ].map((image, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-2xl"
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition duration-500"></div>
        </div>
      ))}

    </div>
  </div>

</section>

      {/* ================= FINAL CTA ================= */}
<section id="reservasi" className="relative py-36 bg-neutral-900 text-white text-center reveal">

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black opacity-90"></div>

  <div className="relative z-10 max-w-3xl mx-auto px-6">

    <h2 className="text-4xl md:text-6xl font-heading tracking-tight leading-[1.1] mb-6 drop-shadow-xl">
      Siap Menginap Bersama Keluarga?
    </h2>

 <p className="text-neutral-300 text-lg mb-6 max-w-xl mx-auto tracking-wide">
  Private house 3 kamar (2 AC) cocok untuk keluarga.
</p>

<p className="text-amber-400 font-semibold mb-8">
  Mulai Rp 500.000 / malam
</p>

    <a
      href="https://wa.me/628134493193?text=Halo%2C%20saya%20ingin%20reservasi%20Homestay%20Palangkaraya."
      target="_blank"
      rel="noopener noreferrer"
     className="inline-block bg-amber-600 hover:bg-amber-500 hover:shadow-2xl hover:shadow-amber-600/40 hover:scale-[1.03] active:scale-95 transition-all duration-500 ease-out px-10 py-4 rounded-md text-lg font-medium tracking-wide"
    >
      Tanya Ketersediaan via WhatsApp
    </a>
    
  </div>

</section>
<div className="max-w-screen-xl mx-auto px-6">
  <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-10"></div>
</div>

      {/* ================= LOKASI ================= */}
<section id="lokasi" className="py-32 bg-white reveal">
  <div className="max-w-screen-xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-heading tracking-tight leading-[1.15] mb-6">
      Lokasi Homestay
    </h2>
    <p className="text-neutral-=500 mb-8">
      Berada di kawasan perumahan yang aman & nyaman, Palangkaraya.
    </p>

    {/* Google Maps Embed */}
    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg mb-6">
      <iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.2142649452363!2d113.93921571533657!3d-2.1848734335972396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df4f0dd1d5fd1dd%3A0x9eefcb84dc87bc78!2sPalangkaraya%2C%20Central%20Kalimantan!5e0!3m2!1sen!2sid!4v1699659312657!5m2!1sen!2sid"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>

    {/* Open in Google Maps */}
    <a
      href="https://maps.app.goo.gl/PfAqbxezdA2oy2hA6"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-amber-600 hover:bg-amber-500 transition-all duration-300 text-white px-8 py-3 rounded-md"
    >
      Buka di Google Maps
    </a>
  </div>
</section>
<div className="max-w-screen-xl mx-auto px-6">
  <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-10"></div>
</div>

{/* ================= FOOTER ================= */}
<footer className="bg-neutral-950 text-neutral-400 py-16">
  <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-3 gap-12">

    {/* Brand */}
    <div>
      <h3 className="text-xl md:text-2xl font-heading tracking-tight ${navTextColor}`}">
        Homestay Palangkaraya
      </h3>
      <p className="text-sm leading-relaxed">
    Rumah privat dengan tiga kamar nyaman, dirancang untuk keluarga yang mengutamakan ketenangan dan privasi.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-white font-medium mb-4">Navigasi</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#fasilitas" className="hover:text-white">Fasilitas</a></li>
        <li><a href="#reservasi" className="hover:text-white">Reservasi</a></li>
        <li><a href="#gallery" className="hover:text-white">Galeri</a></li>
        <li><a href="#lokasi" className="hover:text-white">Lokasi</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h4 className="text-white font-medium mb-4">Kontak</h4>
      <p className="text-sm mb-2">WhatsApp: 0813-4493-193</p>
      <a
        href="https://maps.app.goo.gl/PfAqbxezdA2oy2hA6"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm hover:text-white"
      >
        Lihat di Google Maps
      </a>
      <p className="text-xs mt-6 text-neutral-500">
        Part of Blessed Living Group
      </p>
    </div>

  </div>

  <div className="border-t border-neutral-800 mt-12 pt-6 text-center text-xs text-neutral-500">
    © {new Date().getFullYear()} Homestay Palangkaraya. All rights reserved.
  </div>
</footer>
{/* ================= FLOATING WHATSAPP ================= */}
<a
  href="https://wa.me/628134493193?text=Halo%2C%20saya%20ingin%20tanya%20ketersediaan%20Homestay."
  target="_blank"
  rel="noopener noreferrer"
  className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[999] bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 flex items-center gap-2 ${
  showWA ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
}`}
>
  <span className="text-lg">💬</span>
<span className="text-sm font-medium hidden md:inline">
  Chat WhatsApp
</span>
</a>
    </div>
  )
}

export default App