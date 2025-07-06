import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (

    <>
    <Navbar />
    <div className="main mt-30">
    <div className="min-h-screen pt-24 px-4 md:px-16 bg-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-600">
        Get in Touch
      </h1>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
        We’d love to hear from you. Please fill out the form below or reach out
        to us directly.
      </p>

      <form action="https://formsubmit.co/aldendzaky00@gmail.com" method="POST"  className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 p-3 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 p-3 rounded"
            required
          />
        </div>
        <textarea
          placeholder="Your Message"
          className="w-full border border-gray-300 p-3 rounded h-40 mb-6"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
</div>

<Footer />
    </>
  );
};

export default Contact;
