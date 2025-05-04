// import React from "react";

// const Hero = () => {
//   return (
//     <div className="bg-gradient-to-r from-indigo-500 to-purple-600 py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         {/* Main Heading */}
//         <h1 className="text-5xl font-bold text-white mb-6">
//           Welcome to <span className="text-yellow-300">QueryNest</span>
//         </h1>

//         {/* Subheading */}
//         <p className="text-xl text-gray-100 mb-8">
//           Your go-to platform for insightful blogs, tutorials, and resources. Explore, learn, and grow with us!
//         </p>

//         {/* Call-to-Action Buttons */}
//         <div className="flex justify-center space-x-4">
//           <a
//             href="/blogs"
//             className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition duration-300"
//           >
//             Explore Blogs
//           </a>
//           <a
//             href="/signup"
//             className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition duration-300"
//           >
//             Join Now
//           </a>
//         </div>

//         {/* Stats Section (Optional) */}
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white bg-opacity-10 p-6 rounded-lg">
//             <h2 className="text-4xl font-bold text-white">500+</h2>
//             <p className="text-gray-200">Blogs Published</p>
//           </div>
//           <div className="bg-white bg-opacity-10 p-6 rounded-lg">
//             <h2 className="text-4xl font-bold text-white">10K+</h2>
//             <p className="text-gray-200">Active Readers</p>
//           </div>
//           <div className="bg-white bg-opacity-10 p-6 rounded-lg">
//             <h2 className="text-4xl font-bold text-white">100+</h2>
//             <p className="text-gray-200">Expert Writers</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden  ">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-900 opacity-75"></div>

      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-64 h-64 bg-indigo-500 rounded-full opacity-20 animate-blob1"></div>
        <div className="absolute w-72 h-72 bg-purple-500 rounded-full opacity-20 animate-blob2"></div>
        <div className="absolute w-80 h-80 bg-pink-500 rounded-full opacity-20 animate-blob3"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Main Heading */}
        <h1 className="text-6xl font-bold text-white mb-6">
          Welcome to <span className="text-indigo-400">QueryNest</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-300 mb-12">
          Discover, learn, and share knowledge with a community of passionate writers and readers.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center space-x-6">
          <a
            href="/blogs"
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
          >
            Explore Blogs
          </a>
          <a
            href="/signup"
            className="bg-transparent border-2 border-indigo-600 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition duration-300 transform hover:scale-105"
          >
            Join Now
          </a>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-indigo-400">500+</h2>
            <p className="text-gray-300">Blogs Published</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-indigo-400">10K+</h2>
            <p className="text-gray-300">Active Readers</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-indigo-400">100+</h2>
            <p className="text-gray-300">Expert Writers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;