import React from 'react'
import blogrlogo from '../images/logo.svg'

const Header = () => {


    return (
        <header>
            <h1>Header</h1>
            <img src={blogrlogo} alt='blogr logo' style={{backgroundColor: 'red'}} />
            <nav>
                <p>Product</p>
                <p>Company</p>
                <p>Connect</p>
                <p>Login</p>
                <p>Sign Up</p>
            </nav>
        </header>
    )
}

export default Header