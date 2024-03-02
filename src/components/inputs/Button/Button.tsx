import React from 'react';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  version: 'text' | 'contain' | 'outline';
  isPrimary: boolean;
}

export const Button = ({ children, version, isPrimary, type, ...props }: IButtonProps) => {
  const baseClasses = 'px-4 py-2 rounded hover:pointer';
  const typeClasses = {
    text: `bg-transparent focus:border-transparent hover:border-transparent active:border-transparent ${isPrimary ? 'text-sageComp hover:text-sageDark active:text-sageDark' : 'text-deepSlate hover:text-slateDark active:text-slateDark'}`,
    outline: `border-2 bg-transparent ${isPrimary ? 'border-mutedSage hover:border-sageDark active:border-sageComp' : 'border-deepSlate hover:border-slateDark active:slateComp'} text-darkest`,
    contain: `${isPrimary ? 'border-2 bg-mutedSage hover:bg-sageDark active:border-sageComp text-darkest' : 'bg-deepSlate hover:bg-slateDark active:border-slateDark text-lightest'}`,
  };

  const buttonClasses = `${baseClasses} ${typeClasses[version]}`;

  return (
    <button className={buttonClasses} type={type} {...props}>
      {children}
    </button>
  );
};
