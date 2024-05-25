import { useRef } from 'react';
import { Container } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import './header.css';
import logo from '../assets/images/logo.png';

const navLinks = [
    {
        display: 'Home',
        url: '/',
    },
    {
        display: 'Courses',
        url: '/courses' // Update the URL to navigate to Courses1
    },
    {
        display: 'About',
        url: '/about'
    },
];

const Header = () => {
    const menuRef = useRef();
    const navigate = useNavigate();

    const menuToggle = () => menuRef.current.classList.toggle('active_menu');

    const handleSignIn = () => {
        navigate('/signup');
    };

    return (
        <header className="header">
            <Container>
                <div className='navigation d-flex align-items-center justify-content-between'>
                    <div className='logo'>
                        <h2 className='d-flex align-items-center justify-content-between'>
                            <img src={logo} alt="" />isEd
                        </h2>
                    </div>

                    <div className='nav d-flex align-items-center gap-5'>
                        <div className='nav_menu' ref={menuRef} onClick={menuToggle}>
                            <ul className='nav_list'>
                                {navLinks.map((item, index) => (
                                    <li key={index} className='nav_item'>
                                        <a href={item.url}>{item.display}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='nav_right'>
                            <p className='mb-0 d-flex align-items-center gap-2'></p>
                            <button className='btn-sign_in' onClick={handleSignIn}>SIGN IN</button>
                        </div>
                    </div>

                    <div className='mobile_menu'>
                        <span><i className='ri-menu-line' onClick={menuToggle}></i></span>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
