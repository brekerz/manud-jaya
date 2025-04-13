"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function GallerySection() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetch("/data/gallery.json")
      .then((res) => res.json())
      .then(setGallery)
      .catch((err) => console.error("Gallery fetch error:", err));
  }, []);

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Galeri Wisata</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {gallery.map((item, index) => (
          <div key={index} className="aspect-square overflow-hidden rounded-lg">
            <a href={item.imageUrl} target="_blank" rel="noopener noreferrer">
            <Image
              src={item.imageUrl}
              alt={item.alt}
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}