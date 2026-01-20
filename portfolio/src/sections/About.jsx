import React from "react";
import Container from "../Components/Common/Container";
import Section from "../Components/Common/Section";
import TextType from "../ui/TextType";

const About = () => {
  return (
    <>
      <Section id="about" className="relative overflow-hidden">
        {/* Animated Gradient Background */}


        <Container>
          <div className="relative grid gap-16 lg:grid-cols-2 items-center py-20">

            {/* LEFT CONTENT */}
            <div className="animate-[fadeUp_1s_ease_forwards]">
              <h1 className="text-5xl font-bold text-white mb-8">
                About <span className="text-indigo-500">Me</span>
              </h1>

              <TextType
                text=" I'm Unnikrishnan., a passionate and self-motivated full-stack Python developer with hands-on experience in building dynamic web applications using Django, React, and the MERN stack. My journey into tech began with curiosity and grew into a strong commitment to building solutions that matter"
                text2=" Over time, I've developed a solid understanding of both frontend and backend development, and I enjoy transforming ideas into real-world applications. I'm always eager to learn new technologies, explore innovative ideas, and take on meaningful challenges that push my limits."
                typingSpeed={90}
                pauseDuration={1500}
                variableSpeedEnabled
              />

              {/* CONTACT INFO */}
              <div className="grid gap-4 mb-10 text-gray-300">
                <div className="flex items-center gap-3">
                  <span className="text-blue-500 text-lg">✉</span>
                  <span>unnikrish1011@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-500 text-lg">📞</span>
                  <span>+91 9188025258</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-500 text-lg">📍</span>
                  <span>Kottayam, Kerala</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-500 text-lg">💻</span>
                  <span>github.com/unni-web</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition text-white px-7 py-3 rounded-lg font-medium"
              >
                Contact Me →
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <div
                className="relative w-80 h-80 rounded-full"
                style={{ animation: "float 4s ease-in-out infinite" }}
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

                {/* Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-blue-500" />

                {/* Image */}
                <img
                  src="/src/assets/profile.jpeg"
                  alt="Profile"
                  className="relative w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

          </div>
        </Container>
      </Section>
    </>
  );
};

export default About;
