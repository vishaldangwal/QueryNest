import React from "react";
import { motion } from "framer-motion";

const FeaturedBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Tips for Writing Better Code",
      description:
        "Learn how to write clean and efficient code with these 10 tips.",
      author: "Vansh Maurya",
      date: "Oct 10, 2023",
      readTime: "5 min",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE1fHxjb2RpbmclMjBwcm9ncmFtbWluZ3xlbnwwfHx8fDE2Nzk2OTg5NTI&ixlib=rb-1.2.1&q=80&w=1080",
      category: "Technology",
    },
    {
      id: 2,
      title: "The Art of Productivity",
      description:
        "Discover the secrets to staying productive and achieving your goals.",
      author: "Ram Kumar",
      date: "Oct 12, 2023",
      readTime: "7 min",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Lifestyle",
    },
    {
      id: 3,
      title: "Healthy Eating Habits",
      description:
        "Transform your diet with these simple and effective healthy eating tips.",
      author: "Sanchit Jain",
      date: "Oct 15, 2023",
      readTime: "6 min",
      image:
        "https://www.nuutjob.com/cdn/shop/articles/healthy-eating-habits-355940.jpg?v=1685204096",
      category: "Health",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Featured Blogs
        </h2>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
              whileInView={{ opacity: 1, y: 0 }} // Animate when in view
              transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered delay
              viewport={{ once: true }} // Animate only once
              className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out hover:shadow-3xl"
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                  loading="lazy" // Lazy loading for better performance
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                {/* Category Badge */}
                <span className="absolute top-4 right-4 bg-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Blog Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {blog.title}
                </h3>

                {/* Blog Description */}
                <p className="text-gray-600 mb-4">{blog.description}</p>

                {/* Author and Metadata */}
                <div className="flex items-center space-x-4">
                  <img
                    src={`https://i.pravatar.cc/40?img=${blog.id}`} // Dynamic avatar
                    alt={blog.author}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {blog.author}
                    </p>
                    <p className="text-sm text-gray-500">
                      {blog.date} • {blog.readTime} read
                    </p>
                  </div>
                </div>

                {/* Read More Button */}
                <a
                  href={`/blogs/${blog.id}`}
                  className="mt-6 inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
                >
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
