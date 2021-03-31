import React from 'react'
import blogrlogo from '../images/logo.svg' 
import './Footer.css'

const Footer = () => {

    return (
        <footer>
            <img className='footer-logo' src={blogrlogo} alt='logo' />
            <section>
                <h5>Product</h5>
                <a href='#'>Overview</a>
                <a href='#'>Pricing</a>
                <a href='#'>Marketplace</a>
                <a href='#'>Features</a>
                <a href='#'>Integrations</a>
            </section>
            <section>
                <h5>Company</h5>
                <a href='#'>About</a>
                <a href='#'>Team</a>
                <a href='#'>Blog</a>
                <a href='#'>Careers</a>
            </section>
            <section>
                <h5>Connect</h5>
                <a href='#'>Contact</a>
                <a href='#'>Newsletter</a>
                <a href='#'>LinkedIn</a>
            </section>
            <div className='credits'>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
            Coded by <a href="https://github.com/DeeDowns" target='_blank' rel="noreferrer" >Dee</a>.
            </div>
        </footer>
    )
}

export default Footer