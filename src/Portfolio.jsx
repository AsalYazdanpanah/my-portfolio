import React from 'react';
import { motion } from 'framer-motion';

function Portfolio() {
  return (
    <div 
  className="min-h-screen w-full text-white flex flex-col items-center overflow-x-hidden"
  style={{
    backgroundImage: "url('/galaxy.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay'
  }}
>
      {/* Header */}
      <motion.div
        className="bg-gradient-to-r from-purple-700 to-pink-500 py-4 px-4 fixed top-0 w-full z-10 shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center items-center gap-4 text-center">
          {["CV", "LinkedIn", "GitHub", "Email"].map((item, index) => (
            <motion.a
              key={index}
              href={
                item === "CV"
                  ? "your-cv.pdf"
                  : item === "LinkedIn"
                  ? "https://linkedin.com"
                  : item === "GitHub"
                  ? "https://github.com"
                  : "mailto:asalyp83@gmail.com"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold text-sm md:text-base px-2 py-1 whitespace-nowrap"
              whileHover={{
                scale: 1.1,
                color: "#E0BBFF",
                textShadow: "0 0 10px rgba(199, 146, 234, 1)",
              }}
              transition={{ duration: 0.2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="pt-20 pb-20 px-4 w-full flex justify-center">
        <motion.div
          className="w-full max-w-3xl bg-gray-800 p-6 md:p-10 rounded-xl border-2 border-purple-600 shadow-lg text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{
            borderColor: "#C792EA",
            boxShadow: "0px 0px 20px rgba(199, 146, 234, 1)",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Profile */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <img
              src="your-photo.jpg"
              alt="Asal Yazdanpanah"
              className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-purple-400 shadow-lg"
              
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
                  scale: 1.1,
                  color: "#C792EA",
                  textShadow: "0 0 10px rgba(199, 146, 234, 1)",
                }}
                transition={{ duration: 0.2 }}
              >
                University of Tehran
              </motion.a>
            </p>
          </motion.div>

          {/* About */}
          <motion.div
            className="mt-8 bg-gray-700 p-6 rounded-lg border-2 border-purple-600 shadow-md"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{
              scale: 1.03,
              borderColor: "#C792EA",
              boxShadow: "0px 0px 20px rgba(199, 146, 234, 1)",
            }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl text-purple-400 font-bold">
              <i className="fas fa-user mr-2"></i> About Me
            </h2>
            <p className="mt-2 text-sm md:text-base">
              I am a psychology student passionate about cognitive science, human emotions, and behavioral psychology.
            </p>
          </motion.div>

          {/* Projects */}
          <motion.div
            className="mt-8 bg-gray-700 p-6 rounded-lg border-2 border-purple-600 shadow-md text-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{
              scale: 1.03,

              borderColor: "#C792EA",
              boxShadow: "0px 0px 20px rgba(199, 146, 234, 1)",
            }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl text-purple-400 font-bold flex justify-center items-center">
              <i className="fas fa-folder-open mr-2"></i> Projects
            </h2>
            <ul className="list-none mt-4 space-y-3 text-sm md:text-base text-left max-w-md mx-auto">
              {[
                {
                  name: "Project 1",
                  url: "https://example.com/project1",
                  description: "Research on cognitive behavior and perception.",
                },
                {
                  name: "Project 2",
                  url: "https://example.com/project2",
                  description: "Psychological study on human emotions.",
                },
                {
                  name: "Project 3",
                  url: "https://example.com/project3",
                  description: "Mental health awareness campaign.",
                },
              ].map((project, index) => (
                <motion.li
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    color: "#C792EA",
                    textShadow: "0 0 10px rgba(199, 146, 234, 1)",
                  }}
                  className="flex items-start gap-2"
                >
                  <i className="fas fa-book text-gray-400 mt-1"></i>
                  <div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 font-semibold hover:underline focus:outline-none focus:text-purple-300 visited:text-purple-400"
                    >
                      {project.name}
                    </a>{" "}
                    – {project.description}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer
        className="w-full text-center py-4 bg-gradient-to-r from-purple-700 to-pink-500 text-sm md:text-base fixed bottom-0"
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

