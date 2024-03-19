import './setting-button.css';
interface ISettingsButtonProps {
  title: string;
  actual: string;
  onClick: () => void;
}

export const SettingButton: React.FC<ISettingsButtonProps> = ({ title, actual, onClick }) => {
  return (
    <div className="w-full flex flex-row justify-between pl-10 pr-10 setting-button rounded-xl pt-3 pb-3">
      <div className="flex flex-col">
        <p className="text-xl text-darkest">{title}</p>
        <p className="text-darkest">{actual}</p>
      </div>
      <button onClick={onClick}>Edit</button>
    </div>
  );
};
