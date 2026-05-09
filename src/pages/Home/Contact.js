import React from "react";

const Contact = () => {
  return (
    <div className="w-full py-10 text-white">
      <div className="flex flex-col mx-auto h-full">
        {/* TITLE */}
        <div className="pb-8">
          <p className="text-start text-xl md:text-2xl lg:text-4xl border-b-4 inline border-gray-600">
            Contact
          </p>
        </div>

        {/* FORM */}
        <div className="flex justify-start items-center">
          <form
            action="https://getform.io/f/00c5b6ec-278a-4fd1-9911-bd2a6afbd6ef"
            method="POST"
            className="flex flex-col w-full"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-gray-400 hover:bg-black bg-opacity-20 border-2 rounded-md text-white focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-gray-400 hover:bg-black bg-opacity-20 border-2 rounded-md text-white focus:outline-none"
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-gray-400 hover:bg-black bg-opacity-20 border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="btn group border-slate-600 bg-transparent hover:bg-[#6d28d9] shadow-[0_5px_0_rgba(109,40,217,0.3)] hover:shadow-[0_1px_0px_rgba(109,40,217,0.3)] text-white ease-out hover:translate-y-1 duration-[900ms,700ms] transition-all rounded cursor-pointer">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
