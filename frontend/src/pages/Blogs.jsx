import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaPenFancy, FaTrash, FaBookOpen, FaSearch, FaTimes } from 'react-icons/fa';

const Blogs = () => {
  const [blogs, setBlogs] = useState([
    { 
      id: 1, 
      title: 'Getting Started with React Hooks', 
      description: 'React Hooks revolutionized how we write React components. In this post, I explore the basics of useState, useEffect, and useContext hooks with practical examples that you can use in your projects today.', 
      date: '2023-05-15',
      readTime: '5 min read',
      category: 'Development'
    },
    { 
      id: 2, 
      title: 'The Art of Responsive Design', 
      description: 'Creating websites that look great on all devices is no longer optional. Learn the principles of responsive design, modern CSS techniques, and tools that will make your workflow more efficient.', 
      date: '2023-06-22',
      readTime: '8 min read',
      category: 'Design'
    },
    { 
      id: 3, 
      title: 'Optimizing Performance in JavaScript Applications', 
      description: 'Performance bottlenecks can ruin user experience. Discover proven strategies to identify and fix common performance issues in your JavaScript applications, from lazy loading to memoization techniques.', 
      date: '2023-07-30',
      readTime: '10 min read',
      category: 'Performance'
    },
  ]);

  const [newBlog, setNewBlog] = useState({ 
    title: '', 
    description: '', 
    category: 'General' 
  });
  const [errors, setErrors] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Development', 'Design', 'Performance', 'General'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({
      ...newBlog,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!newBlog.title.trim()) newErrors.title = 'Title is required';
    if (!newBlog.description.trim()) newErrors.description = 'Description is required';
    if (newBlog.description.trim().length < 100) newErrors.description = 'Description should be at least 100 characters';
    if (!newBlog.category) newErrors.category = 'Category is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddBlog = (e) => {
    e.preventDefault();
    if (validate()) {
      const newEntry = {
        id: Date.now(),
        title: newBlog.title,
        description: newBlog.description,
        category: newBlog.category,
        date: new Date().toISOString().split('T')[0],
        readTime: `${Math.ceil(newBlog.description.length / 200)} min read`
      };
      setBlogs([newEntry, ...blogs]);
      setNewBlog({ title: '', description: '', category: 'General' });
      setIsFormOpen(false);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      const updatedBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(updatedBlogs);
    }
  };

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         blog.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Development': return 'bg-blue-100 text-blue-800';
      case 'Design': return 'bg-purple-100 text-purple-800';
      case 'Performance': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with gradient */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg mb-6">
            <FaBookOpen className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            My Blog Space
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Share your knowledge, experiences, and stories with the world
          </p>
        </div>

        {/* Controls Section */}
        <div className="mb-10">
          {/* Search and Create */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
            <div className="relative w-full sm:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search posts..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <FaTimes className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="w-full sm:w-auto flex items-center justify-center px-6 py-3 border border-transparent rounded-xl shadow-sm text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
            >
              <FaPlus className="h-4 w-4 mr-2" />
              {isFormOpen ? 'Cancel' : 'New Post'}
            </button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Creation Form */}
        {isFormOpen && (
          <div className="mb-10 animate-fadeIn">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Create New Post</h2>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <FaTimes className="h-6 w-6" />
                </button>
              </div>
              <form className="space-y-6" onSubmit={handleAddBlog}>
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    value={newBlog.title}
                    onChange={handleChange}
                    className={`block w-full px-4 py-3 border ${
                      errors.title ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 
                      'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                    } rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200`}
                    placeholder="Catchy title that grabs attention..."
                  />
                  {errors.title && <p className="mt-2 text-sm text-red-600">{errors.title}</p>}
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={newBlog.category}
                    onChange={handleChange}
                    className={`block w-full px-4 py-3 border ${
                      errors.category ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 
                      'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                    } rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200`}
                  >
                    {categories.filter(c => c !== 'All').map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  {errors.category && <p className="mt-2 text-sm text-red-600">{errors.category}</p>}
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Content <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="8"
                    value={newBlog.description}
                    onChange={handleChange}
                    className={`block w-full px-4 py-3 border ${
                      errors.description ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 
                      'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                    } rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200`}
                    placeholder="Write your content here (minimum 100 characters)..."
                  />
                  {errors.description && (
                    <p className="mt-2 text-sm text-red-600">{errors.description}</p>
                  )}
                  <div className="mt-2 flex justify-between items-center">
                    <p className="text-xs text-gray-500">
                      {newBlog.description.length} characters (minimum 100 required)
                    </p>
                    <p className="text-xs text-gray-500">
                      Estimated read time: {Math.ceil(newBlog.description.length / 200)} min
                    </p>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-6 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                  >
                    Publish Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Blog List */}
        <div className="mb-12">
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
                <FaBookOpen className="h-full w-full opacity-30" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                {searchTerm || selectedCategory !== 'All' 
                  ? 'No matching posts found' 
                  : 'Your blog is empty'}
              </h3>
              <p className="text-gray-500 max-w-md mx-auto mb-4">
                {searchTerm 
                  ? 'Try adjusting your search or filter criteria' 
                  : 'Start by creating your first post'}
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setIsFormOpen(true);
                }}
                className="inline-flex items-center px-6 py-2 border border-transparent rounded-lg shadow-sm text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
              >
                <FaPlus className="h-4 w-4 mr-2" />
                Create Your First Post
              </button>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredBlogs.map((blog) => (
                <div 
                  key={blog.id} 
                  className="group bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getCategoryColor(blog.category)}`}>
                        {blog.category}
                      </span>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <button
                          onClick={() => alert('Edit functionality coming soon!')}
                          className="text-indigo-500 hover:text-indigo-700 p-2 rounded-full hover:bg-indigo-50 transition-colors duration-200"
                          aria-label="Edit post"
                        >
                          <FaPenFancy className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(blog.id)}
                          className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors duration-200"
                          aria-label="Delete post"
                        >
                          <FaTrash className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 line-clamp-2 mb-3">{blog.title}</h3>
                    <p className="text-gray-600 line-clamp-3 mb-5">{blog.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500 border-t border-gray-100 pt-4">
                      <span className="font-medium">{blog.date}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded">{blog.readTime}</span>
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center transition-colors duration-200">
                      Read full article
                      <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-200">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200"
          >
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <div className="text-sm text-gray-500">
            Showing {filteredBlogs.length} of {blogs.length} posts
          </div>
        </div>
      </div>

      {/* Global styles */}
      <style >{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Blogs;