import React from 'react';
import clsx from 'clsx';

const Button = ({
  text,
  onClick,
  color = 'primary',
  disabled = false,
  type = 'button',
}) => {
  const baseStyles =
    'px-5 py-2 rounded-xl font-semibold text-sm shadow-md transition duration-200 focus:outline-none';

  const colorStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300',
    secondary: 'bg-green-600 text-white hover:bg-green-700 focus:ring-2 focus:ring-green-300',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-300',
    gray: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400',
    light: 'bg-white text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 p-0',
  };

  return (
    <button
      type={type}
      className={clsx(baseStyles, colorStyles[color], disabled && 'opacity-50 cursor-not-allowed')}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;