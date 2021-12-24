import React from 'react';


import SignUp from '../../components/formulaires/SignUp';



function Inscription() {
    return (
        <div className="">
            <h1> INSCRIPTION </h1>
            <hr className="my-5" />
            <div className="container">
                <SignUp></SignUp>
            </div>
            <hr className="my-5" />
        </div>
    )
}

export default Inscription;