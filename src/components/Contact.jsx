import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import "../index.css";

const InputField = ({ label, value, onChange, placeholder, name, type }) => (
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    />
  </label>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setNameError("");
    setConfirmation("");

    if (!validateEmail(form.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!form.name.trim()) {
      setNameError("Name is required.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setLoading(false);
        setConfirmation("Thank you! I will get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setConfirmation("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="xl:mt-12 flex flex-col gap-10 overflow-hidden">
      {/* Top Section: Form and Earth Canvas */}
      <div className="flex xl:flex-row flex-col-reverse gap-10">
        <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact Me</h3>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            <InputField
              label="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Insert Your name here..."
              type="text"
            />
            {nameError && <span className="text-red-500">{nameError}</span>}

            <InputField
              label="Email Address"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              type="email"
            />
            {emailError && <span className="text-red-500">{emailError}</span>}

            <InputField
              label="Your Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say...?"
              type="text"
            />

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
            {confirmation && <p className="text-green-500 mt-2">{confirmation}</p>}
          </form>
        </motion.div>

        <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <EarthCanvas />
        </motion.div>
      </div>

      {/* Location Section */}
      <motion.div variants={slideIn("up", "tween", 0.3, 1)} className="w-full mt-12">
        <div className="bg-black-100 rounded-2xl p-6 border border-[#915EFF]/40 shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-2"> My Location</h3>
          <p className="text-secondary mb-4">Christ the King College, Gingoog City</p>

          <div className="relative w-full h-[400px] rounded-xl overflow-hidden group cursor-pointer">
            {/* Map Preview (non-interactive iframe) */}
            <iframe
              title="Christ the King College Gingoog"
              src="https://www.google.com/maps?q=Christ%20the%20King%20College%20Gingoog&output=embed"
              className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 pointer-events-none"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Click Anywhere Overlay */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Christ+the+King+College+Gingoog"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
            />

            {/* Search Button */}
            <div className="absolute bottom-4 right-4 z-20">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Christ+the+King+College+Gingoog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#915EFF] text-white px-5 py-3 rounded-xl font-semibold shadow-lg hover:bg-purple-700 transition"
              >
                🔍 Search this area
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
