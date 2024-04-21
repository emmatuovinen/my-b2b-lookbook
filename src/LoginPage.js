import React, { useState } from 'react';
import {sendCodeToAzureFunction} from './Api/Api.js'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState('');

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    };

    async function handleLogin() {
        // // Check if the entered code is valid (4 digits)
        if (/^\d{4}$/.test(code)) {
            // Code is valid, you can proceed with login logic here
            const response = await sendCodeToAzureFunction(code);
            
            if(response.status === 200) {
                navigate('/home');
            } else {
                //we let user know the login code was not valid
                alert(response.data);
            }
        } else {
            //here we handle incorrect format of input
            alert('Invalid code. Please enter a 4-digit code.');
        }
    };

    return (
        <div className='App'>
            <h2>Login</h2>
            <input
                type="number"
                placeholder="Enter 4-digit code"
                value={code}
                onChange={handleCodeChange}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
