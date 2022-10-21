import "../styles/styles.css";
import { Form, Formik} from 'formik'
import * as Yup from 'yup'
import { MyTextInput, MySelect, MyCheckbox } from "../components";


export const FormikAbstraction = () => {
  return (
    <div>
        <h1>Formik Abstraction</h1>

        <Formik
            initialValues={{  
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            }}
            onSubmit={ (values) => console.log(values) }
            validationSchema= {
                Yup.object({
                    firstName: Yup.string().max(15, 'Must be 15 character or less').required(),
                    lastName: Yup.string().max(15, 'Must be 15 character or less').required(),
                    email: Yup.string().email().required(),
                    terms: Yup.boolean().oneOf([true], 'You must accept terms and conditions'),
                    jobType: Yup.string().required('Required').notOneOf([''], 'This option isnt allowed')
                })
            }
        >
            { formik => (
                    <Form > 
                        <MyTextInput 
                            label="First Name"
                            name="firstName"
                            placeholder="First Name"
                        />
                        <MyTextInput 
                            label="Last Name"
                            name="lastName"
                            placeholder="Last Name"
                        />
                        <MyTextInput 
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Email"
                        />
                        
                        <MySelect label="Job Type" name="jobType">
                            <option value="">Pick Something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT Junior</option>
                        </MySelect>


                        <MyCheckbox name="terms" label="Terms & Conditions" />
      

                        <button type="submit"> Submit </button>
                    </Form>
                )
            }
            
        </Formik>

        
    </div>
  )
}
