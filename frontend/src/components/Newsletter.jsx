// import React from "react";

// const Newsletter = () => {
//   return (
//     <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           {/* Section Heading */}
//           <h2 className="text-4xl font-bold text-white mb-4">
//             Subscribe to Our Newsletter
//           </h2>

//           {/* Subheading */}
//           <p className="text-xl text-gray-200 mb-8">
//             Get the latest blogs, tutorials, and resources delivered to your inbox.
//           </p>

//           {/* Subscription Form */}
//           <form className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
//             {/* Email Input */}
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full md:w-96 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />

//             {/* Subscribe Button */}
//             <button
//               type="submit"
//               className="w-full md:w-auto bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition duration-300 transform hover:scale-105"
//             >
//               Subscribe
//             </button>
//           </form>

//           {/* Privacy Note */}
//           <p className="mt-6 text-sm text-gray-300">
//             We respect your privacy. Unsubscribe at any time.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Newsletter;

import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Section Heading */}
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>

          {/* Subheading */}
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for the latest blogs, tutorials, and resources.
          </p>

          {/* Subscription Form */}
          <form className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 max-w-2xl mx-auto">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-96 px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />

            {/* Subscribe Button */}
            <button
              type="submit"
              className="w-full md:w-auto bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>

          {/* Privacy Note */}
          <p className="mt-6 text-sm text-gray-500">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;