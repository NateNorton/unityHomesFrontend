interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  onTextChnange: (value: string) => void;
  errorMessage?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ onTextChnange, label, errorMessage, ...props }) => {
  const handleChnage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onTextChnange(event.target.value);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <label className="mr-4 text-lg text-darkest">{label}</label>
      <textarea
        onChange={handleChnage}
        {...props}
        className="bg-antiqueWhite text-darkest text-xl p-2 text-center rounded-md shadow-lg w-full h-full"
      />
      {errorMessage && <p className="text-xs mt-1 text-teracotta break-words">{errorMessage}</p>}
    </div>
  );
};
