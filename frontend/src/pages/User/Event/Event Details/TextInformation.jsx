import React from "react";
// Importing Component(s)


const TextInformation = ({title, content}) => {
  return (
    <div className="rounded-lg w-full flex flex-col">
      <p class="relative inline-block mt-3">
        <span class="bg-light-blue rounded-lg text-white text-md px-2 py-1 mt-2">
          {title}
        </span>
      </p>
      <div className="inline-block">
        <p className="border-b-2 border-light-blue py-3 text-white">{content}</p>
      </div>
    </div>
  );
};

export default TextInformation;
