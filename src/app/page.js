import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TourCard from "@/components/ui/tour-card";
import Image from "next/image";
import GallerySection from "@/components/ui/gallery-section";
import ArticleSection from "@/components/ui/article-section";

import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
  className="w-full h-[90vh] bg-cover bg-center relative"
  style={{ backgroundImage: "url('/assets/Foto_Beranda.PNG')" }}
>
  <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center px-4">
    <div className="text-center text-white max-w-2xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Selamat Datang di Desa Manud Jaya
      </h1>
      <p className="text-lg md:text-xl">
        Desa Manud Jaya kaya akan keindahan alam yang masih terjaga dan aktivitas yang menyenangkan...
      </p>
    </div>
  </div>
</section>

      {/* Search Filter */}
      <section className="max-w-5xl mx-auto -mt-16 z-10 relative px-4">
        <div className="bg-white shadow-lg rounded-xl p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <input className="border rounded px-4 py-2" placeholder="Tujuan" />
          <input className="border rounded px-4 py-2" placeholder="Tema" />
          <input className="border rounded px-4 py-2" placeholder="Waktu" />
          <button className="bg-lime-500 text-white font-semibold rounded px-4 py-2">Search</button>
        </div>
      </section>

      {/* Aktivitas Wisata Favorit */}
      <section className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Aktivitas Wisata Favorit</h2>
        <p className="text-center text-gray-600 mb-8">
          Rasakan petualangan seru, nikmati keindahan alam, dan cita rasa kuliner khas.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {["Alam", "Kuliner", "Kerajinan", "Aktivitas Air", "Paket"].map((item) => (
            <button key={item} className="px-4 py-2 border rounded-full hover:bg-green-200">{item}</button>
          ))}
        </div>
        {/* Placeholder card destinasi, bisa nanti diganti komponen <TourCard /> */}
        <section className="w-full h-[60vh] relative my-10 rounded-xl overflow-hidden">
  <img
    src="/assets/curug.jpeg"
    alt="Curug Manud Jaya"
    className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
  />
  <div className="absolute inset-0 bg-opacity-40 flex items-start justify-start p-10">
    <div className="text-white max-w-md">
      <h2 className="text-3xl md:text-5xl font-bold mb-2">Curug</h2>
      <p className="text-md md:text-lg">
        Curug adalah air terjun yang mempesona, dikelilingi oleh alam yang asri dan udara segar...
      </p>
    </div>
  </div>
</section>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <TourCard
    imageUrl="/assets/Bukit_Cinta.jpg"
    title="Bukit Cinta"
    duration="2 jam"
    price="Rp 15.000,-"
    rating="4.8"
  />
  <TourCard
    imageUrl="/assets/alska.jpg"
    title="Alaska Westminster"
    duration="3 jam"
    price="Rp 15.000,-"
    rating="4.7"
  />
  <TourCard
    imageUrl="/assets/sample7.jpg"
    title="Greenwich River Thames"
    duration="3 jam"
    price="Rp 15.000,-"
    rating="4.9"
  />
</div>
      </section>
      <GallerySection />
      <ArticleSection />
      {/* Galeri Wisata, Artikel, dll bisa disusul di step berikut */}
      <Footer />
    </>
  );
}