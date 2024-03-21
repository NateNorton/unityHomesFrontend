import { Button } from '../../components/inputs/Button/Button';
import { TextInput } from '../../components/inputs/textInput/TextInput';

export const ChatWindow: React.FC = () => {
  return (
    <div className="w-full h-full bg-lightest rounded-xl shadow-lg">
      <div className="flex flex-col gap-y-2 overflow-y-scroll p-3">
        {/* loop through messages, if from me then text-right if from other person then text left */}
        <div className="text-left text-darkest">
          <p className="inline-block">Message from other person</p>
        </div>

        <div className="text-right text-darkest">
          <p className="inline-block">Message from me</p>
        </div>

        {/* input area */}
        <div className="flex items-center space-x-2">
          <TextInput onChange={() => console.log('change')} />
          <Button isPrimary={true} version="contain">
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};
