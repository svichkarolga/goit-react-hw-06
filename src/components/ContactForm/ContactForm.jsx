import { nanoid } from "nanoid";
import React from "react";
import { Formik, Form, Field } from "formik";
import styles from "./ContactForm.module.css";
import { profileSchemas } from "../../utils/schemas";
import { ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import contactsSlice from "../../redux/contactsSlice";

const ContactForm = ({ onAdd }) => {
  const contacts = useSelector((state) => state.contacts.value);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    onAdd({
      name: values.name,
      number: values.number,
      id: nanoid(),
    });
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        validationSchema={profileSchemas}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <div className={styles.row}>
            <label className={styles.text} htmlFor="name">
              Name:
            </label>
            <Field className={styles.input} type="text" name="name" />
            <ErrorMessage
              className={styles.error}
              name="name"
              component="span"
            />
          </div>
          <div className={styles.row}>
            <label className={styles.text} htmlFor="number">
              Number:
            </label>
            <Field className={styles.input} type="text" name="number" />
            <ErrorMessage
              className={styles.error}
              name="number"
              component="span"
            />
          </div>
          <div className={styles.btnBox}>
            <button
              className={styles.btn}
              type="submit"
              onClick={() => dispatch(addUser())}
            >
              Add contact
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
