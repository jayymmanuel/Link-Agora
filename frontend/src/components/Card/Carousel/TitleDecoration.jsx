import React, { useState, useEffect } from 'react';

const TitleDecoration = ({ title, subtitle, overlayImage, backgroundImages }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    // Function to cycle through background images
    const cycleBackgrounds = () => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    };

    // Set a timer to cycle the background every 5 seconds (adjust as needed)
    const interval = setInterval(cycleBackgrounds, 5000);

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(interval);
    };
  }, [backgroundImages]);

  const containerStyle = {
    position: 'relative',
    width: '100%', // Set a fixed width for the container
    height: '250px', // Set a fixed height for the container
  };

  const imageStyle = {
    width: '100%', // Set the same fixed width for both images
    height: '250px', // Set the same fixed height for both images
    objectFit: 'cover', // Ensure the images cover the entire container
    borderRadius: '25px', // Add rounded edges (adjust the value as needed)
    opacity: imagesLoaded ? 1 : 0, // Show images when loaded
    transition: 'opacity 0.5s ease', // Add a smooth transition
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%', // Set the same fixed width for the overlay image
    height: '100%', // Set the same fixed height for the overlay image
  };

  const textStyle = {
    position: 'absolute',
    top: '50%', // Center vertically
    left: '10%', // Adjust the left value for horizontal positioning
    transform: 'translateY(-50%)', // Center vertically
    fontSize: '24px', // Adjust the font size as needed
    fontWeight: 'bold',
    color: 'white', // Set the text color
  };

  const subtitleStyle = {
    position: 'absolute',
    top: '60%', // Adjust the top value for vertical positioning
    left: '10%', // Adjust the left value for horizontal positioning
    transform: 'translateY(-50%)', // Center vertically
    fontSize: '16px', // Adjust the font size as needed
    color: 'white', // Set the text color
  };

  return (
    <div className="w-full" style={containerStyle}>
      {/* Background Image */}
      <img
        src={backgroundImages[backgroundIndex]}
        alt="Background"
        style={imageStyle}
        onLoad={() => setImagesLoaded(true)}
      />
      {/* Overlay Image */}
      <img
        src={overlayImage}
        alt="Overlay"
        style={{ ...imageStyle, ...overlayStyle }}
        onLoad={() => setImagesLoaded(true)}
      />
      {/* Text */}
      <div className='uppercase' style={textStyle}>{title}</div>
      {/* Subtitle */}
      <div className='font-medium' style={subtitleStyle}>{subtitle}</div>
    </div>
  );
};

export default TitleDecoration;
