"use client";

import { useState, useEffect } from "react";

const Maps = () => {
  const mapKey = process.env.MAP_KEY;

  return (
    <div>
      <iframe
        className="mx-8 mt-8 dark:bg-black bg-gray-100 w-60 h-60 rounded-lg justify-center alling-center"
        style={{ border: "0" }}
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/search?key=${mapKey}&zoom=15.5&q=UNIFAL+SANTA+CLARA`}
        allowFullScreen
      ></iframe>
      <h3 className="dark:text-white">👆 Onde estudo.</h3>
    </div>
  );
};

export default Maps;
