import React from 'react';
import { motion } from 'framer-motion';
import galaxyImage from '/galaxy.jpg';
import profilePhoto from '/profile.jpg';

function Portfolio() {
  return (
    <div 
  className="fixed inset-0" // Changed from absolute to fixed
  style={{
    backgroundImage: `url(${galaxyImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(0.56) contrast(1.35) saturate(1.4)'
      }}
      >
      
      {/* Fixed Header - Made thinner (py-3 instead of py-4) */}
      <motion.header
        className="fixed top-0 w-full z-50 bg-gradient-to-r from-purple-700 to-pink-500 py-3 px-4 shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center items-center gap-4 text-center">
          {["CV", "LinkedIn", "GitHub", "Email"].map((item, index) => (
            <motion.a
              key={index}
              href="#"
              className="text-white font-semibold text-sm md:text-base px-2 py-1 whitespace-nowrap"
              whileHover={{
                scale: 1.15,
                color: "#E0BBFF",
                textShadow: "0 0 10px rgba(199, 146, 234, 1)",
              }}
              transition={{ duration: 0.2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.header>

      {/* Scrollable Content Area - Completely hidden scrollbar */}
      <div className="h-full pt-[60px] pb-[76px] overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style>{`
          ::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        {/* Centered Content Wrapper */}
        <div className="min-h-[calc(100vh-104px)] flex items-center justify-center p-4">
          {/* Main Content Box - Perfectly centered */}
          <motion.div
            className="w-full max-w-3xl bg-gray-800 p-6 md:p-10 rounded-xl border-2 border-purple-600 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{
              borderColor: "#C792EA",
              boxShadow: "0px 0px 20px rgba(199, 146, 234, 1)",
              scale: 1.01,
            }}
          >
            {/* Profile Section */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <img
                src={profilePhoto}
                alt="Asal Yazdanpanah"
                className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-purple-400 shadow-lg object-cover"
              />
              <motion.h1
                className="text-2xl md:text-3xl text-purple-400 font-bold mt-4"
                whileHover={{
                  scale: 1.05,
                  color: "#C792EA",
                  textShadow: "0 0 10px rgba(199, 146, 234, 1)",
                }}
              >
                Asal Yazdanpanah
              </motion.h1>
              <p className="text-base md:text-lg mt-2">
                Psychology Student at{" "}
                <motion.a
                  href="https://ut.ac.ir/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 ml-1 hover:text-purple-300"
                  whileHover={{
                    scale: 1.7,
                    color: "#C792EA",
                    textShadow: "0 0 40px rgb(234, 146, 187)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  University of Tehran
                </motion.a>
              </p>
            </motion.div>
            {/* About Section */}
            <motion.section
              className="mt-8 bg-gray-700 p-6 rounded-lg border-2 border-purple-600 shadow-md"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{
                borderColor: "#C792EA",
                boxShadow: "0px 0px 20px rgba(199, 146, 234, 1)",
                scale: 1.05,
              }}
            >
              <h2 className="text-xl md:text-2xl text-purple-400 font-bold text-center">
                <i className="fas fa-user mr-2"></i> About Me
              </h2>
              <p className="mt-2 text-sm md:text-base text-center">
                I am a psychology student passionate about cognitive science, human emotions, and behavioral psychology.
              </p>
            </motion.section>

            {/* Projects Section */}
            <motion.section
              className="mt-8 bg-gray-700 p-6 rounded-lg border-2 border-purple-600 shadow-md"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{
                borderColor: "#C792EA",
                boxShadow: "0px 0px 20px rgba(199, 146, 234, 1)",
                scale: 1.054,
              }}
            >
              <h2 className="text-xl md:text-2xl text-purple-400 font-bold text-center">
                <i className="fas fa-folder-open mr-2"></i> Projects
              </h2>
              <ul className="mt-4 space-y-4 pl-6">
                {[
                  {
                    name: "Project 1",
                    icon: "fa-brain",
                    description: "Research on cognitive behavior and perception in decision making"
                  },
                  {
                    name: "Project 2", 
                    icon: "fa-heart",
                    description: "Psychological study on human emotions bluh bluh bluh"
                  },
                  {
                    name: "Project 3",
                    icon: "fa-comments",
                    description: "Mental health awareness campaign in the cognition task"
                  }
                ].map((project, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-3"
                    whileHover={{
                      scale: 1.02,
                      color: "#C792EA",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <i className={`fas ${project.icon} text-purple-400 mt-1`}></i>
                    <div>
                      <span className="font-semibold text-purple-300">{project.name}:</span> {project.description}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          </motion.div>
        </div>
      </div>

      {/* Fixed Footer - Made thinner (py-3 instead of py-4) */}
      <motion.footer
        className="fixed bottom-0 w-full z-50 bg-gradient-to-r from-purple-700 to-pink-500 py-3 text-center shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        © 2025 Asal Yazdanpanah | All Rights Reserved
      </motion.footer>
    </div>
  );
}

export default Portfolio;