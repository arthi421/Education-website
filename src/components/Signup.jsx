import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './signup.css'; // Import the new CSS file

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        age: '',
        gender: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement sign-up logic here
        console.log(formData);
        navigate('/login'); // Change navigation to login page
    };

    const handleLoginClick = () => {
        navigate('/login'); // Navigate to login page
    };

    return (
        <section className="signup-section">
            <Container>
                <Row>
                    <Col lg="12">
                        <div className="signup_content">
                            <h1 className="mb-4">Sign Up</h1>
                            <p className="mb-4">Join us and start your learning journey today.</p>

                            <form onSubmit={handleSubmit} className="signup-form">
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="age">Age:</label>
                                    <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="gender">Gender:</label>
                                    <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
                                        <option value="">Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <button type="submit">Sign Up</button>
                                <button type="button" onClick={handleLoginClick} className="ml-2">Login</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Signup;
