import { useState } from "react";
import { motion } from "framer-motion";
import barcode from "../assets/barcode.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 ">
          {/* Left Content */}
          <motion.div
            className="flex flex-col gap-8 pt-10"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Heading */}
            <div>
              <h1 className="font-akira text-5xl md:text-6xl font-bold mb-4 text-[#012169]">
                Get in Touch
              </h1>
              <p className="font-open-sans text-lg text-gray-600 max-w-lg">
                Reach out to us for coaching sessions, corporate events, or any
                general enquiries.
              </p>
            </div>

            {/* Features / Icons */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
              <div className="flex items-center gap-3">
                <span className="text-xl">🏓</span>
                <p className="text-sm text-gray-700">
                  Professional Coaching Sessions
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">🏢</span>
                <p className="text-sm text-gray-700">Corporate & Team Events</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📅</span>
                <p className="text-sm text-gray-700">
                  Community Events & Updates
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">🤝</span>
                <p className="text-sm text-gray-700">Partnership Enquiries</p>
              </div>
            </div> */}

            {/* WhatsApp Card */}
            <div className="flex items-center gap-6 p-6 rounded-2xl bg-green-50 border border-green-200 max-w-lg">
              {/* QR Code Placeholder */}
              <div className="w-50 h-24 bg-white border border-green-300 rounded-lg flex items-center justify-center text-xs text-green-700 font-semibold">
                <img src={barcode} alt="barcode" />
              </div>

              {/* WhatsApp Text */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-green-700 font-semibold">
                  <span className="text-xl">💬</span>
                  WhatsApp Communities
                </div>
                <p className="text-sm text-gray-700">
                  Join our WhatsApp communities to stay connected with updates,
                  events, and exclusive offers.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            className="bg-white border border-gray-200 p-10 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div style={{ display: "none" }}>
                <label>
                  Don’t fill this out if you're human:{" "}
                  <input name="bot-field" />
                </label>
              </div>

              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#012169] focus:outline-none"
                />
              </div> */}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Name
                </label>
                <input
                  type="text"
                  name="contactName"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#012169] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#012169] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#012169] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  rows={4}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#012169] focus:outline-none"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 rounded-full text-base font-semibold bg-[#FEDD00] text-black shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
