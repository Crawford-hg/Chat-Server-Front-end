import { useState, useEffect} from 'react'
import '../App.css'



function UserName() {
    const [isFocused, setIsFocused] = useState(false);
    const handleClick = () => {
        setIsFocused(true);
    };

    return (

        <>
            <input type='text' placeholder='User Name' role="UserName" onClick={handleClick} ></input>
        </>
    );

}


function Password() {
    const [isFocused, setIsFocused] = useState(false);
    const handleClick = () => {
        setIsFocused(true);
    };

    return (

        <>
            <input type='password' placeholder='Password' role="Password" onClick={handleClick}></input>
        </>
    );
}


function Submit(){



    return <button>Sign Up</button>


}



export default function registerPage() {
    return (<>
        <div className="register">
            <h1 >Create account</h1>
            <UserName />
            <Password />
        </div>
    </>)
}