import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
    const [loginData, setLoginData] = useState({
        name: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Implement login logic here
        console.log(loginData);
        navigate('/');
    };

    return (
        <section className="login-section">
            <div className="login_content">
                <h1>Login</h1>
                <form onSubmit={handleLogin} className="login-form">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={loginData.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" value={loginData.password} onChange={handleChange} required />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </section>
    );
}

export default Login;
