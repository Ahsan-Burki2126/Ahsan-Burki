import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useForm as useReactHookForm } from "react-hook-form";
import { useForm as useFormspree, ValidationError } from "@formspree/react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useReactHookForm();

  const [state, handleFormspreeSubmit] = useFormspree("xyzegrpk");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = async (data) => {
    await handleFormspreeSubmit(data);
    if (state.succeeded) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        reset();
      }, 3000);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-blue to-dark-blue overflow-hidden font-mono">
      <div className="max-w-6xl w-full h-full flex flex-col md:flex-row overflow-y-auto scrollbar-hide">
        {/* Left Side - Contact Info & Map */}
        <div
          className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center text-white"
          data-aos="zoom-in"
        >
          <h2 className="text-3xl sm:text-4xl text-center lg:text-start font-bold relative before:absolute before:content-[''] before:w-12 before:h-1 before:bg-purple before:bottom-[-10px] before:left-1/2 mb-8 before:-translate-x-1/2 lg:before:left-0 lg:before:translate-x-0">
            REACH OUT TO ME
          </h2>

          {/* Contact Methods */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg shadow-lg border border-white">
              <Mail size={24} className="text-purple" />
              <div>
                <h3 className="text-lg font-semibold">Chat with us</h3>
                <p className="text-sm text-gray-400">
                  ahsanburki1819@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg shadow-lg border border-white">
              <MapPin size={24} className="text-purple" />
              <div>
                <h3 className="text-lg font-semibold">Visit us</h3>
                <p className="text-sm text-gray-400">
                  Ali Hall, IUB, Bahawalpur, Pakistan
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg shadow-lg border border-white">
              <Phone size={24} className="text-purple" />
              <div>
                <h3 className="text-lg font-semibold">Call us</h3>
                <p className="text-sm text-gray-400">+92 312 9095755</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div
          className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center bg-gradient-to-r from-pink-700 to-purple text-white h-auto"
          data-aos="zoom-in"
        >
          <h2 className="text-2xl sm:text-3xl font-bold">
            Got Ideas? Let's team up.
          </h2>
          <p className="text-sm text-gray-300 mb-6">
            Tell us more about yourself and what you have in mind.
          </p>
          {formSubmitted && (
            <p className="text-green-400 text-sm mb-4">
              Message sent successfully!
            </p>
          )}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold">First Name</label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  name="name"
                  className="w-full px-4 py-2 mt-1 rounded-md bg-transparent border border-white text-white outline-none focus:ring-2 focus:ring-purple-300"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div>
                <label className="text-xs font-semibold">Your Email</label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  name="email"
                  className="w-full px-4 py-2 mt-1 rounded-md bg-transparent border border-white text-white outline-none focus:ring-2 focus:ring-purple-300"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold">Subject</label>
              <input
                type="text"
                {...register("subject", { required: "Subject is required" })}
                name="subject"
                className="w-full px-4 py-2 mt-1 rounded-md bg-transparent border border-white text-white outline-none focus:ring-2 focus:ring-purple-300"
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </div>
            <div>
              <label className="text-xs font-semibold">Your Message</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                name="message"
                rows="4"
                className="w-full px-4 py-2 mt-1 rounded-md bg-transparent border border-white text-white outline-none focus:ring-2 focus:ring-purple-300"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-2 mt-2 text-white font-semibold rounded-lg bg-gradient-to-l from-blue to-dark-blue hover:from-dark-blue hover:to-blue transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
