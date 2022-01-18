import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import bcrypt from 'bcryptjs';




// class et hooks d'etat sur la doc
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(data) {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(data.password, salt);
        const hashedConfirmPassword = bcrypt.hashSync(data.confirmPassword, salt);
        axios({
            method: 'post',
            url: 'http://localhost:9001/api/users/signup',
            data: { ...data, password: hashedPassword, confirmPassword: hashedConfirmPassword }
        })
            .then(function (response) {
                //window.location.href = "/Connexion";
                console.log(data.lastname);
            })
            .catch(function (err) {
                alert("Impossible de créer le compte, le mail existe déjà");
            });
    }




    validationSchema() {
        return Yup.object().shape({
            lastname: Yup.string().required('Fullname is required'),
            firstname: Yup.string()
                .required('Username is required')
                .min(6, 'Username must be at least 6 characters')
                .max(20, 'Username must not exceed 20 characters'),
            email: Yup.string()
                .required('Email is required')
                .email('Email is invalid'),
            phone: Yup.string()
                .required('téléphoooone'),
            address: Yup.string()
                .required('adress is required'),
            city: Yup.string()
                .required('adress is required'),
            postal: Yup.string()
                .required('adress is required'),
            password: Yup.string()
                .required('Password is required')
                .min(6, 'Password must be at least 6 characters')
                .max(40, 'Password must not exceed 40 characters'),
            confirmPassword: Yup.string()
                .required('Confirm Password is required')
                .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
            acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
        });
    }

    render() {

        const initialValues = {
            lastname: '',
            firstname: '',
            phone: '',
            address: '',
            city: '',
            postal: '',
            email: '',
            password: '',
            confirmPassword: '',
        }

        return (
            <div className="container" style={{ padding: 50 }}>
                <div className="register-form"><h1>s'inscrire c'est ici ! </h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={this.validationSchema}
                        onSubmit={this.handleSubmit}>
                        {
                            <Form>
                                <div className="form-group">
                                    <label>nom</label>
                                    <Field name="lastname" type="text" className="form-control" />
                                    <ErrorMessage name="lastname" component="div" className="text-danger" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="firstname">prénom</label>
                                    <Field name="firstname" type="text" className="form-control" />
                                    <ErrorMessage name="firstname" component="div" className="text-danger" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">email</label>
                                    <Field name="email" type="text" className="form-control" />
                                    <ErrorMessage name="email" component="div" className="text-danger" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">numero de telephone</label>
                                    <Field name="phone" type="number" className="form-control" />
                                    <ErrorMessage name="phone" component="div" className="text-danger" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="address"> adresse  </label>
                                    <Field name="address" type="text" className="form-control" />
                                    <ErrorMessage name="address" component="div" className="text-danger" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="postal">  code postal </label>
                                    <Field name="postal" type="number" className="form-control" />
                                    <ErrorMessage name="postal" component="div" className="text-danger" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="city"> city </label>
                                    <Field name="city" type="text" className="form-control" />
                                    <ErrorMessage name="city" component="div" className="text-danger" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password"> Password </label>
                                    <Field name="password" type="password" className="form-control" />
                                    <ErrorMessage name="password" component="div" className="text-danger" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="confirmPassword"> Confirm Password </label>
                                    <Field name="confirmPassword" type="password" className="form-control" />
                                    <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                                </div>

                                <div className="form-group form-check"><br />
                                    <Field name="acceptTerms" type="checkbox" className="form-check-input" />
                                    <label htmlFor="acceptTerms" className="form-check-label">
                                        j'accepte les conditions d'utilisation
                                    </label>
                                    <ErrorMessage name="acceptTerms" component="div" className="text-danger" />
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <button type="submit" className="btn-success">
                                        s'inscrire
                                    </button>
                                </div>
                            </Form>
                        }
                    </Formik>
                </div>
            </div>
        );
    }
}
export default SignUp;