import { Formik } from 'formik';
import { number, object, string } from 'yup';
import { TextArea } from '../components/inputs/textInput/TextArea';
import { TextInput } from '../components/inputs/textInput/TextInput';
import { NumberInput } from '../components/inputs/NumberInput/NumberInput';

const UkPostcodeRegex =
  /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/;

const validationSchema = object().shape({
  propertyTitle: string()
    .min(5, 'Title but be at least 5 characters long')
    .max(100, 'Title too long')
    .required('Required'),
  propertyDescription: string().min(100, 'Decription too short').required('Required'),
  propertyPostcode: string().matches(UkPostcodeRegex, 'Invalid UK postcode').required('Required'),
  propertyAddress: string().required('Address is required'),
  propertyCity: string().required('City is required'),
  propertyType: string().required('Property type is required'),
  squareMeterage: string().required('Property Size is required'),
  propertyNumber: number().required('Property Number is required'),
  numberOfBedrooms: number().required('Number of Bedrooms is required'),
});

export const AddPropertyForm = () => {
  return (
    <div className="w-full h-full">
      <Formik
        initialValues={{
          propertyTitle: '',
          propertyDescription: '',
          propertyPostcode: '',
          propertyAddress: '',
          propertyCity: '',
          propertyType: '',
          propertyNumber: '',
          squareMeterage: '',
          numberOfBedrooms: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          // This is where I will make the POST request

          resetForm();
          setSubmitting(false);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="flex justify-between gap-x-10">
            {/* container for general info */}
            <div className="grid grid-cols-2 gap-4">
              {/* property title */}
              <div className="col-span-2">
                <TextInput
                  label="Property title"
                  name="propertyTitle"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.propertyTitle}
                  errorMessage={touched.propertyTitle && errors.propertyTitle ? errors.propertyTitle : undefined}
                />
              </div>

              {/* street address */}
              <div>
                <TextInput
                  label="Street Address"
                  name="propertyAddress"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.propertyAddress}
                  errorMessage={touched.propertyAddress && errors.propertyAddress ? errors.propertyAddress : undefined}
                />
              </div>

              {/* city */}
              <TextInput
                label="City"
                name="propertyCity"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.propertyCity}
                errorMessage={touched.propertyCity && errors.propertyCity ? errors.propertyCity : undefined}
              />

              {/* Postcode */}
              <TextInput
                label="Postcode"
                name="propertyPostcode"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.propertyPostcode}
                errorMessage={touched.propertyPostcode && errors.propertyPostcode ? errors.propertyPostcode : undefined}
              />

              {/* property number */}
              <TextInput
                label="Property Number"
                name="propertyNumber"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.propertyNumber}
                errorMessage={touched.propertyNumber && errors.propertyNumber ? errors.propertyNumber : undefined}
              />

              {/* square meterage */}
              <NumberInput
                label="Square Meterage"
                name="squareMeterage"
                onChange={handleChange}
                onBlur={handleBlur}
                value={parseInt(values.squareMeterage)}
                onNumberChange={(value: number) => {
                  return value;
                }}
                errorMessage={touched.squareMeterage && errors.squareMeterage ? errors.squareMeterage : undefined}
              />

              {/* number of bedrooms */}
              <NumberInput
                label="Number of Bedrooms"
                name="numberOfBedrooms"
                onChange={handleChange}
                onBlur={handleBlur}
                value={parseInt(values.numberOfBedrooms)}
                onNumberChange={(value: number) => {
                  return value;
                }}
                errorMessage={touched.numberOfBedrooms && errors.numberOfBedrooms ? errors.numberOfBedrooms : undefined}
              />
            </div>

            <div className="w-1/2">
              <TextArea
                name="propertyDescription"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.propertyDescription}
                label="Full Property description"
                onTextChnange={(value: string) => {
                  return value;
                }}
                errorMessage={
                  touched.propertyDescription && errors.propertyDescription ? errors.propertyDescription : undefined
                }
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
