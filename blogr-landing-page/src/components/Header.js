import React from 'react'
import blogrlogo from '../images/logo.svg'
import iconArrow from '../images/icon-arrow-light.svg'
import './Header.css';

const Header = () => {


    return (
        <header>
            <div className='intro-div'> 
                <nav>
                    <img src={blogrlogo} alt='blogr logo' />
                    <div className='dropdowns'>
                        <ul>Product <img src={iconArrow} alt='arrow' />
                            <li><a href='#'>Overview</a></li>
                            <li><a href='#'>Pricing</a></li>
                            <li><a href='#'>Marketplace</a></li>
                            <li><a href='#'>Features</a></li>
                            <li><a href='#'>Integrations</a></li>
                        </ul>

                        <ul>Company <img src={iconArrow} alt='arrow' />
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Team</a></li>
                            <li><a href='#'>Blog</a></li>
                            <li><a href='#'>Careers</a></li>
                        </ul>

                        <ul>Connect <img src={iconArrow} alt='arrow' />
                            <li><a href='#'>Newsletter</a></li>
                            <li><a href='#'>LinkedIn</a></li>
                        </ul>
                    </div>

                    <div className='login-signup'>
                            <a href='#'>Login</a>
                            <a href='#'>Sign Up</a>
                        </div>
                </nav>
                <div className='description'> 
                    <h1>A modern publishing platform</h1>
                    <h2>Grow your audience and build your online brand</h2>
                    <div className='button-group'>
                        <button>Start for Free</button>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header