interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: number;
  label: string;
  onNumberChange: (value: number) => void;
  errorMessage?: string;
}

export const NumberInput: React.FC<NumberInputProps> = ({ value, label, errorMessage, onNumberChange, ...props }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      onNumberChange(value);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <label className="mr-4 text-lg text-darkest">{label}</label>
      <input
        type="number"
        value={value.toString()}
        onChange={handleChange}
        {...props}
        className={`border p-2 shadow-lg rounded-md focus:outline-none bg-antiqueWhite w-full ${typeof errorMessage === 'undefined' ? 'border-slateDark' : 'border-teracotta'} text-darkest`}
      />
      {errorMessage && <p className="text-xs mt-1 text-teracotta break-words">{errorMessage}</p>}
    </div>
  );
};
