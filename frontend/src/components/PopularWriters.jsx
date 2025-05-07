import React from "react";

const PopularWriters = () => {
  // Sample data for popular writers (with real Unsplash images)
  const writers = [
    {
      id: 1,
      name: "Vansh Maurya",
      bio: "Full-stack developer with 5+ years of experience in React and Node.js.",
      image:
        "https://avatars.githubusercontent.com/u/72353067?v=4",
      profileLink: "/writers/vanshmaurya",
      expertise: ["React", "Node.js", "JavaScript"],
    },
    {
      id: 2,
      name: "Vishal Dangwal",
      bio: "Frontend specialist passionate about building responsive and accessible UIs.",
      image:
        "https://avatars.githubusercontent.com/u/148211883?s=400&u=c817395005ab9fc34251d598a47cb4e74f054920&v=4",
      profileLink: "/writers/vishaldangwal",
      expertise: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 3,
      name: "Vansh Saraf",
      bio: "Backend engineer with expertise in Python, Django, and database optimization.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQFcKx0-YiHvWA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698509160876?e=1752105600&v=beta&t=qoeN95RcNgA-wc2XzNmK4VLfDLd1Fm6C0eE1O9WHzlU",
      profileLink: "/writers/alicejohnson",
      expertise: ["Python", "Django", "SQL"],
    },
  ];

  return (
    <section className="bg-[#f8f9fa] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#1a1a1a]">
          Popular Writers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {writers.map((writer) => (
            <div
              key={writer.id}
              className="relative bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 transform hover:scale-105 group"
            >
              {/* Writer Image */}
              <img
                src={writer.image}
                alt={writer.name}
                className="w-full h-64 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* Static Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-[#1a1a1a]">
                  {writer.name}
                </h3>
                <p className="text-[#666] mb-4">{writer.bio}</p>
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-bold mb-2">{writer.name}</h3>
                <p className="text-sm mb-4">{writer.bio}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {writer.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-[#4dabf7] text-white px-3 py-1 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  href={writer.profileLink}
                  className="inline-block w-full text-center bg-[#1a1a1a] text-white px-6 py-3 rounded-md hover:bg-[#4dabf7] transition-colors duration-200"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularWriters;
