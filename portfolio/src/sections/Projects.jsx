import React from "react";
import { motion } from "framer-motion";
import Container from "../Components/Common/Container";
import Section from "../Components/Common/Section";

const projects = [
  {
    title: "Phoneverse",
    description: "Phoneverse is a full-stack e-commerce web application that enables users to explore mobile products, manage carts, and place orders with a smooth checkout flow",
    tech: "• Django • Razorpay • HTML5 • CSS • Bootstrap • JavaScript",
    image: "/src/assets/phoneverse.png",
    link: "#",
  },
  {
    title: "BMS website",
    description: "BMSclone is an online movie ticket booking platform inspired by BookMyShow, designed for a smooth and user-friendly booking flow.",
    tech: "• Django • Bootstrap",
    image: "/src/assets/BMS.png",
    link: "#",
  },
  {
    title: "Picgram",
    description: "Picgram is a photo-sharing social platform inspired by Instagram, built to connect users through visual storytelling.",
    tech: "• Django • CSS",
    image: "/src/assets/picgram.png",
    link: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <h1 className="text-4xl font-bold text-white mb-8">
          My <span className="text-indigo-500">Projects</span>
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111827] rounded-2xl overflow-hidden border border-gray-700 shadow-lg"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-3">
                  {project.description}
                </p>

                <p className="text-indigo-400 text-sm mb-4">
                  {project.tech}
                </p>

               
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Projects;
