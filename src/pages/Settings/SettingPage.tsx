import { SettingButton } from './SettingsButton';

export const SettingsPage: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between gap-y-10 p-20">
      <SettingButton title="Name" actual="Bob Something" onClick={() => console.log('clicked')} />
      <SettingButton title="Username" actual="Bob Something" onClick={() => console.log('clicked')} />
      <SettingButton title="Email" actual="Bob Something" onClick={() => console.log('clicked')} />
      <SettingButton title="Phone Number" actual="Bob Something" onClick={() => console.log('clicked')} />
      <SettingButton title="Password" actual="Bob Something" onClick={() => console.log('clicked')} />
      <SettingButton title="Delete Account" actual="Bob Something" onClick={() => console.log('clicked')} />
    </div>
  );
};
