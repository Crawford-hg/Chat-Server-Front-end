
import '../App.css'
import UserPass from '../components/UserPass'
import { useState } from 'react'

function Register() {

    return (
        <>
            <div className='UserPass'>
                <h1>Create Account</h1>
                <UserPass endpoint="Register" />

            </div>
        </>
    )

}


function LogIn() {
    return (
        <>
            <div className='UserPass'>
                <h1>Log In</h1>
                <UserPass endpoint="Log In" />
            </div>
        </>
    )
}

function SetView() {
    const [activeView, setActiveView] = useState('Welcome');

    const handleRegisterClick = () => {
        setActiveView('reg');
    }
    const handleLogInClick = () => {
        setActiveView('log');
    }

    if (activeView === 'Welcome') {

        return (

            <>
                <div>
                    <h1>Welcome!</h1>
                    <button onClick={handleRegisterClick}>Register new Account</button>
                    <button onClick={handleLogInClick}>Log in to existing Account</button>

                </div>
            </>
        );
    }

    if (activeView === 'reg')
        return <Register />;
    if (activeView === 'log')
        return <LogIn />;





}

export default function Landing() {

    return (<><SetView /></>);
}

