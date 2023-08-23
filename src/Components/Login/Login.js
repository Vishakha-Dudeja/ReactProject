import { Form, Field } from 'react-final-form';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const onSubmit = (data) => {
    console.log(data);
    if(data.userName === 'v' && data.password === 'v') {
        navigate('/home')
    }
    }

    return (
        <div style={{textAlign: 'center'}}>
            <Form
                onSubmit={onSubmit}
                // validate={validate}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div>
                            <label>UserName</label>
                            <Field name="userName" component="input" placeholder="User Name" />
                        </div>
                        <div>
                            <label>Password</label>
                            <Field name="password" component="input" placeholder="Password" />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            />
            {/*
            Validation
            style
                */}
                {/*Reference- 
                https://final-form.org/docs/react-final-form/getting-started
                https://contactmentor.com/login-form-react-js-code/
                https://primereact.org/inputtext/#form
                */}
        </div>
    )
}

export default Login;