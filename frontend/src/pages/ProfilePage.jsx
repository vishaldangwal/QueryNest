import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaEdit } from 'react-icons/fa';

const ProfilePage = () => {
  // Sample user data
  const user = {
    name: 'John Doe',
    bio: 'Full-stack developer with 5+ years of experience in React and Node.js.',
    profilePicture: 'https://via.placeholder.com/150',
    expertise: ['React', 'Node.js', 'JavaScript', 'Python'],
    stats: {
      questions: 42,
      answers: 128,
      contributions: 170,
    },
    socialLinks: {
      github: 'https://github.com/johndoe',
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      email: 'mailto:johndoe@example.com',
    },
    recentActivity: [
      {
        id: 1,
        type: 'question',
        title: 'How to optimize React rendering?',
        timestamp: '2 hours ago',
      },
      {
        id: 2,
        type: 'answer',
        title: 'Best practices for REST API design',
        timestamp: '5 hours ago',
      },
      {
        id: 3,
        type: 'comment',
        title: 'Great explanation! Thanks!',
        timestamp: '1 day ago',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#f0f4f8] to-[#e2e8f0] py-12">
      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center relative overflow-hidden">
          {/* Edit Profile Button */}
          <button className="absolute top-6 right-6 bg-[#4dabf7] text-white p-3 rounded-full hover:bg-[#3b8ec6] transition-colors duration-300 shadow-md">
            <FaEdit size={18} />
          </button>

          {/* Profile Picture */}
          <div className="relative w-32 h-32 mx-auto mb-6">
            <img
              src={user.profilePicture}
              alt={user.name}
              className="w-full h-full rounded-full object-cover border-4 border-[#4dabf7]"
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent animate-ping-slow"></div>
          </div>

          {/* Name and Bio */}
          <h1 className="text-4xl font-bold text-[#1a1a1a] mb-3">{user.name}</h1>
          <p className="text-[#666] text-lg mb-6">{user.bio}</p>

          {/* Expertise Tags */}
          <div className="flex justify-center space-x-4 mb-8">
            {user.expertise.map((skill, index) => (
              <span
                key={index}
                className="bg-[#4dabf7] text-white px-4 py-2 rounded-full text-sm font-medium shadow-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
          {Object.entries(user.stats).map(([key, value]) => (
            <div
              key={key}
              className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-3xl font-bold text-[#1a1a1a]">{value}</h3>
              <p className="text-[#666] text-lg capitalize">{key}</p>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {user.recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-[#f8f9fa] transition-colors duration-300"
              >
                <div className="w-3 h-3 bg-[#4dabf7] rounded-full"></div>
                <div>
                  <p className="text-[#1a1a1a] font-semibold">{activity.title}</p>
                  <p className="text-[#666] text-sm">{activity.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Connect with Me</h2>
          <div className="flex justify-center space-x-8">
            <a
              href={user.socialLinks.github}
              className="text-[#666] hover:text-[#4dabf7] transition-colors duration-300"
            >
              <FaGithub size={28} />
            </a>
            <a
              href={user.socialLinks.twitter}
              className="text-[#666] hover:text-[#4dabf7] transition-colors duration-300"
            >
              <FaTwitter size={28} />
            </a>
            <a
              href={user.socialLinks.linkedin}
              className="text-[#666] hover:text-[#4dabf7] transition-colors duration-300"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href={user.socialLinks.email}
              className="text-[#666] hover:text-[#4dabf7] transition-colors duration-300"
            >
              <FaEnvelope size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;