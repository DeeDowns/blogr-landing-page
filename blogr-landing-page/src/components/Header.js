import React, { useState } from 'react'
import blogrlogo from '../images/logo.svg'
import iconOpenArrow from '../images/icon-arrow-light.svg'
import './Header.css';
import { ProductDropdown, CompanyDropdown, ConnectDropdown } from './Dropdowns'

const Header = () => {
    const [dropdown, setDropdown] = useState({
        product: false,
        company: false,
        connect: false
    })


    const toggle = event => {
        console.log(event.target.id)
        setDropdown({...dropdown, [event.target.id]: !dropdown[event.target.id]})
    }

    return (
        <header>
            <div className='intro-div'> 
                <nav>
                    <img src={blogrlogo} alt='blogr logo' />
                    <div className='dropdowns'>
                        <div className='dropdown-section'>
                            <p id='product' onClick={toggle}>
                                Product
                                <img src={iconOpenArrow} alt='arrow' className={`${dropdown.product ? 'rotate' : ''}`} />
                            </p>
                            <ProductDropdown dropdown={dropdown}/>
                        </div>
                        
                        <div className='dropdown-section'>
                            <p id='company' onClick={toggle}>
                                Company    
                                <img src={iconOpenArrow} alt='arrow' className={`${dropdown.company ? 'rotate' : ''}`} />
                            </p>
                            <CompanyDropdown dropdown={dropdown} />
                        </div>

                        <div className='dropdown-section'>
                            <p id='connect' onClick={toggle}>
                                Connect 
                                <img src={iconOpenArrow} alt='arrow' className={`${dropdown.connect ? 'rotate' : ''}`} />
                            </p>
                            <ConnectDropdown dropdown={dropdown} />
                        </div>
                    </div>

                    <div className='login-signup'>
                            <a href='#'>Login</a>
                            <a href='#'>Sign Up</a>
                        </div>
                </nav>
                <div className='description'> 
                    <h1>A modern publishing platform</h1>
                    <h2>Grow your audience and build your online brand</h2>
                    <div className='link-group'>
                        <a href='#'>Start for Free</a>
                        <a href='#'>Learn More</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header