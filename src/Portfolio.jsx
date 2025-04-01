import React from "react";
import { motion } from "framer-motion";

function Portfolio() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center px-4 py-10">
      {/* Full-Width Header with Stronger Glow Effect */}
      <motion.div
        className="bg-gradient-to-r from-purple-700 to-pink-500 py-4 px-6 flex justify-center gap-8 shadow-lg w-full rounded-b-lg border-b-4 border-purple-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ boxShadow: "0px 0px 30px rgba(199, 146, 234, 1)" }}
        transition={{ duration: 0.2 }}
      >
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
            className="text-white font-semibold px-4 text-lg hover:underline"
            whileHover={{
              scale: 1.2,
              color: "#C792EA",
              textShadow: "0px 0px 15px rgba(199, 146, 234, 1)",
            }}
            transition={{ duration: 0.2 }}
          >
            {item}
          </motion.a>
        ))}
      </motion.div>

      {/* Main Content with Stronger Glow and Alignment Fixes */}
      <motion.div
        className="max-w-3xl w-full bg-[#1E1E2E] p-10 mt-12 rounded-lg shadow-lg text-center border-4 border-purple-500 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{
          boxShadow: "0px 0px 30px rgba(199, 146, 234, 1)",
          borderColor: "#C792EA",
        }}
      >
        {/* Profile Section */}
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <img
            src="your-photo.jpg"
            alt="Asal Yazdanpanah"
            className="w-36 h-36 rounded-full border-4 border-purple-400 shadow-lg"
          />
          <h1 className="text-4xl text-purple-300 font-bold mt-4">
            Asal Yazdanpanah
          </h1>
          <p className="text-lg mt-2">
            Psychology Student at{" "}
            <motion.a
              href="https://ut.ac.ir/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:underline"
              whileHover={{
                scale: 1.2,
                color: "#C792EA",
                textShadow: "0px 0px 15px rgba(199, 146, 234, 1)",
              }}
              transition={{ duration: 0.2 }}
            >
              University of Tehran
            </motion.a>
          </p>
        </motion.div>

        {/* About Me Section */}
        <motion.div
          className="mt-8 bg-[#282A36] p-6 rounded-lg shadow-md border-4 border-purple-500 relative"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{
            boxShadow: "0px 0px 30px rgba(199, 146, 234, 1)",
            borderColor: "#C792EA",
          }}
        >
          <h2 className="text-2xl text-purple-300 font-bold">About Me</h2>
          <p className="mt-2">
            I am a psychology student passionate about cognitive science, human
            emotions, and behavioral psychology.
          </p>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          className="mt-8 bg-[#282A36] p-6 rounded-lg shadow-md border-4 border-purple-500 relative"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{
            boxShadow: "0px 0px 30px rgba(199, 146, 234, 1)",
            borderColor: "#C792EA",
          }}
        >
          <h2 className="text-2xl text-purple-300 font-bold">Projects</h2>
          <ul className="list-none space-y-3 mt-4 text-left">
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
                className="text-purple-300 hover:underline"
                whileHover={{
                  scale: 1.1,
                  color: "#C792EA",
                  textShadow: "0px 0px 15px rgba(199, 146, 234, 1)",
                }}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:underline"
                >
                  {project.name}
                </a>{" "}
                - {project.description}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Full-Width Footer with Stronger Glow */}
      <motion.div
        className="text-center py-6 mt-12 bg-gradient-to-r from-purple-700 to-pink-500 w-full border-t-4 border-purple-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ boxShadow: "0px 0px 30px rgba(199, 146, 234, 1)" }}
      >
        © 2025 Asal Yazdanpanah | All Rights Reserved
      </motion.div>
    </div>
  );
}

export default Portfolio;