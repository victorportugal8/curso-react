import React, {Component} from "react"

import ContentHeader from "../comum/template/contentHeader"
import Content from "../comum/template/content"
import Tabs from "../comum/tab/tabs"
import TabsHeader from "../comum/tab/tabsHeader"
import TabsContent from "../comum/tab/tabsContent"
import TabHeader from "../comum/tab/tabHeader"

class CicloPagamento extends Component{
    render(){
        return(
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent></TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

export default CicloPagamento