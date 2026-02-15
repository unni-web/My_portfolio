import React from "react";
import { motion } from "framer-motion";
import Container from "../Components/Common/Container";
import Section from "../Components/Common/Section";

const skills = [
  { name: "Python", icon: "/src/assets/python.png" },
  { name: "JavaScript", icon: "/src/assets/jas.png" },
  { name: "Django", icon: "/src/assets/django.png" },
  { name: "Flask", icon: "/src/assets/flask.png" },
  { name: "React", icon: "/src/assets/react.png" },
  { name: "Rest API", icon: "/src/assets/rest.png" },
  { name: "MongoDB", icon: "/src/assets/db.png" },
  { name: "MySQL", icon: "/src/assets/my2.png" },
  { name: "PostgreSQL", icon: "/src/assets/post2.png" },
  { name: "Git", icon: "/src/assets/git.png" },
  { name: "AWS EC2", icon: "/src/assets/aws2.png" },
  { name: "Auth0", icon: "/src/assets/auth0.png" },
  { name: "JWT", icon: "/src/assets/jwt.png" },
  { name: "Razorpay", icon: "/src/assets/rpay.png" },
  { name: "Tailwind CSS", icon: "/src/assets/twind.png" },
  { name: "Bootsrap", icon: "/src/assets/bootsrap.png" },
  { name: "HTML5", icon: "/src/assets/html.png" },
  { name: "CSS", icon: "/src/assets/css2.png" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <Section id="skills" className="scroll-mt-28 py-20">
      <Container>
        {/* Title Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white text-center mb-8"
        >
          Skills &<span className="text-indigo-500"> Technologies</span>
        </motion.h2>

        {/* Grid Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="
                group
                bg-[#0f172a]
                border border-white/10
                rounded-2xl
                p-6
                flex flex-col items-center justify-center
                text-center
                backdrop-blur-xl
                shadow-lg
                hover:scale-112 hover:shadow-indigo-500/40
                transition-all duration-500
              "
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-500"
              />
              <span className="text-white font-medium text-sm">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

export default Skills;
