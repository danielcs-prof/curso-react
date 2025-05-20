import React from 'react';

const DevTechLogoMini = () => (
  <svg width="200" height="60" viewBox="0 0 700 150" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#738cbf" />
        <stop offset="100%" stopColor="#f57c00" />
      </linearGradient>
    </defs>

    {/* Texto principal: DevTech com gradiente e .EDU azul */}
    <text
      x="10"
      y="70"
      fontFamily="Segoe UI, sans-serif"
      fontSize="106"
      fontWeight="bold"
    >
      <tspan fill="#738cbf">DevTech</tspan>
      <tspan fill="#2f3a59">.EDU</tspan>
      {/*<tspan fill="#ff7828">DevTech</tspan>
      <tspan fill="#ff3131">.EDU</tspan> */}
    </text>

    {/* Slogan */}
    <text
      x="16"
      y="140"
      fontFamily="Segoe UI, sans-serif"
      fontSize="41"
      fill="#ffffff"
      letterSpacing="1"
    >
      Desenvolvendo ideias e tecnologias
    </text>
  </svg>
);

export default DevTechLogoMini;
