import { motion } from "framer-motion";
import { Send } from "lucide-react";
import BlurEffect from "./subcomponents/BlurEffect";
import { useState } from "react";
import * as Yup from "yup"; 

const ContactPage = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);


  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[A-Za-z\s'-]{3,}$/, "Enter a valid name")
      .required("Name is required"),
    email: Yup.string()
      .email("Enter a valid email")
      .notOneOf(["sex@gmail.com", "test@mail.com", "spam@xyz.com"], "Invalid email")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters long")
      .required("Message is required"),
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Validating...");

    const formData = new FormData(event.target);
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setResult("Error: Missing API Key.");
      setIsSubmitting(false);
      return;
    }

    const formValues = {
      name: formData.get("name").trim(),
      email: formData.get("email").trim(),
      message: formData.get("message").trim(),
    };

    try {
      // Validate using Yup
      await validationSchema.validate(formValues);

      formData.append("access_key", accessKey);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        setResult(data.message || "Failed to send message");
      }
    } catch (error) {
      setResult(error.message);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 5000);
    }
  };

  return (
    <BlurEffect>
      <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-b from-[#26687e33] to-black p-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-Geist font-extrabold mb-6"
        >
          Contact Me
        </motion.h1>
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="from-[#0a1c2233] to-black bg-opacity-80 p-8 rounded-4xl shadow-lg w-full max-w-lg"
        >
          {result && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`mb-4 p-3 rounded-lg ${
                result.includes("success")
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {result}
            </motion.div>
          )}

          <div className="mb-4">
            <label className="block text-gray-300 font-Geist font-semibold mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#64d3ffbd]"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 font-Geist font-semibold mb-1">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#64d3ffbd]"
              placeholder="example@mail.com"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 font-Geist font-semibold mb-1">
              Your Message
            </label>
            <textarea
              name="message"
              className="w-full px-4 py-3 h-40 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#64d3ffbd] resize-none"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center bg-slate-800 hover:bg-slate-900 border border-[#64d3ff41] text-white font-bold py-2 px-4 rounded-lg transition-all relative"
          >
            {isSubmitting ? "Sending..." : "Send"}
            <motion.div
              className="absolute right-4"
              initial={{ x: 0 }}
              animate={{
                x: [-400, -10, 20, 0],
                y: [0, -15, 5, 0],
                rotate: [0, -15, 15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <Send className="w-5 h-5" />
            </motion.div>
          </button>
        </motion.form>
      </div>
    </BlurEffect>
  );
};

export default ContactPage;
