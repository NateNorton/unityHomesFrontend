interface ITextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  state?: 'normal' | 'focus' | 'disabled' | 'error';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  label?: string;
  errorMessage?: string;
}

export const TextInput = ({
  state = 'normal',
  icon,
  iconPosition = 'left',
  label,
  errorMessage,
  ...props
}: ITextInputProps) => {
  return (
    <div className="flex flex-col min-w-60 max-w-60">
      {label && <label className="text-sm mb-1 text-darkest">{label}</label>}
      <div className={`min-h-[48px] flex items-center ${iconPosition === 'right' ? 'flex-row-reverse' : ''}`}>
        {icon && <span className="p-2">{icon}</span>}
        <input
          className={`border p-2 rounded focus:outline-none bg-lightest w-full ${typeof errorMessage === 'undefined' ? 'border-slateDark' : 'border-teracotta'} text-darkest`}
          {...props}
          disabled={state === 'disabled'}
        />
      </div>
      {errorMessage && <p className="text-xs mt-1 text-teracotta break-words">{errorMessage}</p>}
    </div>
  );
};
