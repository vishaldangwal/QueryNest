import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaEdit, FaQuestionCircle, FaReply, FaComment } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProfilePage = () => {
  // User data with enhanced details

  const user = {
    name: 'Vipin Kumar Chauhan',
    bio: 'Full-stack Developer | React Specialist | Open Source Contributor',
    profilePicture: 'https://avatars.githubusercontent.com/u/159447108?s=130&v=4',
    expertise: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'AWS', 'Docker'],
    stats: {
      questions: 42,
      answers: 128,
      contributions: 170,
      reputation: 2450,
    },
    socialLinks: {
      github: 'https://github.com/vipinchauhan45',
      twitter: 'https://twitter.com/vipinkumar',
      linkedin: 'https://www.linkedin.com/in/vipin-kumar-chauhan-278077299/',
      email: 'mailto:vipink.it.23@nitj.ac.in',
    },
    recentActivity: [
      {
        id: 1,
        type: 'question',
        title: 'Optimizing large React component trees with memoization',
        timestamp: '2 hours ago',
        votes: 12,
        tags: ['react', 'performance']
      },
      {
        id: 2,
        type: 'answer',
        title: 'REST API design patterns for microservices',
        timestamp: '5 hours ago',
        votes: 24,
        tags: ['api-design', 'backend']
      },
      {
        id: 3,
        type: 'comment',
        title: 'This solution worked perfectly for my use case!',
        timestamp: '1 day ago',
        post: 'Implementing JWT authentication in Node.js'
      },
    ],
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const activityIcons = {
    question: <FaQuestionCircle className="text-purple-600" />,
    answer: <FaReply className="text-blue-600" />,
    comment: <FaComment className="text-green-600" />
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-[#f5f7ff] pt-20">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-100 opacity-20"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
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

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Header */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-8 text-center relative overflow-hidden border border-gray-100"
        >
          {/* Edit Profile Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-6 right-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white p-3 rounded-full hover:shadow-lg transition-all duration-300 shadow-md"
          >
            <FaEdit size={18} />
          </motion.button>

          {/* Profile Picture */}
          <div className="relative w-40 h-40 mx-auto mb-6 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <img
              src={user.profilePicture}
              alt={user.name}
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl"
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent animate-ping-slow pointer-events-none"></div>
          </div>

          {/* Name and Bio */}
          <h1 className="text-4xl font-bold text-gray-900 mb-3 leading-tight">
            {user.name}
          </h1>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
            {user.bio}
          </p>

          {/* Expertise Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {user.expertise.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ y: -2 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-purple-100"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10"
        >
          {Object.entries(user.stats).map(([key, value]) => (
            <motion.div
              key={key}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-2">
                {value}
              </h3>
              <p className="text-gray-600 text-lg capitalize font-medium">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </p>
            </motion.div>
          ))}
        </motion.section>

        {/* Recent Activity */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Recent Activity
            </h2>
            <button className="text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors">
              View All Activity →
            </button>
          </div>

          <div className="space-y-6">
            {user.recentActivity.map((activity) => (
              <motion.div
                key={activity.id}
                whileHover={{ x: 5 }}
                className="flex items-start p-5 rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
              >
                <div className="flex-shrink-0 mt-1 mr-4 text-xl">
                  {activityIcons[activity.type]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                    {activity.title}
                  </p>
                  {activity.post && (
                    <p className="text-sm text-gray-500 mb-2">
                      On: <span className="text-gray-700">{activity.post}</span>
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {activity.tags?.map((tag, i) => (
                      <span key={i} className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-700 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center mt-3 text-sm text-gray-500">
                    <span>{activity.timestamp}</span>
                    {activity.votes && (
                      <span className="ml-3 flex items-center">
                        <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {activity.votes} upvotes
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Social Links */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl shadow-2xl p-8 mt-10 overflow-hidden relative"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full"></div>
          <div className="relative">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Lets Connect
            </h2>
            <div className="flex justify-center space-x-8">
              {[
                { icon: FaGithub, url: user.socialLinks.github, color: 'text-gray-200 hover:text-white' },
                { icon: FaTwitter, url: user.socialLinks.twitter, color: 'text-blue-200 hover:text-blue-400' },
                { icon: FaLinkedin, url: user.socialLinks.linkedin, color: 'text-blue-200 hover:text-blue-300' },
                { icon: FaEnvelope, url: user.socialLinks.email, color: 'text-red-200 hover:text-red-300' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={`${social.color} transition-all duration-300`}
                  aria-label={`Connect via ${social.icon.displayName}`}
                >
                  <social.icon size={28} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ProfilePage;
