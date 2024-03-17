import { Formik } from 'formik';
import * as yup from 'yup';
import { TextInput } from '../../components/inputs/textInput/TextInput';
import { Button } from '../../components/inputs/Button/Button';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../redux/features/auth/authAction';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

export const LoginForm = () => {
  const { loading, error, success, userToken } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (success && userToken) {
      navigate('/');
    }
  });
  return (
    <div className="flex flex-col gap-4">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          await dispatch(userLogin(values));

          if (success && userToken) {
            resetForm();
            if (!loading) {
              setSubmitting(false);
            }
          }
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            {/* form container */}
            <div className="flex, flex-col gap-y items-center justify-center">
              <h2 className="text-3xl font-bold text-darkest">Log in</h2>
              <TextInput
                label="Email"
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email"
                state={touched.email && errors.email ? 'error' : 'normal'}
                errorMessage={touched.email && errors.email ? errors.email : undefined}
              />

              <TextInput
                label="Password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Password"
                state={touched.password && errors.password ? 'error' : 'normal'}
                errorMessage={touched.password && errors.password ? errors.password : undefined}
              />

              <div className="pt-4">
                <Button type="submit" disabled={isSubmitting} version="contain" isPrimary={true}>
                  Login
                </Button>
              </div>
            </div>
          </form>
        )}
      </Formik>
      <div className="text-darkest">
        Dont have an account?{' '}
        <a className="text-teracotta hover:text-teracottaDark hover:cursor-pointer" href="/register">
          Register here
        </a>
      </div>
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};
