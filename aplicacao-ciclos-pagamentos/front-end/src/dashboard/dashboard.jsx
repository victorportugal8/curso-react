import React, {Component} from "react"

import ContentHeader from "../comum/template/contentHeader"
import Content from "../comum/template/content"

class Dashboard extends Component{
    render(){
        return(
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    Dashboard
                </Content>
            </div>
        )
    }
}

export default Dashboard