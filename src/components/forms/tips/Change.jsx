import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik' // FieldArray,
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
          criminalName: yup.string().required(), // .label('Title'),
          description: yup.string().required() // .label('Info')
          /* TodoItems: yup.array().of(yup.object({
            name: yup.string().required().label('Name'),
            checked: yup.boolean()
          })) */
        })
      }
    >
      {
        ({ errors, touched, isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label className="px-5">Name of criminal</label>
              <Field className={`form-control ${errors?.title && touched?.title && 'is-invalid'} text-black pl-1`} name="title" placeholder="John Doe" />
              <ErrorMessage className="invalid-feedback" name="title" component="div" />
            </div>

            <div className="mb-3">
              <label className="px-2">Details</label>
              <Field component="textarea" className={`form-control ${errors?.info && touched?.info && 'is-invalid'} text-black pl-1`} name="info" />
              <ErrorMessage className="invalid-feedback" name="info" component="div" />
            </div>

            <button className="hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )
      }
    </Formik>
  )
}

export default FormsTipsChange
