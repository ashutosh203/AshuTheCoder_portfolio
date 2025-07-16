import emailjs from "emailjs-com";
import React from "react";
const ContactSection = () => {
  const HandleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ddeht1n", //  yaha apna Service ID daalo
        "template_c1tdcdt", //  yaha apna Template ID daalo
        e.target,
        "kKRf4WnP-Pt8HMR3H" //  yaha apna Public Key daalo
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          e.target.reset(); // form clear
        },
        (error) => {
          console.log(error.text);
          alert("❌ Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 scroll-target ">
      <h2 className="text-4xl font-bold text-center text-white">Contact Me</h2>
      <p className="text-center mt-4 text-lg text-gray-400">
        Whether it's a game-changing idea or just a hello — my inbox is always
      </p>
      <div className="mt-12 max-w-xl mx-auto ">
        <form method="POST" onSubmit={HandleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="text-white sr-only">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
              autoComplete="true"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-color"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
              autoComplete="true"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-color"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              your message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              placeholder="Write your message"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-color"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-accent text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-blue-400 transition-colors duration-300 cursor-pointer"
            >
              Shoot me a message
            </button>
          </div>
        </form>
        <p className="text-center mt-8 text-gray-400 capitalize">
          Send a mail to&nbsp;: &nbsp;
          <a
            href="#"
            className="text-accent-color hover:underline text-blue-600"
          >
            ashutoshkumarshah8512@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;

//  transition-colors duration-300 hover:bg-blue-400 &nbsp;
