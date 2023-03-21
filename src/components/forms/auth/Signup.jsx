import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  email: '',
  password: '',
  passwordConfirmation: ''
}

function FormsAuthSignup(props) {
  return (
    <Formik
      initialValues={props.initialValues || initialValues}
      onSubmit={props.onSubmit}
      enableReinitialize
      validationSchema={
        Yup.object({
          email: Yup.string().required().label('Title'),
          password: Yup.string().min(6).required().label('Password'),
          passwordConfirmation: Yup.string().oneOf([Yup.ref('password')], 'Passwords need to match').required().label('Password Confirmation')
        })
      }
    >
      {
        ({ errors: e, touched: t, isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label className="px-5">Email</label>
              <Field
                className={`form-control ${e?.email && t?.email && 'is-invalid'} text-black pl-1`} // need is-invalid?
                name="email"
                type="email"
                placeholder="adam.chan@gmail.com"
              />
              <ErrorMessage
                className="text-red-500"
                name="email"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label className="px-2">Password</label>
              <Field
                className={`form-control ${e?.password && t?.password && 'is-invalid'} text-black pl-1`}
                name="password"
                type="password"
              />
              <ErrorMessage
                className="text-red-500"
                name="password"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label className="px-2">Password Confirmation</label>
              <Field
                className={`form-control ${e?.passwordConfirmation && t?.passwordConfirmation && 'is-invalid'} text-black pl-1`}
                name="passwordConfirmation"
                type="password"
              />
              <ErrorMessage
                className="text-red-500"
                name="passwordConfirmation"
                component="div"
              />
            </div>

            <button className="hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )
      }
    </Formik>
  )
}

export default FormsAuthSignup
