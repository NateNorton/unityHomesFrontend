import { LoginForm } from '../../forms/authentication/LoginForm';
import { AuthPageLayout } from '../../layouts/authPageLayout';

export const LoginPage = () => {
  return (
    <AuthPageLayout>
      <LoginForm />
    </AuthPageLayout>
  );
};
