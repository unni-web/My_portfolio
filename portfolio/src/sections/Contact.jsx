import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "../Components/Common/Container";
import Section from "../Components/Common/Section";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
  e.preventDefault();
  setStatus("sending");

  emailjs
    .sendForm(
      "service_sag7q08",
      "template_s82llyy",
      formRef.current,
      {
        publicKey: "jCp4B_NDKOiWDimRheYRq",
      }
    )
    .then(
      () => {
        setStatus("success");
        formRef.current.reset();
      },
      (error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
      }
    );
};


  return (
    <Section id="contact" className="py-28 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-900/30 via-slate-900 to-black" />

      <Container>
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            Contact <span className="text-indigo-500">Me</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Let’s discuss how we can work together on your next project
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-2xl mx-auto bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            {/* Name */}
            <div>
              <label className="text-white text-sm mb-2 block">
                Full Name *
              </label>
              <input
                type="text"
                name="from_name"
                required
                placeholder="Enter your full name..."
                className="w-full bg-[#020617] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-indigo-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-white text-sm mb-2 block">
                Email *
              </label>
              <input
                type="email"
                name="from_email"
                required
                placeholder="Enter your email..."
                className="w-full bg-[#020617] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-indigo-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-white text-sm mb-2 block">
                Message *
              </label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Enter your message..."
                className="w-full bg-[#020617] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-indigo-500 resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 transition text-white py-3 rounded-lg font-medium"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {/* Status */}
            {status === "success" && (
              <p className="text-green-400 text-sm text-center">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                ❌ Something went wrong. Try again.
              </p>
            )}
          </form>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
