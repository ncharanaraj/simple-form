# Simple form is created using Formik.

Getting started with
npx create-react-app simple-form
cd simple-form
npm start
https://reactjs.org/docs/create-a-new-react-app.html

clean up the defaults and create a components folder inside the src folder. Create new form file in component folder.

Implement a simple HTML form.

Install Formik with NPM
npm install formik --save
https://formik.org/docs/overview

Import useFormik hook from formik.

Managing form state and handling form submission.
https://formik.org/docs/api/useFormik

Form validation.
https://formik.org/docs/guides/validation

Displaying error messages.

visited fields and improving UX

Schema validation with YUP
 npm install yup --save
https://formik.org/docs/tutorial#schema-validation-with-yup

##Refactor

https://formik.org/docs/migrating-v2#getfieldpropsnameorprops

Replaced the below code with {...formik.getFieldProps('name')}

onChange={formik.handleChange}
onBlur={formik.handleBlur}
value={formik.values.name}