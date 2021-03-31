import React from 'react'
import blogrlogo from '../images/logo.svg'
import bgPatternIntro from '../images/bg-pattern-intro.svg'
import './Header.css';

const Header = () => {


    return (
        <header>
            <h1>Header</h1>
            {/* <img src={bgPatternIntro} alt='circles and squares design'/> */}
            <img src={blogrlogo} alt='blogr logo' style={{backgroundColor: 'red'}} />
            <nav>
                <label>Product</label>
                <select>
                <option>Overview</option>
                <option>Pricing</option>
                <option>Marketplace</option>
                <option>Features</option>
                <option>Integrations</option>
                </select>
                
                <label>Company</label>
                <select>
                <option>About</option>
                <option>Team</option>
                <option>Blog</option>
                <option>Careers</option>
                </select>

                <label>Connect</label>
                <select>
                <option>Newsletter</option>
                <option>LinkedIn</option>
                </select>
                <div>
                    <p>Login</p>
                    <p>Sign Up</p>
                </div>
            </nav>
            <div>
                <h1>A modern publishing platform</h1>
                <h2>Grow your audience and build your online brand</h2>
                <div>
                    <button>Start for Free</button>
                    <button>Learn More</button>
                </div>
            </div>
        </header>
    )
}

export default Header