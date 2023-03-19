import React from 'react'
import { Formik, Field, FieldArray, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'

const initialValues = {
  title: '',
  description: ''
  // TipItems: []
}

function FormsTipsChange(props) {
  return (
    <Formik
      initialValues={props.initialValues || initialValues}
      onSubmit={props.onSubmit}
      enableReinitialize
      validationSchema={
        yup.object({
          criminalName: yup.string().required().label('title'),
          description: yup.string().required.label('info')
          /* TodoItems: yup.array().of(yup.object({
            name: yup.string().required().label('Name'),
            checked: yup.boolean()
          })) */
        })
      }
    >
      {
        ({ values, errors, touched, isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label>Title</label>
              <Field className={`form-control ${errors?.title && touched?.title && 'is-invalid'}`} name="title" placeholder="Pokemons To Catch" />
              <ErrorMessage className="invalid-feedback" name="title" component="div" />
            </div>

            <div className="mb-3">
              <label>Info</label>
              <Field className={`form-control ${errors?.info && touched?.info && 'is-invalid'}`} name="info" placeholder="Pokemons To Catch" />
              <ErrorMessage className="invalid-feedback" name="info" component="div" />
            </div>

            <button
              className="btn btn-primary float-end"
              type="submit"
              disabled={isSubmitting}
            >Submit</button>
          </Form>
        )
      }
    </Formik>
  )
}

export default FormsTipsChange
