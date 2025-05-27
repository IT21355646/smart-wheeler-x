import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import CommonTitle from "./CommonTitle";

const ContactUs = () => {
  return (
    <section id="contact" className="py-16 font-poppins text-white">
      <div className="max-w-7xl mx-auto px-4">
        <CommonTitle title="Contact Us" />
        <p className="text-dimWhite text-lg mb-12 text-center">
          We would love to hear from you! Send us a message or reach out directly.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Contact Form */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 resize-none focus:outline-none focus:ring-2 focus:ring-secondary"
              ></textarea>
              <button
                type="submit"
                className="bg-secondary text-black py-2 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-6 text-base">
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-secondary mt-1" />
                <div>
                  <p className="font-medium">General Inquiries</p>
                  <p className="text-white/70">smartwheeler@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-secondary mt-1" />
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-white/70">+94 77 977 6974</p>
                  <p className="text-white/70">+94 76 191 6182</p>
                  <p className="text-white/70">+94 76 040 1048</p>
                  <p className="text-white/70">+94 71 394 6766</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;