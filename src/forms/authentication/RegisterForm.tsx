import { Formik } from 'formik';
import * as yup from 'yup';
import { TextInput } from '../../components/inputs/textInput/TextInput';
import { Button } from '../../components/inputs/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { registerUser } from '../../redux/features/auth/authAction';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const validationSchema = yup.object().shape({
  userName: yup
    .string()
    .matches(/^[a-zA-Z0-9_]*$/, 'Username can only contain letters, numbers, and underscores')
    .min(5, 'Username must be at least 5 characters')
    .max(50, 'Username must be less than 50 characters')
    .required('Username is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])/, 'Password must contain at least one number and one special character')
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('Password')], 'Passwords must match'),
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
});

export const RegisterForm = () => {
  const { loading, error, success } = useSelector((state: RootState) => state.auth);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (success) navigate('/login');
  }, [success, navigate]);
  return (
    <Formik
      initialValues={{
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        // TODO: actually submit the form with RTK query
        dispatch(registerUser(values));
        if (!error) {
          resetForm();
          if (!loading) {
            setSubmitting(false);
          }
        }
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          {/* form container */}
          <div className="flex flex-col gap-y-4 items-center justify-center">
            <h2 className="text-3xl font-bold text-darkest">Register</h2>
            {/* Username */}
            <TextInput
              label="User123"
              type="text"
              name="Username"
              value={values.userName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Username"
              state={touched.userName && errors.userName ? 'error' : 'normal'}
              errorMessage={touched.userName && errors.userName ? errors.userName : undefined}
            />

            {/* Email */}
            <TextInput
              label="Email"
              type="text"
              name="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
              state={touched.email && errors.email ? 'error' : 'normal'}
              errorMessage={touched.email && errors.email ? errors.email : undefined}
            />

            {/* Password */}
            <TextInput
              label="Password"
              type="password"
              name="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Password"
              state={touched.password && errors.password ? 'error' : 'normal'}
              errorMessage={touched.password && errors.password ? errors.password : undefined}
            />

            {/* Confirm Password */}
            <TextInput
              label="Confirm Password"
              type="password"
              name="ConfirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Confirm Password"
              state={touched.confirmPassword && errors.confirmPassword ? 'error' : 'normal'}
              errorMessage={touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : undefined}
            />

            {/* First Name */}
            <TextInput
              label="First Name"
              type="text"
              name="FirstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="First Name"
              state={touched.firstName && errors.firstName ? 'error' : 'normal'}
              errorMessage={touched.firstName && errors.firstName ? errors.firstName : undefined}
            />

            {/* Last Name */}
            <TextInput
              label="Last Name"
              type="text"
              name="LastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Last Name"
              state={touched.lastName && errors.lastName ? 'error' : 'normal'}
              errorMessage={touched.lastName && errors.lastName ? errors.lastName : undefined}
            />

            {/* submit button */}
            <div className="pt-4">
              <Button type={'submit'} disabled={isSubmitting} version="contain" isPrimary={true}>
                Register
              </Button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};
