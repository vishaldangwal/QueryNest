import React, { useState, useEffect } from "react";
import {
  FaPlus,
  FaPenFancy,
  FaTrash,
  FaBookOpen,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    title: "",
    description: "",
    content: "",
    category: "General",
  });
  const [errors, setErrors] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null); // State to track the selected blog

  const categories = ["All", "Development", "Design", "Performance", "General"];

  // Fetch blogs from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:3000/api/v1/blog/data",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setBlogs(response.data || []);
        setFetchError(null);
      } catch (err) {
        setFetchError("Failed to fetch blogs.");
        console.error("Error fetching blogs:", err); // Log the error for debugging
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category) => {
    switch (category) {
      case "Development":
        return "bg-blue-100 text-blue-800";
      case "Design":
        return "bg-purple-100 text-purple-800";
      case "Performance":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const truncateContent = (content, length = 150) => {
    if (!content) return "";
    return content.length > length ? content.slice(0, length) + "..." : content;
  };

  // Handle opening the modal to display blog content
  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setSelectedBlog(null);
  };

  // Handle form submission with validation
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic
    const validationErrors = {};
    if (!newBlog.title.trim()) {
      validationErrors.title = "Title is required";
    }
    if (!newBlog.content.trim()) {
      validationErrors.content = "Content is required";
    }
    if (!newBlog.category.trim()) {
      validationErrors.category = "Category is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If validation passes, make API request to create new blog
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:3000/api/v1/blog/create",
        newBlog,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      window.location.reload();

      // Append the new blog to the blogs state if successful
      setBlogs((prevBlogs) => [...prevBlogs, response.data]);

      // Close the form and reset the state
      setIsFormOpen(false);
      setNewBlog({
        title: "",
        description: "",
        content: "",
        category: "General",
      });
      setErrors({}); // Clear any validation errors
    } catch (err) {
      setErrors({ message: "Error creating blog. Please try again later." });
      console.error("Error creating blog:", err); // Log the error for debugging
    }
  };

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 pt-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg mb-6">
          <FaBookOpen className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          My Blog Space
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {" "}
          Share your knowledge, experiences, and stories with the world
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Add Your Title and Description here */}

        {/* Search Bar */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
            <div className="relative w-full sm:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search posts..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <FaTimes className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="w-full sm:w-auto flex items-center justify-center px-6 py-3 border border-transparent rounded-xl shadow-sm text-white bg-gradient-to-r from-indigo-500 to-purple-600"
            >
              <FaPlus className="h-4 w-4 mr-2" />
              {isFormOpen ? "Cancel" : "New Post"}
            </button>
          </div>
        </div>

        {/* New Post Form */}
        {isFormOpen && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
              Create New Blog Post
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newBlog.title}
                  onChange={handleInputChange}
                  className="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
                {errors.title && (
                  <p className="text-red-500 text-xs">{errors.title}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-gray-700"
                >
                  Content
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={newBlog.content}
                  onChange={handleInputChange}
                  className="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
                {errors.content && (
                  <p className="text-red-500 text-xs">{errors.content}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={newBlog.category}
                  onChange={handleInputChange}
                  className="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
                  required
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="text-red-500 text-xs">{errors.category}</p>
                )}
              </div>
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-3 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700"
                >
                  Create Post
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Blog List */}
        <div className="mb-12">
          {loading ? (
            <p className="text-center text-gray-500">Loading blogs...</p>
          ) : fetchError ? (
            <p className="text-center text-red-500">{fetchError}</p>
          ) : filteredBlogs.length === 0 ? (
            <p className="text-center text-gray-500">No blogs found.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="group bg-white p-6 rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  onClick={() => handleBlogClick(blog)}
                >
                  <div className="flex justify-between mb-2">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(
                        blog.category
                      )}`}
                    >
                      {blog.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-2 mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-5">
                    {blog.description || truncateContent(blog.content)}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500 border-t border-gray-100 pt-4">
                    <span>{blog.date}</span>
                    <span>
                      {blog.description?.length
                        ? Math.ceil(blog.description.length / 200)
                        : 0}{" "}
                      min read
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Blog Content Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-2/3 max-w-4xl relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <FaTimes className="h-6 w-6" />
            </button>
            <h2 className="text-3xl font-bold mb-4">{selectedBlog.title}</h2>
            <p className="text-lg text-gray-600 mb-6">
              {selectedBlog.category}
            </p>
            <div className="prose">
              <p>{selectedBlog.content || "No content available."}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
