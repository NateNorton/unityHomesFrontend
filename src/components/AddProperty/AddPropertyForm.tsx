// import { useGetPropertyTypesQuery } from '../../redux/api/homesApi';
// import { Formik } from 'formik';
// import { object, string } from 'yup';

// const UkPostcodeRegex =
//   /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/;
// const validationSchema = object().shape({
//   propertyTitle: string()
//     .min(5, 'Title but be at least 5 characters long')
//     .max(100, 'Title too long')
//     .required('Required'),
//   propertyDescription: string().min(100, 'Decription too short').required('Required'),
//   propertyPostcode: string().matches(UkPostcodeRegex, 'Invalid UK postcode').required('Required'),
//   propertyAddress: string().required('Required'),
//   propertyCity: string().required('Required'),
//   propertyType: string().required('Required'),
// });

// const AddPropertyForm = () => {
//   const { data } = useGetPropertyTypesQuery();

//   return (
//       <Formik
//         initialValues={{
//           propertyTitle: '',
//           propertyDescription: '',
//           propertyPostcode: '',
//           propertyAddress: '',
//           propertyCity: '',
//           propertyType: '',
//         }}
//         validationSchema={validationSchema}
//         onSubmit={async (values, { setSubmitting, resetForm }) => {
//           setSubmitting(true);
//           // This is where I will make the POST request
//           const url = 'http://localhost:5177/api/Properties';
//           const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(values),
//           });

//           const data = await response.json();

//           if (!response.ok) {
//             console.log('Error');
//           } else {
//             console.log('success');
//             console.log(data);
//           }

//           resetForm();
//           setSubmitting(false);
//         }}
//       >
//         {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
//           <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3" controlId="propertyTitle">
//               <Form.Label>Property Title</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="propertyTitle"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.propertyTitle}
//                 isInvalid={touched.propertyTitle && errors.propertyTitle ? true : false}
//               />
//               <Form.Text className="test-muted">A descriptive title for your property</Form.Text>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="propertyDescription">
//               <Form.Label>Property Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 name="propertyDescription"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.propertyDescription}
//                 isInvalid={touched.propertyDescription && errors.propertyDescription ? true : false}
//               />
//               <Form.Text className="test-muted">Describe your property in detail</Form.Text>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="propertyPostcode">
//               <Form.Label>Post code</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="propertyPostcode"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.propertyPostcode}
//                 isInvalid={touched.propertyPostcode && errors.propertyPostcode ? true : false}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="propertyAddress">
//               <Form.Label>Street Address</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="propertyAddress"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.propertyAddress}
//                 isInvalid={touched.propertyAddress && errors.propertyAddress ? true : false}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="propertyCity">
//               <Form.Label>City</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="propertyCity"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.propertyCity}
//                 isInvalid={touched.propertyCity && errors.propertyCity ? true : false}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="propertyType">
//               <Form.Label>Property Type</Form.Label>
//               <Form.Select
//                 aria-label="property type selection"
//                 name="propertyType"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.propertyType}
//                 isInvalid={touched.propertyType && errors.propertyType ? true : false}
//               >
//                 {data?.map((propertyType) => (
//                   <option key={propertyType.id} value={propertyType.id}>
//                     {propertyType.name}
//                   </option>
//                 ))}
//               </Form.Select>
//             </Form.Group>

//             <button type="submit" disabled={isSubmitting}>
//               Submit
//             </button>
//           </Form>
//         )}
//       </Formik>
//   );
// };

// export default AddPropertyForm;
