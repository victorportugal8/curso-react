import './logo.css'
import logo from '../../assets/images/logo.png'

import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
        </Link>
    </aside>