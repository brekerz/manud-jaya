'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function ArtikelDetailPage() {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(null);
  const [isClient, setIsClient] = useState(false);  // Track if the component is mounted on the client side
  const router = useRouter();  // Initialize the router

  // Make sure that the useRouter hook is called after the component is mounted
  useEffect(() => {
    setIsClient(true);  // Set to true after component mounts
  }, []);

  // Once the component has mounted on the client, we can safely access router.query
  useEffect(() => {
    if (isClient && router.query.id) {
      setId(router.query.id);  // Set the ID from the URL
    }
  }, [isClient, router.query]);

  // Fetch article data once we have the 'id'
  useEffect(() => {
    if (id) {
      fetch(`/data/articles.json`)
        .then((res) => res.json())
        .then((data) => {
          const foundArticle = data.find((article) => article.id === id);
          setArticle(foundArticle);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching article:', err);
          setLoading(false);
        });
    }
  }, [id]);

  // If the article is still loading, show a loading message
  if (loading) {
    return (
      <>
        <Navbar />
        <div className="max-w-6xl mx-auto py-16 px-4 text-center">
          <p>Loading...</p>
        </div>
        <Footer />
      </>
    );
  }

  // If no article is found, display an error message
  if (!article) {
    return (
      <>
        <Navbar />
        <div className="max-w-6xl mx-auto py-16 px-4 text-center">
          <p>Article not found!</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="article-detail">
          <h2 className="text-4xl font-extrabold text-center text-teal-600 mb-4">{article.title}</h2>
          <div className="text-center mb-6">
            <span className="text-sm text-gray-500">{article.category}</span>
            <span className="text-sm text-gray-400 ml-2">{article.date}</span>
          </div>
          <div className="mb-6">
            <Image
              src={article.imageUrl}
              alt={article.title}  // Add alt attribute here
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="text-lg text-gray-800">{article.fullContent}</div>
        </div>
      </section>
      <Footer />
    </>
  );
}
