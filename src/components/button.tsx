"use client"

import React, { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, onSubmit }) => {
  return (
    <button className="px-5 py-3 bg-blue-500 rounded-lg" onSubmit={onSubmit}>
      <p className="text-white font-semibold text-xl">{children}</p>
    </button>
  );
};

export default Button;
