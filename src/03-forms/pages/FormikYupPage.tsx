import "../styles/styles.css";
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const FormikYupPage = () => {

    const { handleSubmit, errors, 
            touched, getFieldProps 
        } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: formData => {
            console.log(formData)
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, 'Must be 15 character or less').required(),
            lastName: Yup.string().max(15, 'Must be 15 character or less').required(),
            email: Yup.string().email().required(),
        })
    })

  return (
    <div>
        <h1>Formik Yup Tutorial</h1>
        <form noValidate onSubmit={handleSubmit}> 
            <label htmlFor="firstName">First Name</label>
            <input type="text" { ...getFieldProps('firstName') }  />
            { touched.firstName && errors.firstName && <span> {errors.firstName} </span> }

            <label htmlFor="lastName">Last Name</label>
            <input type="text" { ...getFieldProps('lastName') } />
            { touched.lastName && errors.lastName && <span> {errors.lastName} </span> }
            
            <label htmlFor="email">Email Address</label>
            <input type="email" { ...getFieldProps('email') } />
            { touched.email && errors.email && <span> {errors.email} </span> }
            <button type="submit"> Submit </button>
        </form>
    </div>
  )
}
