import React from "react";

const Contact = () => {
  return (
    <div className="w-full max-h-screen pb-10 bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="w-9/12 mx-auto">
        <div className="flex flex-col mx-auto h-full">
          <div className="pb-8">
            <p className="text-start text-xl md:text-2xl lg:text-4xl border-b-4 inline border-gray-600">
              Contact
            </p>
          </div>

          <div className="flex justify-start items-center">
            <form
              action="https://getform.io/f/00c5b6ec-278a-4fd1-9911-bd2a6afbd6ef"
              method="POST"
              className=" flex flex-col w-full "
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-gray-400 hover:bg-black bg-opacity-20 border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-gray-400 hover:bg-black bg-opacity-20 border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="p-2 bg-gray-400 hover:bg-black bg-opacity-20 border-2 rounded-md text-white focus:outline-none"
              ></textarea>

              <button className="btn my-3 border-slate-600 bg-green-500 hover:bg-green-700 shadow-[0_5px_0_rgb(26,251,131,0.3)] hover:shadow-[0_1px_0px_rgb(26,251,131,0.3)] text-white ease-out hover:translate-y-1 duration-[900ms,700ms] transition-all rounded cursor-pointer">
                Let's talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
