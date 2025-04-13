export default function HighlightSection() {
    return (
      <section className="max-w-6xl mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Gambar */}
        <div className="w-full md:w-1/2">
          <img
            src="/assets/curug.jpg"
            alt="Curug Manud Jaya"
            className="rounded-xl shadow-lg object-cover w-full h-[300px] md:h-[400px]"
          />
        </div>
  
        {/* Teks */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nikmati Keindahan Curug Manud Jaya</h2>
          <p className="text-gray-600 mb-6">
            Curug Manud Jaya adalah destinasi andalan desa yang menyajikan panorama air terjun alami, udara segar, dan ketenangan alam yang luar biasa.
          </p>
          <button className="bg-lime-600 text-white px-6 py-2 rounded hover:bg-lime-700 transition">
            Lihat Detail
          </button>
        </div>
      </section>
    );
  }