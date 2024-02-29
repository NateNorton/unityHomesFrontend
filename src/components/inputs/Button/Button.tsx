import React from 'react';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type: 'text' | 'contain' | 'outline';
  isPrimary: boolean;
}

export const Button = ({ children, type, isPrimary, ...props }: IButtonProps) => {
  const baseClasses = 'px-4 py-2 rounded hover:pointer';
  const typeClasses = {
    text: `bg-transparent focus:border-transparent hover:border-transparent active:border-transparent ${isPrimary ? 'text-sageComp hover:text-sageDark active:text-sageDark' : 'text-deepSlate hover:text-slateDark active:text-slateDark'}`,
    outline: `border-2 ${isPrimary ? 'border-mutedSage hover:border-sageDark active:border-sageComp' : 'border-deepSlate hover:border-slateDark active:slateComp'} text-darkest`,
    contain: `border-2 ${isPrimary ? 'bg-sageComp border-sageComp hover:bg-sageDark active:bg-sageDark text-darkest' : 'bg-deepSlate border-deepSlate hover:bg-slateDark active:bg-slateDark text-lightest'}`,
  };

  const buttonClasses = `${baseClasses} ${typeClasses[type]}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
