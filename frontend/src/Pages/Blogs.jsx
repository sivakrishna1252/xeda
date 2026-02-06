import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../Components/footer";
import blogImg from "../assets/Blog/Blog1.webp";

const blogs = [
  {
    id: 1,
    title:
      "How Soon Can You See Muscle Recovery Benefits from 30 ml Fresh Wheatgrass Juice?",
    excerpt:
      "Learn how 30 ml fresh wheatgrass juice supports muscle recovery, energy, and strength over time.",
    image: blogImg,
    date: "January 15, 2026",
  },
  // Future blogs will be added here
];

export default function Blogs() {
  const navigate = useNavigate();

  const handleBlogClick = (blogId) => {
    navigate(`/blogs/${blogId}`);
  };

  const isSingleBlog = blogs.length === 1;

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-green-50 to-lime-100 text-gray-800 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Heading Section */}
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-emerald-900">
              Our Blog
            </h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Latest insights, tips, and stories about wheatgrass, wellness,
              and healthy living from Xeda Farm
            </p>
          </div>

          {/* Blog Grid */}
          <div
            className={`grid gap-8 ${isSingleBlog
              ? "grid-cols-1 place-items-center"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              }`}
          >
            {blogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => handleBlogClick(blog.id)}
                className={`cursor-pointer group bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-green-100 hover:border-green-400 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20 hover:scale-[1.02] flex flex-col
                ${isSingleBlog ? "max-w-md w-full" : ""}`}
              >
                {/* Image */}
                <div className="relative w-full aspect-square overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <FaCalendarAlt className="text-green-600" />
                    <span>{blog.date}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-bold mb-3 text-emerald-900 group-hover:text-green-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                    {blog.excerpt}
                  </p>

                  {/* Read More */}
                  <span className="inline-block text-green-600 text-sm font-medium group-hover:translate-x-2 transition-transform">
                    Read More →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
