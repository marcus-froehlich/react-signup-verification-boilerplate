import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { accountService, alertService } from '@/_services';

function Update({ history }) {
    const user = accountService.userValue;
    const initialValues = {
        title: user.title,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
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
        password: Yup.string()
            .min(6, 'Das Password muss min. 6 Zeichen haben'),
        confirmPassword: Yup.string()
            .when('password', (password, schema) => {
                if (password) return schema.required('Bitte das Passwort noch einmal eingeben');
            })
            .oneOf([Yup.ref('password')], 'Das Passwort muss übereinstimmen')
    });

    function onSubmit(fields, { setStatus, setSubmitting }) {
        setStatus();
        accountService.update(user.id, fields)
            .then(() => {
                alertService.success('Update erfolgreich', { keepAfterRouteChange: true });
                history.push('.');
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
    }

    const [isDeleting, setIsDeleting] = useState(false);
    function onDelete() {
        if (confirm('Sind Sie sicher?')) {
            setIsDeleting(true);
            accountService.delete(user.id)
                .then(() => alertService.success('Account löschung erfolgreich'));
        }
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ errors, touched, isSubmitting }) => (
                <div className="container-xl">
                    <Form>
                        <h1>Profil Update</h1>
                        <div className="form-row">
                            <div className="form-group col">
                                <label>Titel</label>
                                <Field name="title" as="select" className={'form-control' + (errors.title && touched.title ? ' is-invalid' : '')}>
                                    <option value=""></option>
                                    <option value="Mr">Herr</option>
                                    <option value="Mrs">Frau</option>
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
                        <div className="form-group">
                            <label>Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <h3 className="pt-3">Passwort ändern</h3>
                        <p>Leer lassen wenn keine Änderung erfolgen soll</p>
                        <div className="form-row">
                            <div className="form-group col">
                                <label>Passwort</label>
                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col">
                                <label>Wiederholung Passwort</label>
                                <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" disabled={isSubmitting} className="btn-p mr-2">
                                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Update
                        </button>
                            <button type="button" onClick={() => onDelete()} className="btn-c mr-2" disabled={isDeleting}>
                                {isDeleting
                                    ? <span className="spinner-border spinner-border-sm"></span>
                                    : <span>Löschen</span>
                                }
                            </button>
                            <Link to="." className="btn-n">Abbrechen</Link>
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export { Update };