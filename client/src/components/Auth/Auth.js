import React, { useState } from 'react';

// util functions
import {
    loginUser,
    registerUser
} from '../../requests';

import {
    Redirect,
} from 'react-router-dom';
import history from '../../history';

// styles
import styles from './Auth.module.css';


function Login(props) {
    const { passChange, userChange, submit } = props;
    return (
        <div className={styles.authForm}>
            <h1>Login</h1>
            <input className={styles.input} type='text' required placeholder='Your username' onChange={userChange}/>
            <input className={styles.input} type='password' required placeholder='Your password' onChange={passChange}/>
            <button className={styles.loginBtn} onClick={submit}>Login</button>
        </div>
    );
}

function Register(props) {
    const { emailChange, passChange, userChange, submit } = props;
    return (
        <div className={styles.authForm}>
            <h1>Register</h1>
            <input className={styles.input} type='text' required placeholder='Your username' onChange={userChange}/>
            <input className={styles.input} type='email' required placeholder='Your email' onChange={emailChange}/>
            <input className={styles.input} type='password' required placeholder='Your password' onChange={passChange}/>
            <button className={styles.loginBtn} onClick={submit}>Register</button>
        </div>
    );
}

function Auth(props) {
    const [ page, setPageType ] = useState('login');
    const [ userName, setUserName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onUsernameChange = (e) => {
        setUserName(e.target.value);
    }

    const submitAuth = async (e) => {
        e.preventDefault();
        const dataObj = {
            username: userName,
            password,
            email
        }

        if (page === 'login') {
            const response = await loginUser(dataObj);
            if (!response.error) {
                response.isLoggedIn = true;
                const userData = {
                    id: response.id,
                    username: response.username,
                    city: response.city,
                    state: response.state,
                    books: response.books, // trebuie facut request pe server sa trimita inapoi cartile pentru fiecare user la login
                    isLoggedIn: true
                }
                history.push('/auth', response);
                localStorage.setItem('user', JSON.stringify(userData));
                props.setUser(response);
                return <Redirect to = '/books'/>
            }
            else {
                // bag error boundry
            }
        }
        else if (page === 'register') {
            const response = await registerUser(dataObj);
            if (!response.error) {
                response.isLoggedIn = true;
                const userData = {
                    id: response.id,
                    username: response.username,
                    city: response.city,
                    state: response.state,
                    books: response.books, // trebuie facut request pe server sa trimita inapoi cartile pentru fiecare user la login
                    isLoggedIn: true
                }
                history.push('/auth', userData);
                props.setUser(userData);
                localStorage.setItem('user', JSON.stringify(userData));
                return <Redirect to = '/books'/> // trebuie fixat redirectu
            }
            else {
                // bag error boundry
            }
        }
    }

    const pageRender = page === 'login' ? 
    <Login 
        passChange={onPasswordChange} 
        userChange={onUsernameChange} 
        submit={submitAuth}
    /> 
    : 
    <Register 
        emailChange={onEmailChange} 
        passChange={onPasswordChange} 
        userChange={onUsernameChange} 
        submit={submitAuth}
    />;

    const changePageType = () => {
        if (page === 'login') return setPageType('register');
        if (page === 'register') return setPageType('login');
    }

    const displayText = page === 'login' ? 'register' : 'login';
    return (
        <div className={styles.authContainer}>
            {pageRender}
            <button className={styles.changeBtn} onClick={changePageType}>Go to {displayText}</button>
        </div>
    )
}

export default Auth
