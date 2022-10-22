import { Formik, Form } from "formik";
import { MySelect, MyTextInput } from "../components";
import formJson from '../data/custom-form.json'
import * as Yup from 'yup';

const initialValues: {[ key: string] : any } = {}
const requiredFields: {[ key: string] : any } = {}

for (const input of formJson){
    initialValues[ input.name ] = input.value
    if( !input.validations ) continue;
    
    let schema = Yup.string()

    for( const rule of input.validations){
        if( rule.type === 'required' ){
            schema = schema.required(rule.message)
        }
        if( rule.type === 'minLength'){
            schema = schema.min((rule as any).value || 1, rule.message)
        }
        if( rule.type === 'email'){
            schema = schema.email().required(rule.message)
        }
    }
    
    requiredFields[input.name] = schema
}

const validationSchema = Yup.object({...requiredFields})


export const DynamicForm = () => {
  return (
    <div>
        <h1>Dynamic Form</h1>
        
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={ (values) => console.log(values) }
        >
            {  (formik) => (
                <Form>
                    { formJson.map( ({ type, name, placeholder, label, options }) => {

                        if(type === 'input' || type === 'password' || type === 'email'){
                            return <MyTextInput 
                                key={name}
                                type={ ( type as any )} 
                                name={name} 
                                label={label} 
                                placeholder={placeholder}
                            />
                        } else if( type === 'select'){
                            return (
                                <MySelect
                                    key={name}
                                    label={label}
                                    name={name}
                                >
                                    <option value="">Select an Option</option>
                                    {
                                        options?.map( (opt, i) => (
                                            <option value={opt.id} key={i}> {opt.label} </option>
                                        ))
                                    }
                                </MySelect>
                            )
                        }


                        throw new Error(`El type ${type} no es soportado`)

                        
                    }) }

                    <button type="submit">
                        Submit
                    </button>
                    <button type="reset">Reset</button>
                </Form>
            ) }
        </Formik>
    </div>
  )
}
