import React from "react";

const TitleContainer = ({ title, subtitle, icon, backgroundImage }) => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    height: "300px", // Adding fixed height
  };

  return (
    <div
      style={backgroundStyle}
      className="border border-zinc-500 text-white rounded-lg bg-cover bg-center flex flex-col items-center justify-center"
    >
                  <div className="w-20 h-20 bg-gainsboro rounded-full p-4 mb-4 text-navy-blue">
               {icon}
            </div>

      <h2 className="text-white font-bold text-xl mt-2">{title}</h2>
      <p className="text-white italic mt-2">{subtitle}</p>
    </div>
  );
};

export default TitleContainer;
