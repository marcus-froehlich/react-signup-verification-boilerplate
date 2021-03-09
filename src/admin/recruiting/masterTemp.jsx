import React, { Component } from "react";
import * as Yup from "yup";
import Calendar from "react-calendar";
import { Formik, Field, Form } from "formik";

import { recruitingService, alertService } from '@/_services';

class RecruitingForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          title: "",          
          wanted: "",
          employmentType: "",
          taskArea: "",
          expectations: "",
          offer: "",
          freeText: "",
          imprint: "",
          timeOfStart: "",
        }}
        validationSchema={Yup.object().shape({
          title: Yup.string().required("Bitte eine Überschrift angeben"),          
          wanted: Yup.string().required("Was wird gesucht?"),
          employmentType: Yup.string().required("Beschäftigungsart"),
          taskArea: Yup.string().required("Aufgabenbereich"),
          expectations: Yup.string().required("Erwartungen"),
          offer: Yup.string().required("Angebot"),
        })}

        validator={() => ({})}

        onSubmit={(fields) => {
          fields.timeOfStart = fields.Calendar.value.value
          recruitingService.create(fields)          
          .then(() => {
            alertService.success('Eintragung erfolgreich', { keepAfterRouteChange: true })
          })
        }}

        render={({ values, handleChange, errors, touched}) => (
          <Form>
            <div className="form-group row">
              <div className="form-group col-8">
                <label className="container font-weight-bold">Titel</label>
                <Field
                  id="title"
                  name="title"
                  placeholder="#"
                  type="text"
                  className={
                    "form-control" +
                    (errors.title && touched.title ? " is-invalid" : "")
                  }
                ></Field>
                <div className="form-group mt-3 mb-3 container font-weight-bold">
                  Was wird gesucht
                </div>
                <Field
                  id="wanted"
                  name="wanted"
                  component="textarea"
                  wrap={'hard'}
                  cols="40"
                  rows="5"
                  aria-describedby="wantedHelpBlock"
                  className={
                    "form-control" +
                    (errors.wanted && touched.wanted ? " is-invalid" : "")
                  }
                ></Field>
              </div>

              <div className="form-group col-4">
                <label className="font-weight-bold">Start Datum</label>

                <Calendar
                  className="timeOfStart"
                  id="timeOfStart"
                  defaultValue={new Date()}
                  onChange={
                      (value) => {value={value}; values.Calendar={value};
                  }}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="form-group col-4">
                <label className="font-weight-bold">Beschäftigungsart</label>
                <select
                  multiple="multiple"
                  id="employmentType"
                  name="employmentType"
                  className="form-control"
                  onChange={handleChange}
                >
                  <option value="full">Vollzeit</option>
                  <option value="part">Teilzeit</option>
                  <option value="mini">Minijob</option>
                  <option value="student">Werkstudent</option>
                  <option value="short">Kurzfristige Beschäftigung</option>
                  <option value="midi">Midijob</option>
                  <option value="freelancer">Freiberufler</option>
                </select>
              </div>
              <div className="form-group col-8">
                <label className="font-weight-bold">Aufgabenbereich</label>
                <Field
                  id="taskArea"
                  name="taskArea"
                  component="textarea"
                  wrap={'hard'}
                  cols="40"
                  rows="5"
                  className={
                    "form-control" +
                    (errors.taskArea && touched.taskArea ? " is-invalid" : "")
                  }
                ></Field>
              </div>
            </div>
            <div className="form-group">
              <label className="container font-weight-bold">Erwartungen</label>
              <Field
                id="expectations"
                name="expectations"
                component="textarea"
                wrap={'hard'}
                cols="40"
                rows="5"
                className={
                  "form-control" +
                  (errors.expectations && touched.expectations
                    ? " is-invalid"
                    : "")
                }
              ></Field>
            </div>

            <div className="form-group">
              <label className="container font-weight-bold">Angebot</label>
              <Field
                id="offer"
                name="offer"
                component="textarea"
                wrap={'hard'}
                cols="40"
                rows="5"
                className={
                  "form-control" +
                  (errors.offer && touched.offer ? " is-invalid" : "")
                }
              ></Field>
            </div>

            <div className="form-group">
              <label className="container font-weight-bold">Freier Text</label>
              <Field
                id="freeText"
                name="freeText"
                component="textarea"
                wrap={'hard'}
                cols="40"
                rows="5"
                className={
                  "form-control" +
                  (errors.freeText && touched.freeText ? " is-invalid" : "")
                }
              ></Field>
            </div>

            <div className="form-group">
              <label className="container font-weight-bold">Impressum</label>
              <Field
                id="imprint"
                name="imprint"
                component="textarea"
                wrap={'hard'}
                cols="40"
                rows="5"
                className={
                  "form-control" +
                  (errors.imprint && touched.imprint ? " is-invalid" : "")
                }
              ></Field>
            </div>

            <div className="form-group">
              <button type="submit" className="btn">
                Eintragen
              </button>
            </div>
          </Form>
        )}
      ></Formik>
    );
  }
}

export { RecruitingForm };
