"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pagination } from "@/components/ui/pagination";
import { Fade, Slide } from "react-awesome-reveal";
import { blogPostsData } from "./blogData";

// Blog post data from blogData.ts
const blogPosts = blogPostsData.map((post, index) => ({
  id: index + 1,
  title: post.title,
  image: post.image,
  alt: post.alt,
  description: post.shortDescription,
  // image: "/Images/dental emergencies Harrisburg.webp", // Default image for blog grid
  slug: post.slug,
}));

// Mock API function - replace with your actual API call
const fetchBlogPosts = async (page: number, itemsPerPage: number) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPosts = blogPosts.slice(startIndex, endIndex);

  return {
    posts: paginatedPosts,
    totalItems: blogPosts.length,
    currentPage: page,
    totalPages: Math.ceil(blogPosts.length / itemsPerPage),
    itemsPerPage,
  };
};

export default function BlogGridPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      try {
        const data = await fetchBlogPosts(currentPage, itemsPerPage);
        setTotalItems(data.totalItems);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [currentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="details-page-header-section">
        <div className="max-w-7xl mx-auto text-center">
          <Fade direction="down" triggerOnce>
            <h1>
              Oral Health Tips, News & Updates from Tulip Dental in Maplewood,
              NJ
            </h1>
            <h2>
              {" "}
              Expert Advice on Family, Cosmetic & Preventive Dentistry Near You
            </h2>
          </Fade>
        </div>
      </div>

      {/* Blog Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Slide
                  key={post.id}
                  direction="up"
                  delay={index * 100}
                  triggerOnce
                >
                  <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    {/* Blog Post Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Blog Post Content */}
                    <div className="p-6">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      {/* Date */}
                      {/* <p className="text-sm text-gray-500 mb-4">{post.date}</p> */}

                      {/* Description */}
                      <p className="text-gray-700 mb-6 line-clamp-3 leading-relaxed">
                        {post.description}
                      </p>

                      {/* Continue Reading Button */}
                      <Link href={`/dental-blog/${post.slug}`}>
                        <Button
                          // variant="outline"
                          className="w-full bg-secondary/90 hover:bg-primary text-white px-3 py-2 rounded-md text-sm hover:from-blue-700 hover:to-cyan-700 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
                        >
                          Continue Reading
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Button>
                      </Link>
                    </div>
                  </article>
                </Slide>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-16">
                <Fade direction="up" triggerOnce>
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    onPageChange={handlePageChange}
                    onItemsPerPageChange={handleItemsPerPageChange}
                    itemsPerPageOptions={[3, 6, 9, 12]}
                  />
                </Fade>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
