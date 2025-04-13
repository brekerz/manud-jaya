'use client';

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export default function AkomodasiPage() {
  const [showAll, setShowAll] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const penginapanData = [
    { name: "Pondok Manud Indah", price: "Rp350.000/malam", image: "/assets/penginapan1.PNG", description: "Tengah Sawah" },
    { name: "Villa Lembah Sejuk", price: "Rp1.500.000/malam", image: "/assets/penginapan2.jpg", description: "Pegunungan dengan udara sejuk" },
    { name: "Homestay Sawah Rindang", price: "Rp250.000/malam", image: "/assets/penginapan3.PNG", description: "Dikelilingi sawah hijau" },
    { name: "Glamping Bukit Manud", price: "Rp2.000.000/malam", image: "/assets/penginapan4.jpg", description: "Dekat gunung" },
    { name: "Cottage Bambu Asri", price: "Rp500.000/malam", image: "/assets/penginapan5.jpg", description: "Di kaki gunung" },
    { name: "Rumah Joglo Heritage", price: "Rp800.000/malam", image: "/assets/penginapan6.jpg", description: "Rumah joglo tradisional" },
    { name: "Lumbung Padi Retreat", price: "Rp400.000/malam", image: "/assets/penginapan7.jpg", description: "Dekat hamparan sawah" },
    { name: "Sungai Riverside Lodge", price: "Rp700.000/malam", image: "/assets/penginapan8.jpg", description: "Di tepi sungai" },
    { name: "Hutan Pinus Eco Lodge", price: "Rp950.000/malam", image: "/assets/penginapan9.jpg", description: "Dekat hutan pinus" },
  ];

  const displayedPenginapan = showAll ? penginapanData : penginapanData.slice(0, 6);

  return (
    <div className="bg-gray-50">
      <Navbar />
      <section className="relative w-full h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('/assets/beranda_akomodasi.jpg')" }}>
        <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center px-4">
          <div className="text-center text-white max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Temukan Penginapan Nyaman di Dekat Desa Manud Jaya</h1>
            <p className="text-lg md:text-xl mb-6">
              Desa Manud Jaya menawarkan berbagai pilihan penginapan yang cocok untuk liburan Anda. Mulai dari homestay tradisional hingga villa mewah, semua dikelilingi oleh suasana alam yang hijau dan budayanya yang kaya.
            </p>
            <button
              onClick={() => setModalIsOpen(true)} // Membuka modal
              className="bg-lime-600 text-white font-semibold rounded px-6 py-2 hover:bg-lime-700 transition"
            >
              Lihat Penginapan
            </button>
          </div>
        </div>
      </section>

      {/* Rekomendasi Penginapan */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Rekomendasi Penginapan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card Penginapan */}
          <div className="border rounded-lg shadow-lg overflow-hidden">
            <img src="/assets/penginapan1.PNG" alt="Pondok Manud Indah" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Pondok Manud Indah</h3>
              <p className="text-sm text-gray-600">Tengah Sawah</p>
              <p className="text-xl text-lime-600 font-semibold">Rp350.000/malam</p>
              <Link href="#" className="bg-lime-600 text-white px-6 py-2 mt-4 inline-block rounded hover:bg-lime-700 transition">
                Lihat Detail & Booking
              </Link>
            </div>
          </div>

          {/* Penginapan 2 */}
          <div className="border rounded-lg shadow-lg overflow-hidden">
            <img src="/assets/penginapan2.jpg" alt="Villa Lembah Sejuk" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Villa Lembah Sejuk</h3>
              <p className="text-sm text-gray-600">Pegunungan dengan udara sejuk</p>
              <p className="text-xl text-lime-600 font-semibold">Rp1.500.000/malam</p>
              <Link href="#" className="bg-lime-600 text-white px-6 py-2 mt-4 inline-block rounded hover:bg-lime-700 transition">
                Lihat Detail & Booking
              </Link>
            </div>
          </div>

          {/* Penginapan 3 */}
          <div className="border rounded-lg shadow-lg overflow-hidden">
            <img src="/assets/penginapan3.PNG" alt="Homestay Sawah Rindang" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Homestay Sawah Rindang</h3>
              <p className="text-sm text-gray-600">Dikelilingi sawah hijau</p>
              <p className="text-xl text-lime-600 font-semibold">Rp250.000/malam</p>
              <Link href="#" className="bg-lime-600 text-white px-6 py-2 mt-4 inline-block rounded hover:bg-lime-700 transition">
                Lihat Detail & Booking
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
        <button
              onClick={() => setModalIsOpen(true)} // Membuka modal
              className="bg-lime-600 text-white font-semibold rounded px-6 py-2 hover:bg-lime-700 transition"
            >
               Lihat Lebih Banyak Penginapan
            </button>
        
        </div>
           {/* Kelebihan Kami */}
           <section className="bg-white py-16 px-4">
  <h2 className="text-3xl font-bold text-center mb-12">Memberikan Anda Ketenangan Pikiran</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
    {/* Keuntungan 1 */}
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-lime-600 text-6xl mb-4">
        <i className="fas fa-leaf"></i>
      </div>
      <h3 className="text-lg font-semibold mb-2">Nyaman</h3>
      <p className="text-sm text-gray-600">
        Nikmati suasana desa yang tenang dengan udara segar, pepohonan hijau, dan jauh dari hiruk-pikuk kota.
      </p>
    </div>

    {/* Keuntungan 2 */}
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-lime-600 text-6xl mb-4">
        <i className="fas fa-shield-alt"></i>
      </div>
      <h3 className="text-lg font-semibold mb-2">Keamanan Ekstra</h3>
      <p className="text-sm text-gray-600">
        Seluruh penginapan dikelola dengan standar keamanan tinggi, dilengkapi dengan sistem keamanan 24 jam.
      </p>
    </div>

    {/* Keuntungan 3 */}
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-lime-600 text-6xl mb-4">
        <i className="fas fa-star"></i>
      </div>
      <h3 className="text-lg font-semibold mb-2">Sentuhan Modern</h3>
      <p className="text-sm text-gray-600">
        Meninga di rumah-rumah tradisional dengan desain khas budaya lokal, namun tetap memiliki fasilitas modern.
      </p>
    </div>

    {/* Keuntungan 4 */}
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-lime-600 text-6xl mb-4">
        <i className="fas fa-tags"></i>
      </div>
      <h3 className="text-lg font-semibold mb-2">Harga Terbaik</h3>
      <p className="text-sm text-gray-600">
        Dapatkan harga terbaik untuk penginapan dengan berbagai pilihan, mulai dari homestay, villa, hingga resort.
      </p>
    </div>

    {/* Keuntungan 5 */}
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-lime-600 text-6xl mb-4">
        <i className="fas fa-map-marker-alt"></i>
      </div>
      <h3 className="text-lg font-semibold mb-2">Lokasi Strategis</h3>
      <p className="text-sm text-gray-600">
        Terletak dekat dengan objek wisata alam, area persawahan, serta pusat budaya dan kuliner Desa Manud Jaya.
      </p>
    </div>
  </div>
</section>

      </section>

   
      {/* Testimoni Pelanggan */}
      <section className="py-16 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Apa kata orang tentang kita?</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Testimonial 1 */}
          <div className="max-w-sm text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <img src="/assets/testimonial1.jpg" alt="Asep" className="w-16 h-16 rounded-full mx-auto" />
            </div>
            <p className="text-gray-600 mb-4">
              "Pengalaman menginap yang luar biasa! Saya dan keluarga menginap di Pondok Manud Indah, tempatnya sangat nyaman, udara segar, dan jauh dari kebisingan kota."
            </p>
            <span className="text-lime-600 font-semibold">Asep</span>
            <p className="text-sm text-gray-500">Bandung</p>
          </div>

          {/* Testimonial 2 */}
          <div className="max-w-sm text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <img src="/assets/testimonial2.jpg" alt="Agus" className="w-16 h-16 rounded-full mx-auto" />
            </div>
            <p className="text-gray-600 mb-4">
              "Suasana desa yang menenangkan. Menginap di Homestay Sawah Rindang benar-benar memberikan pengalaman yang berbeda."
            </p>
            <span className="text-lime-600 font-semibold">Agus</span>
            <p className="text-sm text-gray-500">Jakarta</p>
          </div>

          {/* Testimonial 3 */}
          <div className="max-w-sm text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <img src="/assets/testimonial3.jpg" alt="Nur" className="w-16 h-16 rounded-full mx-auto" />
            </div>
            <p className="text-gray-600 mb-4">
              "Tempat terbaik untuk bersantai! Saya memilih Villa Lembah Sejuk untuk liburan bersama pasangan. Tempatnya sangat eksklusif, ada private pool juga."
            </p>
            <span className="text-lime-600 font-semibold">Nur</span>
            <p className="text-sm text-gray-500">Surabaya</p>
          </div>
        </div>
      </section>

      {/* Modal untuk menampilkan lebih banyak penginapan */}
      {modalIsOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              onClick={() => setModalIsOpen(false)} // Menutup modal
              className="modal-close"
            >
              &times; {/* Close icon */}
            </button>
            <h2 className="text-3xl font-bold text-center mb-6">Penginapan di Desa Manud Jaya</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {displayedPenginapan.map((penginapan, index) => (
                <div key={index} className="border rounded-lg shadow-lg overflow-hidden">
                  <img src={penginapan.image} alt={penginapan.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{penginapan.name}</h3>
                    <p className="text-sm text-gray-600">{penginapan.description}</p>
                    <p className="text-xl text-lime-600 font-semibold">{penginapan.price}</p>
                    <Link href="#" className="bg-lime-600 text-white px-6 py-2 mt-4 inline-block rounded hover:bg-lime-700 transition">
                      Lihat Detail & Booking
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)} // Toggle view untuk lebih banyak penginapan
                className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
              >
                {showAll ? "Tutup" : "Lihat Lebih Banyak Penginapan"}
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
