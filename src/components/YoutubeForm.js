import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const initialValues = {
    name: '',
    email: '',
    channel: '',
    // comment:''
}

const onSubmit = values => {
    console.log("form data", values)
}


const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required')
})

export default function YoutubeForm() {
  return (
    <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
    >
        <Form>
            <div className='form-control'>
                <label htmlFor='name'>Name</label>
                <Field
                    id='name'
                    type='text'
                    name='name'
                />
                <ErrorMessage name='name' />
            </div>

            <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <Field
                    id='email'
                    type='email'
                    name='email'
                />
                <ErrorMessage name='email' />
            </div>

            <div className='form-control'>
                <label htmlFor='channel'>Channel</label>
                <Field
                    id='channel'
                    type='text'
                    name='channel'
                />
                <ErrorMessage name='channel' />
            </div>

            {/* <div className='form-control'>
                <label htmlFor='comment'>Comment</label>
                <Field
                    as='textarea'
                    id='comment'
                    name='comment'
                />
            </div> */}

            <button type='submit'>Submit</button>
        </Form>
    </Formik>
  )
}
