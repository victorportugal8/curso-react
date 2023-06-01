import '../comum/template/dependencias'
import React from "react"

import Header from '../comum/template/header'
import Sidebar from '../comum/template/sidebar'
import Footer from '../comum/template/footer'

export default props =>(
    <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
            <h1>Conteúdo</h1>
        </div>
        <Footer />
    </div>
)