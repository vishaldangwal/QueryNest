import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const AboutUs = () => {
  // Sample team data
  const team = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Co-Founder & CEO',
      bio: 'Full-stack developer with 5+ years of experience in React and Node.js.',
      image: 'https://via.placeholder.com/150',
      socialLinks: {
        github: 'https://github.com/johndoe',
        twitter: 'https://twitter.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe',
        email: 'mailto:johndoe@example.com',
      },
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Co-Founder & CTO',
      bio: 'Frontend specialist passionate about building responsive and accessible UIs.',
      image: 'https://via.placeholder.com/150',
      socialLinks: {
        github: 'https://github.com/janesmith',
        twitter: 'https://twitter.com/janesmith',
        linkedin: 'https://linkedin.com/in/janesmith',
        email: 'mailto:janesmith@example.com',
      },
    },
    {
      id: 3,
      name: 'Alice Johnson',
      role: 'Lead Backend Engineer',
      bio: 'Backend engineer with expertise in Python, Django, and database optimization.',
      image: 'https://via.placeholder.com/150',
      socialLinks: {
        github: 'https://github.com/alicejohnson',
        twitter: 'https://twitter.com/alicejohnson',
        linkedin: 'https://linkedin.com/in/alicejohnson',
        email: 'mailto:alicejohnson@example.com',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#f7f7f7] to-[#eaeaea] py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#333] mb-4">About Us</h1>
          <p className="text-[#555] text-lg max-w-2xl mx-auto">
            At QueryNest, we are passionate about helping developers find answers to their coding questions quickly and efficiently. Our mission is to create a community-driven platform that empowers developers to learn, share, and grow together.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-[#333] mb-6">Our Mission</h2>
          <p className="text-[#555] text-lg mb-6">
            Our mission is to provide a platform where developers can collaborate, share knowledge, and solve problems together. We believe in the power of community and strive to create a space where everyone feels welcome and supported.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-lg hover:scale-105 transition-transform duration-300 shadow-md">
              <h3 className="text-xl font-bold text-[#333] mb-3">Collaborate</h3>
              <p className="text-[#555]">Work together to solve problems and share knowledge.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-lg hover:scale-105 transition-transform duration-300 shadow-md">
              <h3 className="text-xl font-bold text-[#333] mb-3">Learn</h3>
              <p className="text-[#555]">Grow your skills by learning from others in the community.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-lg hover:scale-105 transition-transform duration-300 shadow-md">
              <h3 className="text-xl font-bold text-[#333] mb-3">Share</h3>
              <p className="text-[#555]">Contribute your knowledge and help others succeed.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-[#333] mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white/90 backdrop-blur-md rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 shadow-md"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-[#6a11cb]"
                />
                <h3 className="text-2xl font-bold text-[#333] mb-2">{member.name}</h3>
                <p className="text-[#555] mb-4">{member.role}</p>
                <p className="text-[#555] text-sm mb-6">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.socialLinks.github}
                    className="text-[#555] hover:text-[#6a11cb] transition-colors duration-200"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={member.socialLinks.twitter}
                    className="text-[#555] hover:text-[#6a11cb] transition-colors duration-200"
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    href={member.socialLinks.linkedin}
                    className="text-[#555] hover:text-[#6a11cb] transition-colors duration-200"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href={member.socialLinks.email}
                    className="text-[#555] hover:text-[#6a11cb] transition-colors duration-200"
                  >
                    <FaEnvelope size={24} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;