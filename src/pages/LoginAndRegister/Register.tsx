import { MainNavbar } from '../../components/Navbar/Navbar';
import { RegisterForm } from '../../forms/authentication/RegisterForm';
export const RegisterPage = () => {
  return (
    <>
      <MainNavbar />
      <div className="min-h-screen flex">
        {/* Login forms section */}
        <div className="w-1/2 flex flex-col justify-center items-center bg-lightest text-darkest gap-y-4">
          <h2 className="text-3xl">Register</h2>
          <RegisterForm />
        </div>

        {/* Image Section for login screen */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{ backgroundImage: 'url("../../src/assets/loginImage.jpg")' }}
        ></div>
      </div>
    </>
  );
};
