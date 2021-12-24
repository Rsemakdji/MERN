import React from 'react';
import { Formik, Field, Form } from 'formik';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const SignIn = () => (
  <div>
    <h1>Sign Up</h1>

    <Formik
      initialValues={{
        email: '',
        password:''
      }}
      onSubmit={async (values) => {
        await sleep(500);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="email">Email</label>
          <Field name="email" placeholder="votre mail" type="email" />
          

          <label htmlFor="password">password</label>
          <Field name="password" placeholder="mot de passse" />


          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default SignIn;