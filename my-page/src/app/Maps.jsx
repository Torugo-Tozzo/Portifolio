"use client";

import { useState, useEffect } from 'react';

const Maps = () => {
  const mapKey = process.env.MAP_KEY;

  return (
    <iframe
      width="450"
      height="250"
      className="dark:bg-black bg-gray-100"
      style={{ border: '0' }}
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/search?key=${mapKey}&q=Igreja+matriz+de+Areado`}
      allowFullScreen
    ></iframe>
  );
};

export default Maps;