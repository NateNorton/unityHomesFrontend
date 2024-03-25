import { useState } from 'react';
import { Button } from '../../components/inputs/Button/Button';
import { useEditUserDetailsMutation, useGetUserDetailsQuery } from '../../redux/api/homesApi';
import { SettingButton } from './SettingsButton';
import { EditDetailsModal } from '../../components/Modal/Modal';
import { UserUpdateType } from '../../types/User.type';

export const SettingsPage: React.FC = () => {
  const { data: userDetails } = useGetUserDetailsQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDetail, setEditingDetail] = useState<{ type: string; value: string }>({ type: '', value: '' });
  const handleEditClick = (type: string, value: string) => {
    setEditingDetail({ type, value });
    setIsModalOpen(true);
  };
  const [editUserDetails] = useEditUserDetailsMutation();

  const handleUpdate = async (field: string, newValue: string) => {
    const newEdit: UserUpdateType = {
      [field]: newValue,
    };
    console.log(newEdit);

    try {
      await editUserDetails(newEdit).unwrap();
    } catch (error) {
      console.log(error);
    }

    setIsModalOpen(false);
  };

  const handleDeleteAccount = () => {
    console.log('delete account');
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-between gap-y-10 p-20">
      <SettingButton
        title="First Name"
        actual={userDetails?.firstName ?? ''}
        onClick={() => handleEditClick('FirstName', userDetails?.firstName ?? '')}
      />
      <SettingButton
        title="Last Name"
        actual={userDetails?.lastName ?? ''}
        onClick={() => handleEditClick('LastName', userDetails?.lastName ?? '')}
      />
      <SettingButton
        title="Username"
        actual={userDetails?.userName ?? ''}
        onClick={() => handleEditClick('Username', userDetails?.userName ?? '')}
      />
      <SettingButton
        title="Email"
        actual={userDetails?.email ?? ''}
        onClick={() => handleEditClick('Email', userDetails?.email ?? '')}
      />
      <SettingButton
        title="Phone Number"
        actual={userDetails?.phoneNumber ?? ''}
        onClick={() => handleEditClick('PhoneNumber', userDetails?.phoneNumber ?? '')}
      />
      <Button version="outline" isPrimary={true} onClick={handleDeleteAccount}>
        Delete Account
      </Button>

      <EditDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        detailType={editingDetail.type}
        currentValue={editingDetail.value}
        onUpdate={handleUpdate}
      />
    </div>
  );
};
