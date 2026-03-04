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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 overflow-hidden">Start a Conversation</h3>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Whether you need a high-converting ad campaign, a custom web solution, or AI-powered automation, I'm here to help your business scale.
            </p>

            <div className="space-y-6">
              <a href="mailto:ataurwithbca86@gmail.com" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <span className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4 text-2xl group-hover:scale-110 transition-transform">📧</span>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Email Me</p>
                  <p className="text-gray-900 font-semibold truncate">atauragency@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/7250570798" target="_blank" rel="noopener noreferrer" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <span className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mr-4 text-2xl group-hover:scale-110 transition-transform">📱</span>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">WhatsApp</p>
                  <p className="text-gray-900 font-semibold">+91 7250570798</p>
                </div>
              </a>
            </div>

            <div className="mt-12">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 px-1">Connect with me</p>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.youtube.com/@Ataurtechbca" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-50 text-red-600 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">YT</a>
                <a href="https://www.facebook.com/profile.php?id=100075557272259" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">FB</a>
                <a href="https://www.instagram.com/ataurway/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-pink-50 text-pink-600 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all">IG</a>
                <a href="https://github.com/Ataur78615" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-50 text-gray-900 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all">GH</a>
                <a href="https://vercel.com/md-ataur-ansaris-projects" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 hover:scale-110 transition-transform">
                  <img src="/img/brand-logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wide">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-gray-900 font-medium"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wide">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-gray-900 font-medium"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wide">Message</label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-gray-900 font-medium resize-none"
                placeholder="How can I help you?"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-lg hover:shadow-lg hover:shadow-blue-200 active:scale-[0.98] transition-all disabled:opacity-50"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
            {successMessage && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-green-600 font-bold bg-green-50 py-3 rounded-xl border border-green-100">
                {successMessage}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
