import { ChangeEvent, FormEvent, useState } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css'

const RegisterPage = () => {

   const { formData, onChange, name, password1, password2, email, resetForm, isValidEmail } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    })
   
    

    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(formData);
        
    }

    return ( 
        <div>
            <h1> Register Page </h1>

            <form noValidate onSubmit={onSubmit}>
                <input 
                    type="text"
                    placeholder="Name"
                    onChange={onChange}
                    value={name}
                    name="name"
                    className={`${name.trim().length <= 0 && 'has-error' }`}
                />
                { name.trim().length <= 0 && <span>Este campo es necesario</span> }
                <input 
                    type="email"
                    placeholder="Email"
                    onChange={onChange}
                    value={email}
                    name="email"
                    className={`${!isValidEmail(email) && 'has-error' }`}
                />
                { !isValidEmail(email) && <span>Email no es valido</span> }
                <input 
                    type="password"
                    placeholder="Password"
                    onChange={onChange}
                    value={password1}
                    name="password1"
                    className={`${password1.trim().length <= 0 && 'has-error' }`}
                />
                { password1.trim().length <= 0 && <span>Este campo es necesario</span> }
                { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña debe ser mayor a 6 caracteres</span> }
                <input 
                    type="password"
                    placeholder="Repeat Password"
                    onChange={onChange}
                    value={password2}
                    name="password2"
                    className={`${password2.trim().length <= 0 && 'has-error' }`}
                />
                { password2.trim().length <= 0 && <span>Este campo es necesario</span> }
                { password1.trim().length > 0 &&  password2.trim() !== password1.trim() && <span>Ambas contraseñas deben ser iguales</span> }

                <button type="submit"> Create </button>
                <button type="button" onClick={resetForm}> Reset </button>
            </form>
        </div>
     );
}
 
export default RegisterPage;