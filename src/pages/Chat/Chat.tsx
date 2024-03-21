import { ChatButton } from './ChatButton';
import { ChatWindow } from './ChatWindow';

const chats = [{ name: 'Chat 1' }, { name: 'Chat 2' }, { name: 'Chat 3' }];

export const Chat: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-between gap-x-4 p-20">
      {/* chat button container */}
      <div className="flex flex-col gap-y-3 overflow-y-scroll h-full p-3 text-sm text-nowrap">
        {chats.map((chat, index) => (
          <ChatButton key={index} name={chat.name} onClick={() => {}} />
        ))}
      </div>

      <div className="flex flex-row gap-x-3 items-center justify-center w-full h-full">
        <ChatWindow />
      </div>
    </div>
  );
};
