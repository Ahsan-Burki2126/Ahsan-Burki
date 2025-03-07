import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  React.useEffect(() => {
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
  } = useForm();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      reset();
    }, 3000);
  };

  return (
    <div className="w-full h-screen flex justify-center  items-center bg-gradient-to-r from-blue to-dark-blue overflow-hidden font-mono">
      <div className="max-w-6xl w-full h-full flex flex-col md:flex-row overflow-y-auto scrollbar-hide">
        {/* Left Side - Contact Info & Map */}
        <div
          className="w-full md:w-1/2  p-6 sm:p-8 flex flex-col justify-center  text-white"
          data-aos="zoom-in"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">REACH OUT TO ME</h2>
          <div className="w-12 h-1 bg-purple mt-2 mb-6"></div>

          {/* Contact Methods */}
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg shadow-lg border border-white">
              <Mail size={24} className="text-purple" />
              <div>
                <h3 className="text-lg font-semibold">Chat with us</h3>
                <p className="text-sm text-gray-400">
                  ahsanburki1819@gmail.com
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg shadow-lg border border-white">
              <MapPin size={24} className="text-purple" />
              <div>
                <h3 className="text-lg font-semibold">Visit us</h3>
                <p className="text-sm text-gray-400">
                  Ali Hall ,Baghdad-ul-Jadeed Campus,IUB,Bahawalpur,Pakistan
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg shadow-lg border border-white">
              <Phone size={24} className="text-purple" />
              <div>
                <h3 className="text-lg font-semibold">Call us</h3>
                <p className="text-sm text-gray-400">+92 312 9095755</p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full h-40 sm:h-48 mt-6 rounded-lg overflow-hidden shadow-lg border border-white">
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d674.806278129215!2d71.75155611900914!3d29.376298656816015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b9139ddaf2389%3A0x1c7b760a89a99a47!2sAli%20Hall%20boys%20Hostel%2C%20IUB!5e0!3m2!1sen!2sus!4v1741382043664!5m2!1sen!2sus://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093673!2d144.95592831531857!3d-37.817209979751554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1e255ab%3A0x5045675218ce7e33!2sVictoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1634853063123!5m2!1sen!2sus"
            ></iframe>
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
            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold">First Name</label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-2 mt-1 rounded-md bg-transparent border border-white text-white outline-none focus:ring-2 focus:ring-purple-300 "
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold">Your Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full px-4 py-2 mt-1 rounded-md bg-transparent border border-white text-white outline-none focus:ring-2 focus:ring-purple-300 "
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="text-xs font-semibold">Subject</label>
              <input
                type="text"
                {...register("subject", { required: "Subject is required" })}
                className="w-full px-4 py-2 mt-1 rounded-md bg-transparent border border-white text-white outline-none focus:ring-2 focus:ring-purple-300 "
              />
              {errors.subject && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="text-xs font-semibold">Your Message</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                rows="4"
                className="w-full px-4 py-2 mt-1 rounded-md bg-transparent border border-white text-white outline-none focus:ring-2 focus:ring-purple-300 "
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 mt-2 text-white font-semibold rounded-lg bg-gradient-to-l from-blue to-dark-blue hover:from-dark-blue hover:to-blue transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Hide Scrollbars */}
      <style>{`
        ::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Contact;
