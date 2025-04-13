"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export default function ArtikelPage() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  // Fetch the articles
  useEffect(() => {
    fetch("/data/articles.json")
      .then((res) => res.json())
      .then(setArticles)
      .catch((err) => console.error("Article fetch error:", err));
  }, []);

  // Calculate pagination
  const totalArticles = articles.length;
  const totalPages = Math.ceil(totalArticles / articlesPerPage);

  // Get the articles to display for the current page
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Handle page navigation
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Navbar />
      <section className="max-w-6xl mx-auto py-16 px-4">
        {/* Title and Description */}
        <h2 className="text-4xl font-extrabold text-center text-teal-600 mb-4">
          Kabar Terbaru di Desa Manud Jaya
        </h2>
        <p className="text-xl text-center text-gray-600 mb-10">
          Tetaplah terhubung dengan aktifitas seru, informasi pending, dan acara eksklusif yang kami hadirkan
          khusus untuk Anda.
        </p>
        
        {/* Article Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentArticles.map((post, index) => {
            return (
              <Link href={`/artikel/${post.id}`} key={index}>
              <div className="border rounded-lg shadow bg-white overflow-hidden cursor-pointer hover:shadow-md transition-all">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="text-sm text-gray-500">{post.category}</span>
                  <span className="text-sm text-gray-400 ml-2">{post.date}</span>
                  <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{post.summary}</p>
                  <div className="mt-4">
                    <Link
                      href={`/artikel/${post.id}`}
                      className="text-teal-600 font-semibold hover:underline"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
            );
          })}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between mt-6">
          <button onClick={prevPage} disabled={currentPage === 1} className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300">
            Previous
          </button>
          <span className="self-center text-lg">
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={nextPage} disabled={currentPage === totalPages} className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300">
            Next
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
