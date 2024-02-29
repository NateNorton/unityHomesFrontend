interface ITextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize: 'small' | 'medium' | 'large';
  state?: 'normal' | 'focus' | 'disabled' | 'error';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const TextInput = ({
  inputSize = 'medium',
  state = 'normal',
  icon,
  iconPosition = 'left',
  ...props
}: ITextInputProps) => {
  const baseClasses = 'border p-2 rounded focus:outline-none';

  const sizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  const stateClasses = {
    normal: 'border-gray-300',
    focus: 'border-primary',
    disabled: 'border-gray-300 bg-gray-100',
    error: 'border-red-500',
  };

  const inputClasses = `${baseClasses} ${sizeClasses[inputSize]} ${stateClasses[state]}`;

  return (
    <div className={`flex items-center ${iconPosition === 'right' ? 'flex-row-reverse' : ''}`}>
      {icon && <span className="p-2">{icon}</span>}
      <input className={inputClasses} {...props} disabled={state === 'disabled'} />
    </div>
  );
};
