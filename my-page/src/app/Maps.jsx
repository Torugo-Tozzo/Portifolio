import { useState, useEffect } from "react";

const Maps = () => {
  const mapKey = process.env.MAP_KEY;
  return (
    <div className="flex pt-8 justify-center alling-center">
      <iframe
        className="mx-8 dark:bg-black bg-gray-100 h-60 rounded-lg "
        style={{ border: "0" }}
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/search?key=${mapKey}&zoom=15.5&q=UNIFAL+SANTA+CLARA`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Maps;
