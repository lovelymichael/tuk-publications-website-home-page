import React from "react";

const GoogleMap = ({ mapUrl }) => {
  return (
    <iframe
      title="Google Map"
      src={mapUrl}
      className="w-full h-[350px] border border-[#e7e7e7]"
      loading="lazy"
      allowFullScreen
    ></iframe>
  );
};

export default GoogleMap;