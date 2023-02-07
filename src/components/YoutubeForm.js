import React from 'react'
import { useFormik } from 'formik'

const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const onSubmit = values => {
    console.log("form data", values)
}

const validate = values => {
    const errors = {}

    if(!values.name) {
        errors.name = "Required";
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if(!values.channel) {
        errors.channel = "Required";
    }

    return errors;
}


export default function YoutubeForm() { 
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    })

    console.log("visted -", formik.touched)

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <div className='form-control'>
                <label htmlFor='name'>Name</label>
                <input
                    id='name'
                    type='text'
                    name='name'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (<div className='error'>{formik.errors.name}</div>) : null}
            </div>

            <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <input
                    id='email'
                    type='email'
                    name='email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (<div className='error'>{formik.errors.email}</div>) : null}
            </div>

            <div className='form-control'>
                <label htmlFor='channel'>Channel</label>
                <input
                    id='channel'
                    type='text'
                    name='channel'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.channel}
                />
                {formik.touched.channel && formik.errors.channel ? (<div className='error'>{formik.errors.channel}</div>) : null}
            </div>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
