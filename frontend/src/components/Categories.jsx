import React from "react";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Technology",
      icon: "💻",
      description: "Explore the latest in tech and innovation.",
      color: "bg-blue-100", // Light blue background
      textColor: "text-blue-800", // Dark blue text
    },
    {
      id: 2,
      name: "Lifestyle",
      icon: "🌿",
      description: "Discover tips for a better lifestyle.",
      color: "bg-green-100", // Light green background
      textColor: "text-green-800", // Dark green text
    },
    {
      id: 3,
      name: "Health",
      icon: "🏥",
      description: "Learn how to improve your health and wellness.",
      color: "bg-yellow-100", // Light yellow background
      textColor: "text-yellow-800", // Dark yellow text
    },
    {
      id: 4,
      name: "Travel",
      icon: "✈️",
      description: "Find inspiration for your next adventure.",
      color: "bg-purple-100", // Light purple background
      textColor: "text-purple-800", // Dark purple text
    },
    {
      id: 5,
      name: "Finance",
      icon: "💰",
      description: "Master your finances with expert advice.",
      color: "bg-red-100", // Light red background
      textColor: "text-red-800", // Dark red text
    },
    {
      id: 6,
      name: "Education",
      icon: "📚",
      description: "Expand your knowledge with our resources.",
      color: "bg-indigo-100", // Light indigo background
      textColor: "text-indigo-800", // Dark indigo text
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Explore Categories
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`${category.color} rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out hover:shadow-xl`}
            >
              <div className="p-8 text-center">
                {/* Category Icon */}
                <span className={`text-6xl mb-4 inline-block ${category.textColor}`}>
                  {category.icon}
                </span>

                {/* Category Name */}
                <h3 className={`text-2xl font-bold ${category.textColor} mb-3`}>
                  {category.name}
                </h3>

                {/* Category Description */}
                <p className="text-gray-600 mb-6">{category.description}</p>

                {/* Explore Button */}
                <a
                  href={`/categories/${category.id}`}
                  className={`inline-block ${category.textColor} bg-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-20 transition duration-300`}
                >
                  Explore
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;



