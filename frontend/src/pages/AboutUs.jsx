import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaCode, FaUsers, FaBook, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const team = [
    {
      id: 1,
      name: 'Vansh Saraf',
      role: 'Co-Founder & CEO',
      bio: 'Full-stack architect passionate about developer productivity. Built infrastructure at scale before founding QueryNest.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      socialLinks: {
        github: 'https://github.com/vanshsaraf',
        twitter: 'https://twitter.com/vanshsaraf',
        linkedin: 'https://linkedin.com/in/vanshsaraf',
        email: 'mailto:vansh@querynest.com',
      },
      expertise: ['React', 'Node.js', 'Cloud Architecture']
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Co-Founder & CTO',
      bio: 'Frontend systems expert who obsesses over DX. Former lead of design systems at a Fortune 500 tech company.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      socialLinks: {
        github: 'https://github.com/janesmith',
        twitter: 'https://twitter.com/janesmith',
        linkedin: 'https://linkedin.com/in/janesmith',
        email: 'mailto:jane@querynest.com',
      },
      expertise: ['React', 'TypeScript', 'Design Systems']
    },
    {
      id: 3,
      name: 'Alice Johnson',
      role: 'Lead Backend Engineer',
      bio: 'Database performance specialist who can optimize queries in her sleep. Loves solving hard data problems.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      socialLinks: {
        github: 'https://github.com/alicejohnson',
        twitter: 'https://twitter.com/alicejohnson',
        linkedin: 'https://linkedin.com/in/alicejohnson',
        email: 'mailto:alice@querynest.com',
      },
      expertise: ['PostgreSQL', 'Query Optimization', 'Distributed Systems']
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-[#f5f7ff]">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-100 opacity-20"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-28"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 mb-6 border border-purple-200">
            <FaRocket className="text-purple-600 mr-2" />
            <span className="text-sm font-medium text-purple-700">About Us!</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">future</span><br />of developer collaboration
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            QueryNest is redefining how teams discover, share, and optimize technical knowledge through intelligent query management.
          </p>
        </motion.section>

        {/* Mission Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-32"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-16 bg-gradient-to-br from-purple-50 to-blue-50">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Mission</span>
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  We believe the best solutions emerge when developers collaborate seamlessly. QueryNest eliminates knowledge silos by creating a living repository of technical solutions that evolves with your team.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg mr-4">
                      <FaUsers className="text-purple-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Collective Intelligence</h3>
                      <p className="text-gray-600 text-sm">Harness your team's combined expertise in a searchable knowledge base</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg mr-4">
                      <FaCode className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Context-Preserving</h3>
                      <p className="text-gray-600 text-sm">Queries stay connected to their business purpose and evolution history</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg mr-4">
                      <FaBook className="text-indigo-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Continuous Learning</h3>
                      <p className="text-gray-600 text-sm">Discover optimization patterns from your team's collective work</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-12 lg:p-16 flex items-center justify-center bg-white">
                <div className="relative w-full max-w-md">
                  <div className="absolute -top-8 -left-8 w-32 h-32 bg-purple-100 rounded-2xl opacity-60"></div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-100 rounded-2xl opacity-60"></div>
                  <div className="relative bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <code className="text-gray-300 text-sm font-mono">
                        <span className="text-purple-400">SELECT</span> users.id, users.name<br />
                        <span className="text-purple-400">FROM</span> users<br />
                        <span className="text-purple-400">JOIN</span> orders <span className="text-purple-400">ON</span> users.id = orders.user_id<br />
                        <span className="text-purple-400">WHERE</span> orders.created_at {'>'} NOW() - INTERVAL <span className="text-yellow-400">'30 days'</span><br />
                        <span className="text-gray-500">-- Active users with recent orders</span>
                      </code>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                          <span className="text-xs font-medium text-purple-600">VS</span>
                        </div>
                        <span className="text-sm text-gray-600">Saved 2 days ago</span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-gray-400 hover:text-purple-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                          </svg>
                        </button>
                        <button className="text-gray-400 hover:text-blue-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Minds</span> Behind QueryNest
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A passionate team dedicated to improving developer workflows through innovative collaboration tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <motion.div
                key={member.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-r from-purple-500 to-blue-600 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="pt-16 pb-8 px-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-6">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {member.expertise.map((skill, i) => (
                      <span key={i} className="text-xs font-medium px-3 py-1 bg-purple-50 text-purple-700 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-4">
                    {Object.entries(member.socialLinks).map(([platform, url]) => {
                      const Icon = {
                        github: FaGithub,
                        twitter: FaTwitter,
                        linkedin: FaLinkedin,
                        email: FaEnvelope
                      }[platform];
                      return (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-purple-600 transition-colors duration-200"
                          aria-label={`${member.name}'s ${platform}`}
                        >
                          <Icon size={18} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-32"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-0.5 shadow-2xl">
            <div className="bg-white rounded-[calc(1.5rem-1px)] p-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Values</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Transparency",
                      description: "We believe in open knowledge sharing and building in public where possible.",
                      icon: (
                        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                      )
                    },
                    {
                      title: "Empathy",
                      description: "We design for real developer pain points we've experienced ourselves.",
                      icon: (
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                      )
                    },
                    {
                      title: "Innovation",
                      description: "We challenge assumptions about how developer tools should work.",
                      icon: (
                        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                      )
                    }
                  ].map((value, i) => (
                    <div key={i} className="text-center">
                      <div className="flex justify-center mb-4">
                        <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 rounded-xl">
                          {value.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl px-8 py-16 shadow-2xl overflow-hidden relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full"></div>
            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your team's workflow?</h2>
              <p className="text-purple-100 text-lg mb-8">
                Join the waitlist for early access to QueryNest's collaborative query platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                  Get Early Access
                </button>
                <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
      
    </div>
  );
};

export default AboutUs;




// // import React from 'react';
// // import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// // const AboutUs = () => {
// //   // Sample team data
// //   const team = [
// //     {
// //       id: 1,
// //       name: 'Vansh Saraf',
// //       role: 'Co-Founder & CEO',
// //       bio: 'Full-stack developer with 5+ years of experience in React and Node.js.',
// //       image: 'https://via.placeholder.com/150',
// //       socialLinks: {
// //         github: 'https://github.com/johndoe',
// //         twitter: 'https://twitter.com/johndoe',
// //         linkedin: 'https://linkedin.com/in/johndoe',
// //         email: 'mailto:johndoe@example.com',
// //       },
// //     },
// //     {
// //       id: 2,
// //       name: 'Jane Smith',
// //       role: 'Co-Founder & CTO',
// //       bio: 'Frontend specialist passionate about building responsive and accessible UIs.',
// //       image: 'https://via.placeholder.com/150',
// //       socialLinks: {
// //         github: 'https://github.com/janesmith',
// //         twitter: 'https://twitter.com/janesmith',
// //         linkedin: 'https://linkedin.com/in/janesmith',
// //         email: 'mailto:janesmith@example.com',
// //       },
// //     },
// //     {
// //       id: 3,
// //       name: 'Alice Johnson',
// //       role: 'Lead Backend Engineer',
// //       bio: 'Backend engineer with expertise in Python, Django, and database optimization.',
// //       image: 'https://via.placeholder.com/150',
// //       socialLinks: {
// //         github: 'https://github.com/alicejohnson',
// //         twitter: 'https://twitter.com/alicejohnson',
// //         linkedin: 'https://linkedin.com/in/alicejohnson',
// //         email: 'mailto:alicejohnson@example.com',
// //       },
// //     },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gradient-to-r from-[#f7f7f7] to-[#eaeaea] py-12">
// //       <div className="container mx-auto px-4">
// //         {/* Hero Section */}
// //         <div className="text-center mb-16">
// //           <h1 className="text-5xl font-bold text-[#333] mb-4">About Us</h1>
// //           <p className="text-[#555] text-lg max-w-2xl mx-auto">
// //             At QueryNest, we are passionate about helping developers find answers to their coding questions quickly and efficiently. Our mission is to create a community-driven platform that empowers developers to learn, share, and grow together.
// //           </p>
// //         </div>

// //         {/* Mission Section */}
// //         <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 mb-16">
// //           <h2 className="text-3xl font-bold text-[#333] mb-6">Our Mission</h2>
// //           <p className="text-[#555] text-lg mb-6">
// //             Our mission is to provide a platform where developers can collaborate, share knowledge, and solve problems together. We believe in the power of community and strive to create a space where everyone feels welcome and supported.
// //           </p>
// //           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
// //             <div className="bg-white/90 backdrop-blur-md p-6 rounded-lg hover:scale-105 transition-transform duration-300 shadow-md">
// //               <h3 className="text-xl font-bold text-[#333] mb-3">Collaborate</h3>
// //               <p className="text-[#555]">Work together to solve problems and share knowledge.</p>
// //             </div>
// //             <div className="bg-white/90 backdrop-blur-md p-6 rounded-lg hover:scale-105 transition-transform duration-300 shadow-md">
// //               <h3 className="text-xl font-bold text-[#333] mb-3">Learn</h3>
// //               <p className="text-[#555]">Grow your skills by learning from others in the community.</p>
// //             </div>
// //             <div className="bg-white/90 backdrop-blur-md p-6 rounded-lg hover:scale-105 transition-transform duration-300 shadow-md">
// //               <h3 className="text-xl font-bold text-[#333] mb-3">Share</h3>
// //               <p className="text-[#555]">Contribute your knowledge and help others succeed.</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Team Section */}
// //         <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8">
// //           <h2 className="text-3xl font-bold text-[#333] mb-8">Meet Our Team</h2>
// //           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
// //             {team.map((member) => (
// //               <div
// //                 key={member.id}
// //                 className="bg-white/90 backdrop-blur-md rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 shadow-md"
// //               >
// //                 <img
// //                   src={member.image}
// //                   alt={member.name}
// //                   className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-[#6a11cb]"
// //                 />
// //                 <h3 className="text-2xl font-bold text-[#333] mb-2">{member.name}</h3>
// //                 <p className="text-[#555] mb-4">{member.role}</p>
// //                 <p className="text-[#555] text-sm mb-6">{member.bio}</p>
// //                 <div className="flex justify-center space-x-4">
// //                   <a
// //                     href={member.socialLinks.github}
// //                     className="text-[#555] hover:text-[#6a11cb] transition-colors duration-200"
// //                   >
// //                     <FaGithub size={24} />
// //                   </a>
// //                   <a
// //                     href={member.socialLinks.twitter}
// //                     className="text-[#555] hover:text-[#6a11cb] transition-colors duration-200"
// //                   >
// //                     <FaTwitter size={24} />
// //                   </a>
// //                   <a
// //                     href={member.socialLinks.linkedin}
// //                     className="text-[#555] hover:text-[#6a11cb] transition-colors duration-200"
// //                   >
// //                     <FaLinkedin size={24} />
// //                   </a>
// //                   <a
// //                     href={member.socialLinks.email}
// //                     className="text-[#555] hover:text-[#6a11cb] transition-colors duration-200"
// //                   >
// //                     <FaEnvelope size={24} />
// //                   </a>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AboutUs;


