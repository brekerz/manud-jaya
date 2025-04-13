"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ArticleSection() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/data/articles.json")
      .then((res) => res.json())
      .then(setArticles)
      .catch((err) => console.error("Article fetch error:", err));
  }, []);

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Ada Apa Dengan Desa Manud Jaya?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {articles.map((post, index) => {
  const slug = post.title.toLowerCase().replace(/\s+/g, "-");
  return (
    <Link href={`/artikel/${slug}`} key={index}>
      <div className="border rounded-lg shadow bg-white overflow-hidden cursor-pointer hover:shadow-md transition-all">
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <span className="text-sm text-gray-500">{post.author}</span>
          <h3 className="text-lg font-semibold mt-1">{post.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{post.summary}</p>
        </div>
      </div>
    </Link>
  );
})}
      </div>
    </section>
  );
}