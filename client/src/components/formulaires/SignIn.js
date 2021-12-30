import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


// const pouet = () => {
  
// };

// const SignIn = () => {
//   return "pouet";
// };

// const SignIn = () => "pouet";
// const SignIn = () => 123;
// const SignIn = (msg) => console.log(msg);
// const SignIn = (msg) => console.log("coucou " + msg);

// const SignIn = () => ({
//   pouet : ssdcscd,
//   coucou : "4sdfsfd5"
// });

// const SignIn = () => {
//   return {
//     pouet : ssdcscd,
//     coucou : "4sdfsfd5"
//   }
// };

const SignIn = () => {

  const handleSubmit = (data) => {

    console.log(data.email);

    let formData = new FormData();
    formData.append('email', data.email)
    formData.append('password', data.password)

    axios({
        method: 'post',
        url: 'http://localhost:9001/api/users/login',
        data: data
    })
        .then(function (response) {
            //handle success console log reponse du srv
            //console.log(response)
            alert('Super vous êtes connecté !');
        })
        .catch(function (err) {
            alert("Problème d'authentification, le mail ou le mot de passe est incorrect");
        });
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          email: '',
          password:''
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field name="email" placeholder="votre mail" type="email" />
            <label htmlFor="password">password</label>
            <Field name="password" placeholder="mot de passse" />
            <button type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );

}

export default SignIn;