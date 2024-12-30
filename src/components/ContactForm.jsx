import '../App.css';
import { Formik, Form, Field } from 'formik';

const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, { resetForm }) => {
        onAddContact(values); // Викликаємо функцію додавання
        resetForm(); // Скидаємо форму
      }}
    >
      <Form className="form">
        <label>Name</label>
        <Field type="text" name="name" className="field" required />
        <label>Number</label>
        <Field type="text" name="number" className="field" required />
        <button type="submit" className="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
