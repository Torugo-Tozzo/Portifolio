"use client";

import { useState, useEffect } from 'react';

const Maps = () => {
  const mapKey = process.env.MAP_KEY;

  return (
    <iframe
      width="400"
      height="400"
      className="dark:bg-black bg-gray-100"
      style={{ border: '0' }}
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/search?key=${mapKey}&zoom=13&q=Areado+MG`}
      allowFullScreen
    ></iframe>
  );
};

export default Maps;