
import '../styles/styles.css'

import { Field, Form, ErrorMessage, Formik} from 'formik'
import * as Yup from 'yup'

export const RegisterFormikPage = () => {    
    
    return ( 
        <div>
            <h1> Register Formik Page </h1>


            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={ ( e ) => console.log(e) }
                validationSchema={
                    Yup.object({
                        name: Yup.string().max(15).min(2).required('Required'),
                        email: Yup.string().email().required('Required'),
                        password1: Yup.string().min(6).required('Required'),
                        password2: Yup.string().oneOf([Yup.ref('password1'), null], 'Passwords don"t match').required('Required')
                    })
                }
            >
                { ({handleReset}) => (
                    <Form>
                        <label htmlFor="name">Name</label>
                        <Field name="name" type="text"/>
                        <ErrorMessage name="name" component="span"/>

                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email"/>
                        <ErrorMessage name="email" component="span"/>

                        <label htmlFor="password1">Password</label>
                        <Field name="password1" type="password"/>
                        <ErrorMessage name="password1" component="span"/>

                        <label htmlFor="password2">Confirm password</label>
                        <Field name="password2" type="password"/>
                        <ErrorMessage name="password2" component="span"/>

                        <button type='submit'>Submit</button>
                        <button type="reset">Reset</button>
                    </Form>
                )}
            </Formik>
        </div>
     );
}
