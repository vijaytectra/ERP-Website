import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, className = "" }) => {
  return (
    <h1
      className={`text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-text-heading ${className}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
