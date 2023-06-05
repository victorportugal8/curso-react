import React, {Component} from "react"

import ContentHeader from "../comum/template/contentHeader"
import Content from "../comum/template/content"
import Tabs from "../comum/tab/tabs"
import TabsHeader from "../comum/tab/tabsHeader"
import TabsContent from "../comum/tab/tabsContent"

class CicloPagamento extends Component{
    render(){
        return(
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader></TabsHeader>
                        <TabsContent></TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

export default CicloPagamento