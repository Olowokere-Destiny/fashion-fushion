"use client";
import { useState } from "react";

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <div className="md:w-[55%]">
      {!sent ? (
        <>
          <h1 className="text-[1.8rem] text-[#3a3939] font-[600]">
            We'd love to hear from you.
          </h1>
          <p className="text-[#555] text-[0.9rem] my-4">
            If you have any query or any type of suggestion, you can contact us
            here. We would love to hear from you.
          </p>
          <div className="flex justify-between items-center my-4">
            <label htmlFor="name" className="text-[1rem] md:text-[0.8rem]">
              Name
              <input
                id="name"
                type="text"
                className="border border-[#ebebeb] outline-none block w-[42vw] md:w-[23vw] p-3"
              />
            </label>
            <label htmlFor="name" className="text-[1rem] md:text-[0.8rem]">
              Email
              <input
                id="email"
                type="email"
                className="border border-[#ebebeb] outline-none block w-[42vw] md:w-[23vw] p-3"
              />
            </label>
          </div>
          <label htmlFor="message" className="text-[1rem] md:text-[0.8rem]">
            <textarea
              id="message"
              className="border border-[#ebebeb] outline-none block w-full mt-4 p-3 resize-none h-32"
            ></textarea>
          </label>
        </>
      ) : (
        <h1 className="text-[1.8rem] font-[600] mb-10 md:mb-0">
        Message sent. We’ll contact you soon.
      </h1>      )}
      <button
        onClick={()=>setSent(true)}
        type="button"
        className={`${sent && "hidden"} block my-8  px-4 py-3 md:px-6 md:py-4 text-[0.8rem] text-white bg-blue w-max`}
      >
        SEND MESSAGE
      </button>
    </div>
  );
}

export default ContactForm;
