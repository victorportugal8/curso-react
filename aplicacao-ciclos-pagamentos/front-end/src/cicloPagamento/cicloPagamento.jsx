import React, {Component} from "react"

import ContentHeader from "../comum/template/contentHeader"
import Content from "../comum/template/content"

class CicloPagamento extends Component{
    render(){
        return(
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>
                    Ciclos de Pagamentos
                </Content>
            </div>
        )
    }
}

export default CicloPagamento