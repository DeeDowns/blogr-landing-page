import React from 'react'

const ProductDropdown = (props) => {
    const { dropdown } = props

    return (
        dropdown.product &&
        <ul>
            <li><a href='#'>Overview</a></li>
            <li><a href='#'>Pricing</a></li>
            <li><a href='#'>Marketplace</a></li>
            <li><a href='#'>Features</a></li>
            <li><a href='#'>Integrations</a></li> 
        </ul>
        
    )
}

const CompanyDropdown = (props) => {
    const { dropdown } = props

    return (
        dropdown.company &&
        <ul>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Team</a></li>
            <li><a href='#'>Blog</a></li>
            <li><a href='#'>Careers</a></li>
        </ul>
        
    )
}

const ConnectDropdown = (props) => {
    const { dropdown } = props

    return (
        dropdown.connect &&
        <ul>
            <li><a href='#'>Newsletter</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>LinkedIn</a></li>
        </ul>
        
    )
}

export { ProductDropdown, CompanyDropdown, ConnectDropdown }