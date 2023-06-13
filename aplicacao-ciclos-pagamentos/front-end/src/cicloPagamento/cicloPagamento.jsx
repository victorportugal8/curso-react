import React, {Component} from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import ContentHeader from "../comum/template/contentHeader"
import Content from "../comum/template/content"
import Tabs from "../comum/tab/tabs"
import TabsHeader from "../comum/tab/tabsHeader"
import TabsContent from "../comum/tab/tabsContent"
import TabHeader from "../comum/tab/tabHeader"
import TabContent from "../comum/tab/tabContent"
import { selectTab, showTabs } from "../comum/tab/tabActions"
import { create } from "./cicloPagamentoActions"
import List from './cicloPagamentoList'
import Form from './cicloPagamentoForm'

class CicloPagamento extends Component{
    componentWillMount(){
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }
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
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create}/>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form />
                            </TabContent>
                            <TabContent id='tabDelete'><h1>Excluir</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs, create}, dispatch)
export default connect(null, mapDispatchToProps)(CicloPagamento)