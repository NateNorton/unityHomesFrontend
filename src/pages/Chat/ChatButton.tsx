interface ISettingsButtonProps {
  name: string;
  onClick: () => void;
}

export const ChatButton: React.FC<ISettingsButtonProps> = ({ name, onClick }) => {
  return (
    <div className="w-full flex flex-row pl-10 pr-10 setting-button rounded-xl pt-3 pb-3 items-center justify-center">
      <button className="" onClick={onClick}>
        {name}
      </button>
    </div>
  );
};
