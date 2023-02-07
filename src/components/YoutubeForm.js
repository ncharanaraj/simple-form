import React from 'react'
import { useFormik } from 'formik'

export default function YoutubeForm() { 
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            channel: ''
        },

        onSubmit: values => {
            console.log("form data", values)
        }
    })

    // console.log("Formik values -", formik.values)

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input
                id='name'
                type='text'
                name='name'
                onChange={formik.handleChange}
                value={formik.values.name}
            />

            <label htmlFor='email'>Email</label>
            <input
                id='email'
                type='email'
                name='email'
                onChange={formik.handleChange}
                value={formik.values.email}
            />

            <label htmlFor='channel'>Channel</label>
            <input
                id='channel'
                type='text'
                name='channel'
                onChange={formik.handleChange}
                value={formik.values.channel}
            />

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
