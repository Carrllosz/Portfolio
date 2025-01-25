import React from "react";
import { ArrowDownLeftIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-[#141414] flex justify-center items-start p-4">
      <div className="max-w-6xl w-full bg-[#F4F3EF] rounded-md">
        <div className="flex items-center justify-between p-6 md:p-10">
          <h1 className="text-6xl md:text-6xl lg:text-8xl font-thin text-[#141414]">
            Contato
          </h1>
          <ArrowDownLeftIcon className="w-24 h-24 text-[#141414]" />
        </div>

        <div className="my-4">
          <div className="border border-gray-300 mx-10"></div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
