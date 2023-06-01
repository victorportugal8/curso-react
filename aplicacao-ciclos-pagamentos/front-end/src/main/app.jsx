import '../comum/template/dependencias'
import React from "react"

import Header from '../comum/template/header'
import Sidebar from '../comum/template/sidebar'
import Footer from '../comum/template/footer'
import Routes from './routes'

export default props =>(
    <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
            <Routes />
        </div>
        <Footer />
    </div>
)