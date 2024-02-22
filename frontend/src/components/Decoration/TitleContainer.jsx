import React from "react";

const TitleContainer = ({ title, subtitle, icon, backgroundImage }) => {
  const containerStyle = {
    background: `url(${backgroundImage})`,
    backgroundSize: "cover",
    borderRadius: "8px", // Adjust the border radius as needed
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "300px", // Set the desired height
  };

  const titleStyle = {
    color: "black",
    fontWeight: "bold",
    fontSize: "24px",
  };

  const subtitleStyle = {
    color: "black",
    fontWeight: "semibold",
    fontSize: "16px",
  };

  return (
    <div style={containerStyle}>
      {icon}
      <h2 style={titleStyle}>{title}</h2>
      <p style={subtitleStyle}>{subtitle}</p>
    </div>
  );
};

export default TitleContainer;
