import { Formik } from 'formik';
import * as yup from 'yup';
import { TextInput } from '../../components/inputs/textInput/TextInput';
import { Button } from '../../components/inputs/Button/Button';

const validationSchema = yup.object().shape({
  Username: yup
    .string()
    .matches(/^[a-zA-Z0-9_]*$/, 'Username can only contain letters, numbers, and underscores')
    .min(5, 'Username must be at least 5 characters')
    .max(50, 'Username must be less than 50 characters')
    .required('Username is required'),
  Email: yup.string().email('Invalid email').required('Email is required'),
  Password: yup
    .string()
    .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])/, 'Password must contain at least one number and one special character')
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  ConfirmPassword: yup.string().oneOf([yup.ref('Password')], 'Passwords must match'),
  FirstName: yup.string().required('First Name is required'),
  LastName: yup.string().required('Last Name is required'),
});

export const RegisterForm = () => {
  return (
    <Formik
      initialValues={{
        Username: '',
        Email: '',
        Password: '',
        ConfirmPassword: '',
        FirstName: '',
        LastName: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        // TODO: actually submit the form with RTK query

        resetForm();
        setSubmitting(false);
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
              value={values.Username}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Username"
              state={touched.Username && errors.Username ? 'error' : 'normal'}
              errorMessage={touched.Username && errors.Username ? errors.Username : undefined}
            />

            {/* Email */}
            <TextInput
              label="Email"
              type="text"
              name="Email"
              value={values.Email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
              state={touched.Email && errors.Email ? 'error' : 'normal'}
              errorMessage={touched.Email && errors.Email ? errors.Email : undefined}
            />

            {/* Password */}
            <TextInput
              label="Password"
              type="password"
              name="Password"
              value={values.Password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Password"
              state={touched.Password && errors.Password ? 'error' : 'normal'}
              errorMessage={touched.Password && errors.Password ? errors.Password : undefined}
            />

            {/* Confirm Password */}
            <TextInput
              label="Confirm Password"
              type="password"
              name="ConfirmPassword"
              value={values.ConfirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Confirm Password"
              state={touched.ConfirmPassword && errors.ConfirmPassword ? 'error' : 'normal'}
              errorMessage={touched.ConfirmPassword && errors.ConfirmPassword ? errors.ConfirmPassword : undefined}
            />

            {/* First Name */}
            <TextInput
              label="First Name"
              type="text"
              name="FirstName"
              value={values.FirstName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="First Name"
              state={touched.FirstName && errors.FirstName ? 'error' : 'normal'}
              errorMessage={touched.FirstName && errors.FirstName ? errors.FirstName : undefined}
            />

            {/* Last Name */}
            <TextInput
              label="Last Name"
              type="text"
              name="LastName"
              value={values.LastName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Last Name"
              state={touched.LastName && errors.LastName ? 'error' : 'normal'}
              errorMessage={touched.LastName && errors.LastName ? errors.LastName : undefined}
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
