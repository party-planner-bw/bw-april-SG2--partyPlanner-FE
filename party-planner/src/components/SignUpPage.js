import React from 'react';

const SignUpPage = () => {
    return (
        <div className="SignUpWrapper">
            <h2>Sign Up</h2>
            <input
            placeholder="First Name"
            />
            <input
            placeholder="Last Name"
            />
            <input
            placeholder="Username"
            />
            <input
            placeholder="Password"
            />
            <button>Sign Up</button>
            <button>Cancel</button>
        </div>
    )
}

export default SignUpPage;