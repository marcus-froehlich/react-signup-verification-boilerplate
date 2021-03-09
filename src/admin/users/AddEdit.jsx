import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { accountService, alertService } from '@/_services';

function AddEdit({ history, match }) {
    const { id } = match.params;
    const isAddMode = !id;
    
    const initialValues = {
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        password: '',
        confirmPassword: ''
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Anrede wird benötigt'),
        firstName: Yup.string()
            .required('Vorname ist benötigt'),
        lastName: Yup.string()
            .required('Nachname ist benötigt'),
        email: Yup.string()
            .email('Email ist ungültig')
            .required('Email wird benötigt'),
        role: Yup.string()
            .required('Eine Rolle muss gewählt werden'),
        password: Yup.string()
            .concat(isAddMode ? Yup.string().required('Passwort wird benötigt') : null)
            .min(6, 'Das Password muss min. 6 Zeichen haben'),
        confirmPassword: Yup.string()
            .when('password', (password, schema) => {
                if (password) return schema.required('Bitte das Passwort noch einmal eingeben');
            })
            .oneOf([Yup.ref('password')], 'Das Passwort muss übereinstimmen')
    });

    function onSubmit(fields, { setStatus, setSubmitting }) {
        setStatus();
        if (isAddMode) {
            createUser(fields, setSubmitting);
        } else {
            updateUser(id, fields, setSubmitting);
        }
    }

    function createUser(fields, setSubmitting) {
        accountService.create(fields)
            .then(() => {
                alertService.success('Das Anlegen des Users war erfolgreich', { keepAfterRouteChange: true });
                history.push('.');
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
    }

    function updateUser(id, fields, setSubmitting) {
        accountService.update(id, fields)
            .then(() => {
                alertService.success('Update erfolgreich', { keepAfterRouteChange: true });
                history.push('..');
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ errors, touched, isSubmitting, setFieldValue }) => {
                useEffect(() => {
                    if (!isAddMode) {
                        // get user and set form fields
                        accountService.getById(id).then(user => {
                            const fields = ['title', 'firstName', 'lastName', 'email', 'role'];
                            fields.forEach(field => setFieldValue(field, user[field], false));
                        });
                    }
                }, []);

                return (
                    <Form>
                        <h1>{isAddMode ? 'Benutzer anlegen' : 'Benutzer bearbeiten'}</h1>
                        <div className="form-row">
                            <div className="form-group col">
                                <label>Titel</label>
                                <Field name="title" as="select" className={'form-control' + (errors.title && touched.title ? ' is-invalid' : '')}>
                                    <option value=""></option>
                                    <option value="Herr">Herr</option>
                                    <option value="Frau">Frau</option>
                                </Field>
                                <ErrorMessage name="title" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-5">
                                <label>Vorname</label>
                                <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-5">
                                <label>Nachname</label>
                                <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-7">
                                <label>Email</label>
                                <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col">
                                <label>Rolle</label>
                                <Field name="role" as="select" className={'form-control' + (errors.role && touched.role ? ' is-invalid' : '')}>
                                    <option value=""></option>
                                    <option value="User">User</option>
                                    <option value="Admin">Admin</option>
                                </Field>
                                <ErrorMessage name="role" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        {!isAddMode &&
                            <div>
                                <h3 className="pt-3">Passwort ändern</h3>
                                <p>Leer lassen, wenn keine änderung gewünscht</p>
                            </div>
                        }
                        <div className="form-row">
                            <div className="form-group col">
                                <label>Passwort</label>
                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col">
                                <label>Passwort wiederholen</label>
                                <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                Speichern
                            </button>
                            <Link to={isAddMode ? '.' : '..'} className="btn btn-link">Abbrechen</Link>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
}

export { AddEdit };