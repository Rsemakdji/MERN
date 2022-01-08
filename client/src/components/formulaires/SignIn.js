import React from 'react';
import { Formik, Field, Form } from 'formik';

import axios from 'axios';




const SignIn = () => {

  const handleSubmit = (data) => {

    axios({
      method: 'post',
      url: 'http://localhost:9001/api/users/login',
      data: data
    })
      .then(function (response) {
        //handle success console log reponse du srv
        localStorage.setItem('token', response.data.token);
        //alert('Super vous êtes connecté !');
        window.location.href = "/";

      })
      .catch(function (err) {
        alert("Problème d'authentification, le mail ou le mot de passe est incorrect");
      });
  }

  return (
    <div>
      <h1>Connectez-vous</h1>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (  // ici qu'est ce qu'on peut en faire  ?????
          <div className="container" style={{ padding: 50 }}>
            <Form >
              <label htmlFor="email">Email</label>
              <Field className="form-control" name="email" placeholder="votre mail" type="email" />
              <label htmlFor="password">password</label>
              <Field className="form-control" name="password" placeholder="mot de passse" />
              <br></br>
              <button
                type="submit"
                className='btn-success'
              >
                Connexion
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );

}

export default SignIn;