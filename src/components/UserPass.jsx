import { useState, useEffect } from 'react'
import '../App.css'

let nameInput = "";
let passInput = "";


function UserName() {
    const [isFocused, setIsFocused] = useState(false);
    const handleClick = () => {
        setIsFocused(true);
    };

    const handleChange = (e) => {
        nameInput= e.target.value;
    };

    return (

        <>
            <input type='text' placeholder='User Name' role="UserName" onClick={handleClick} onChange={handleChange}></input>
        </>
    );

}


function Password() {
    const [isFocused, setIsFocused] = useState(false);

    const handleClick = () => {
        setIsFocused(true);
    };

    const handleChange = (e) => {
        passInput = e.target.value;
    }

    return (

        <>
            <input type='password' placeholder='Password' role="Password" onClick={handleClick} onChange={handleChange}></input>
        </>
    );
}


function Submit(props) {
    
    let endpoint = props.endpoint;

    const doPost = async () => {
    if (nameInput === "" || passInput === "") return;

        const data = {
            user: nameInput,
            pass: passInput
        };
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });


        if(!response.ok){
            return<h1>An error occured</h1>
        }
    }

    return <button onClick={doPost}>Sign Up</button>


}



export default function userPassPage(props) {
    
    return (<>
        <div className="UserPass">
            <UserName />
            <Password />
            <Submit endpoint ={props.endpoint}/>
        </div>
    </>)
}