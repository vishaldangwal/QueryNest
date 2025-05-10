import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaSearch,
  FaGraduationCap,
  FaTimes,
  FaThumbsUp,
  FaComment,
  FaBook,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const Cate = () => {
  const [queries, setQueries] = useState([
    {
      id: 1,
      title: "How to prepare for campus placements?",
      description:
        "Looking for tips from seniors who have gone through the placement process successfully. Specifically for CS students.",
      tags: ["placements", "career"],
      upvotes: 24,
      comments: 8,
      author: "CS Final Year",
      timestamp: "2 hours ago",
      department: "Computer Science",
      year: "4th Year",
      isAnonymous: false,
    }
  ]);

  const [newQuery, setNewQuery] = useState({
    title: "",
    description: "",
    tags: [],
    department: "",
    year: "",
    isAnonymous: false,
  });

  const token = localStorage.getItem("token");
  const [currentTag, setCurrentTag] = useState("");
  const [errors, setErrors] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  const departmentOptions = [
    "All Departments",
    "Computer Science",
    "Mechanical",
    "Electrical",
    "Electronics",
    "Civil",
    "IT",
    "Biotechnology",
    "Chemical",
    "Aerospace",
  ];

  const yearOptions = [
    "1st Year",
    "2nd Year",
    "3rd Year",
    "4th Year",
    "5th Year",
    "Post Graduate",
  ];

  useEffect(() => {
    document.title = "QueryNest - College Q&A Platform";
  }, []);

  useEffect(() => {
    document.title = "QueryNest - College Q&A Platform";
    fetchQueries();
  }, []);

  const fetchQueries = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/query/queries"
      );
      setQueries(response.data.queries);
    } catch (error) {
      console.error("Error fetching queries:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewQuery({
      ...newQuery,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleTagAdd = () => {
    if (currentTag && !newQuery.tags.includes(currentTag)) {
      setNewQuery({
        ...newQuery,
        tags: [...newQuery.tags, currentTag],
      });
      setCurrentTag("");
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setNewQuery({
      ...newQuery,
      tags: newQuery.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!newQuery.title.trim()) {
      newErrors.title = "Query title is required";
    } else if (newQuery.title.length > 100) {
      newErrors.title = "Title must be 100 characters or less";
    }

    if (!newQuery.description.trim()) {
      newErrors.description = "Description is required";
    } else if (newQuery.description.length > 500) {
      newErrors.description = "Description must be 500 characters or less";
    }

    if (!newQuery.department) {
      newErrors.department = "Please select a department";
    }

    if (!newQuery.year) {
      newErrors.year = "Please select your year";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      if (editingId) {
        // console.log("hello")
        try {
          const token = localStorage.getItem("token"); // or wherever you store the token
          const response = await axios.patch(
            `http://localhost:3000/api/v1/query/queries/${editingId}`,
            {
              title: newQuery.title,
              description: newQuery.description,
              tags: newQuery.tags,
              department: newQuery.department,
              year: newQuery.year,
              isAnonymous: newQuery.isAnonymous,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          // Update frontend state with backend response
          const updatedQuery = response.data.query;

          setQueries(
            queries.map((query) =>
              query._id === editingId ? updatedQuery : query
            )
          );

          resetForm();
        } catch (error) {
          console.error("Error updating query:", error);
        }
      } else {
        const newEntry = {
          id: Date.now(),
          title: newQuery.title,
          description: newQuery.description,
          tags: newQuery.tags,
          upvotes: 0,
          comments: 0,
          author: "You",
          timestamp: "Just now",
          department: newQuery.department,
          year: newQuery.year,
          isAnonymous: newQuery.isAnonymous,
        };
        console.log(newEntry);
        try {
          const response = await axios.post(
            "http://localhost:3000/api/v1/query/queries",
            newEntry,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        } catch (error) {
          console.error("Error saving query:", error);
        }
      }
      resetForm();
      window.location.reload();
    }
  };

  const handleEdit = (query) => {
    setNewQuery({
      title: query.title,
      description: query.description,
      tags: query.tags,
      department: query.department,
      year: query.year,
      isAnonymous: query.isAnonymous,
    });
    setEditingId(query.id);
    setIsFormOpen(true);
  };

  const handleDelete = async (id) => {
    setIsDeleting(true);
    // Simulate async deletion
    await new Promise((resolve) => setTimeout(resolve, 800));
    setQueries(queries.filter((query) => query.id !== id));
    setIsDeleting(false);
  };

  const handleUpvote = (id) => {
    setQueries(
      queries.map((query) =>
        query.id === id ? { ...query, upvotes: query.upvotes + 1 } : query
      )
    );
  };

  const resetForm = () => {
    setNewQuery({
      title: "",
      description: "",
      tags: [],
      department: "",
      year: "",
      isAnonymous: false,
    });
    setEditingId(null);
    setIsFormOpen(false);
    setErrors({});
    setCurrentTag("");
  };

  const filteredQueries = queries.filter(
    (query) =>
      query.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      query.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      query.tags
        .some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter((query) => {
          if (activeFilter === "all") return true;
          if (activeFilter === "cs")
            return query.department === "Computer Science";
          if (activeFilter === "mech") return query.department === "Mechanical";
          if (activeFilter === "electrical")
            return query.department === "Electrical";
          if (activeFilter === "first-year") return query.year === "1st Year";
          if (activeFilter === "popular") return query.upvotes > 20;
          return true;
        })
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white shadow-md mb-4">
            <FaGraduationCap className="h-10 w-10 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            QueryNest
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ask, answer, and connect with your college community
          </p>
        </motion.div>

        {/* Search and Create */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8"
        >
          <div className="relative w-full sm:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search queries..."
              className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <FaTimes className="h-4 w-4 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsFormOpen(true)}
            className="w-full sm:w-auto flex items-center justify-center px-6 py-3 border border-transparent rounded-xl shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
          >
            <FaPlus className="h-4 w-4 mr-2" />
            Ask a Question
          </motion.button>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-xl text-sm font-medium ${
              activeFilter === "all"
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            } shadow-sm border border-gray-200 transition-all duration-200`}
          >
            All Queries
          </button>
          <button
            onClick={() => setActiveFilter("cs")}
            className={`px-4 py-2 rounded-xl text-sm font-medium ${
              activeFilter === "cs"
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            } shadow-sm border border-gray-200 transition-all duration-200`}
          >
            Computer Science
          </button>
          <button
            onClick={() => setActiveFilter("mech")}
            className={`px-4 py-2 rounded-xl text-sm font-medium ${
              activeFilter === "mech"
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            } shadow-sm border border-gray-200 transition-all duration-200`}
          >
            Mechanical
          </button>
          <button
            onClick={() => setActiveFilter("electrical")}
            className={`px-4 py-2 rounded-xl text-sm font-medium ${
              activeFilter === "electrical"
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            } shadow-sm border border-gray-200 transition-all duration-200`}
          >
            Electrical
          </button>
          <button
            onClick={() => setActiveFilter("first-year")}
            className={`px-4 py-2 rounded-xl text-sm font-medium ${
              activeFilter === "first-year"
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            } shadow-sm border border-gray-200 transition-all duration-200`}
          >
            First Year
          </button>
          <button
            onClick={() => setActiveFilter("popular")}
            className={`px-4 py-2 rounded-xl text-sm font-medium ${
              activeFilter === "popular"
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            } shadow-sm border border-gray-200 transition-all duration-200`}
          >
            Popular
          </button>
        </div>

        {/* Query Creation/Edit Form */}
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="mb-10"
            >
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {editingId ? "Edit Your Query" : "Ask a Question"}
                  </h2>
                  <button
                    onClick={resetForm}
                    className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
                  >
                    <FaTimes className="h-5 w-5" />
                  </button>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Question Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      value={newQuery.title}
                      onChange={handleChange}
                      maxLength={100}
                      className={`block w-full px-4 py-3 border ${
                        errors.title ? "border-red-300" : "border-gray-300"
                      } rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200`}
                      placeholder="e.g. How to prepare for campus placements?"
                    />
                    <div className="flex justify-between mt-1">
                      {errors.title ? (
                        <p className="text-sm text-red-600">{errors.title}</p>
                      ) : (
                        <span className="text-xs text-gray-500">
                          Be specific and concise
                        </span>
                      )}
                      <span className="text-xs text-gray-500">
                        {newQuery.title.length}/100
                      </span>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Detailed Description{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      value={newQuery.description}
                      onChange={handleChange}
                      maxLength={500}
                      className={`block w-full px-4 py-3 border ${
                        errors.description
                          ? "border-red-300"
                          : "border-gray-300"
                      } rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200`}
                      placeholder="Provide details about your question..."
                    />
                    <div className="flex justify-between mt-1">
                      {errors.description ? (
                        <p className="text-sm text-red-600">
                          {errors.description}
                        </p>
                      ) : (
                        <span className="text-xs text-gray-500">
                          Include all relevant information
                        </span>
                      )}
                      <span className="text-xs text-gray-500">
                        {newQuery.description.length}/500
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="department"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Department <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="department"
                        name="department"
                        value={newQuery.department}
                        onChange={handleChange}
                        className={`block w-full px-4 py-3 border ${
                          errors.department
                            ? "border-red-300"
                            : "border-gray-300"
                        } rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200`}
                      >
                        <option value="">Select Department</option>
                        {departmentOptions.map((dept) => (
                          <option key={dept} value={dept}>
                            {dept}
                          </option>
                        ))}
                      </select>
                      {errors.department && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.department}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="year"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Academic Year <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="year"
                        name="year"
                        value={newQuery.year}
                        onChange={handleChange}
                        className={`block w-full px-4 py-3 border ${
                          errors.year ? "border-red-300" : "border-gray-300"
                        } rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200`}
                      >
                        <option value="">Select Year</option>
                        {yearOptions.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                      {errors.year && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.year}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="tags"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Tags (Optional)
                    </label>
                    <div className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={currentTag}
                        onChange={(e) => setCurrentTag(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleTagAdd()}
                        className="block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                        placeholder="Add tags (press Enter)"
                      />
                      <button
                        type="button"
                        onClick={handleTagAdd}
                        className="px-4 py-2 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                      >
                        Add
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {newQuery.tags.map((tag) => (
                        <div
                          key={tag}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => handleTagRemove(tag)}
                            className="ml-1.5 text-indigo-600 hover:text-indigo-900"
                          >
                            <FaTimes className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="isAnonymous"
                      name="isAnonymous"
                      type="checkbox"
                      checked={newQuery.isAnonymous}
                      onChange={handleChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="isAnonymous"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Post anonymously
                    </label>
                  </div>

                  <div className="flex justify-end gap-3 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={resetForm}
                      className="px-5 py-2.5 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="px-6 py-2.5 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                    >
                      {editingId ? "Update Question" : "Post Question"}
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Queries List */}
        <div className="mb-12">
          {filteredQueries.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center py-16"
            >
              <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
                <FaBook className="h-full w-full opacity-30" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                {searchTerm
                  ? "No matching questions found"
                  : "No questions yet"}
              </h3>
              <p className="text-gray-500 max-w-md mx-auto mb-6">
                {searchTerm
                  ? "Try a different search term"
                  : "Be the first to ask a question to your college community"}
              </p>
              <button
                onClick={() => setIsFormOpen(true)}
                className="px-6 py-2.5 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
              >
                Ask First Question
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
              className="space-y-6"
            >
              {filteredQueries.map((query) => (
                <motion.div
                  key={query.id || query._id}
                  variants={cardVariants}
                  whileHover={{ y: -2 }}
                  className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800`}
                          >
                            {query.department}
                          </div>
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800`}
                          >
                            {query.year}
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {query.title}
                        </h3>

                        <p className="text-gray-600 mb-4">
                          {query.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {query.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <span>
                              Posted by{" "}
                              {query.isAnonymous ? "Anonymous" : query.author}
                            </span>
                            <span className="mx-2">•</span>
                            <span>{query.timestamp}</span>
                          </div>

                          <div className="flex gap-4">
                            <button
                              onClick={() => handleUpvote(query.id)}
                              className="flex items-center gap-1 text-gray-500 hover:text-indigo-600"
                            >
                              <FaThumbsUp />
                              <span>{query.upvotes}</span>
                            </button>
                            <div className="flex items-center gap-1 text-gray-500">
                              <FaComment />
                              <span>{query.comments}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => handleEdit(query)}
                          className="text-indigo-500 hover:text-indigo-700 p-1.5 rounded-full hover:bg-indigo-50 transition-colors duration-200"
                          aria-label="Edit query"
                        >
                          <FaEdit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(query.id)}
                          disabled={isDeleting}
                          className="text-red-500 hover:text-red-700 p-1.5 rounded-full hover:bg-red-50 transition-colors duration-200"
                          aria-label="Delete query"
                        >
                          {isDeleting ? (
                            <div className="h-4 w-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                          ) : (
                            <FaTrash className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200 group"
          >
            <svg
              className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Cate;