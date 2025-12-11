"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("✅ Successfully submitted your message!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccessMessage("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      setSuccessMessage("❌ An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">Let's discuss your next project</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <span className="mr-4">📧</span>
                <a href="mailto:ataurwithbca86@gmail.com" className="text-blue-600 hover:text-blue-800">
                  ataurwithbca86@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-4">📱</span>
                <a href="https://wa.me/7250570798" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
                  +91 7250570798
                </a>
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="https://www.youtube.com/@Ataurtechbca" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800">
                  YouTube
                </a>
                <a href="https://www.facebook.com/profile.php?id=100075557272259" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  Facebook
                </a>
                <a href="https://www.instagram.com/ataurway/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                  Instagram
                </a>
                <a href="https://github.com/Ataur78615" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700">
                  GitHub
                </a>
                <a href="https://vercel.com/md-ataur-ansaris-projects" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
                  Vercel
                </a>
              </div>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
            {successMessage && (
              <p className="text-center text-green-600 font-semibold">{successMessage}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
