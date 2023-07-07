import React from "react"

import Header from '../comum/template/header'
import Sidebar from '../comum/template/sidebar'
import Footer from '../comum/template/footer'
import Mensagens from '../comum/msg/mensagens'

export default props =>(
    <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
            {props.children}
        </div>
        <Footer />
        <Mensagens />
    </div>
)