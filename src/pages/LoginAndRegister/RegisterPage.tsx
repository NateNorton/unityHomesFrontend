import { RegisterForm } from '../../forms/authentication/RegisterForm';
import { AuthPageLayout } from '../../layouts/authPageLayout';
export const RegisterPage = () => {
  return (
    <AuthPageLayout>
      <RegisterForm />
    </AuthPageLayout>
  );
};
