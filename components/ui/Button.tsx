import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-6 py-3 rounded font-bold tracking-wide transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-cyber-red text-white hover:bg-red-600 shadow-[0_0_20px_rgba(255,31,31,0.4)] hover:shadow-[0_0_30px_rgba(255,31,31,0.6)]",
    outline: "border-2 border-white/20 text-white hover:border-cyber-red hover:text-cyber-red bg-transparent",
    ghost: "text-gray-400 hover:text-white bg-transparent hover:bg-white/5"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
