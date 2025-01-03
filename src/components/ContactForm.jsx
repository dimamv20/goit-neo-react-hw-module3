import '../App.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be 50 characters or less')
    .required('Name is required'),
  number: Yup.string()
    .matches(/^\d+$/, 'Number must contain only digits')
    .min(10, 'Number must be at least 10 digits')
    .max(15, 'Number must be 15 digits or less')
    .required('Number is required'),
});

const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddContact(values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className="form">
          <label>Name</label>
          <Field type="text" name="name" className="field" />
          {touched.name && errors.name && <div className="error">{errors.name}</div>}

          <label>Number</label>
          <Field type="text" name="number" className="field" />
          {touched.number && errors.number && <div className="error">{errors.number}</div>}

          <button type="submit" className="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
