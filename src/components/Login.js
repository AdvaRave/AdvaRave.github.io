import React, {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components';
import sha256 from 'js-sha256';

export const key = 'portfolioLoggedIn';
export const hashed = 'cc258ff59ed827dce11cef3fe8c3330f1e7073d09aec5ca0bac6647a2cad0210'; // simpleton impl. just to prevent the "non-tech" visitors
const StyledLogin = styled.div`
   text-align: center;

   
    h2 {
       padding-top: 100px;
       font-size: 30px;
       line-height: 40px;
       color: ${props => props.theme.colors.headerDarkBlue};
    }

    small {
       display: block;
       font-size: 16px; 
       padding: 10px 0 40px 0;  
    }

    input {
        width: 200px;
    }

    button {
        margin-top: 40px;
        font-size: 18px;
        color: ${props => props.theme.colors.headerLightBlue};
    }
`;

const Login = ({history}) => {
    const [pass, setPass] = useState('');
    const [error, setError] = useState(false);

    const attemptLogin = useCallback(() => {
        if (sha256(pass) === hashed) {
            localStorage.setItem(key, hashed);
            history.push('/');
        } else {
            setError(true);
        }
    }, [history, pass]);
 
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === 13) {
                attemptLogin();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [attemptLogin]);


    return (
        <StyledLogin>
            <h2>Hi, you've reached Adva's portfolio!</h2>
            <small>The Portfolio is password protected:</small>
            <input type="password" onChange={(e) => setPass(e.target.value)}></input>
            <div><button onClick={attemptLogin}>Enter</button></div>
            {error && <div>Wrong Password!</div>}
        </StyledLogin>
    );
};


export default Login;