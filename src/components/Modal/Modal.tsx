import { useState } from 'react';
import { TextInput } from '../inputs/textInput/TextInput';

interface EditDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  detailType: string;
  currentValue: string;
  onUpdate: (field: string, newValue: string) => void;
}

export const EditDetailsModal: React.FC<EditDetailsModalProps> = ({
  isOpen,
  onClose,
  detailType,
  currentValue,
  onUpdate,
}) => {
  const [newValue, setNewValue] = useState(currentValue);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="modal bg-sageComp p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Edit {detailType}</h2>
        <TextInput value={newValue} onChange={(e) => setNewValue(e.target.value)} />
        <div className="flex justify-end space-x-4 mt-4">
          <button
            className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => onUpdate(detailType.toLowerCase(), newValue)}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};
