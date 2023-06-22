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
import { init, create, update, remove } from "./cicloPagamentoActions"
import List from './cicloPagamentoList'
import Form from './cicloPagamentoForm'

class CicloPagamento extends Component{
    componentWillMount(){
        this.props.init()
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
                                <Form onSubmit={this.props.create} submitLabel='Incluir' submitClass='primary' />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form onSubmit={this.props.update} submitLabel='Alterar' submitClass='info' />
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form onSubmit={this.props.remove} readOnly={true} submitLabel='Excluir' submitClass='danger' />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({init, create, update, remove}, dispatch)
export default connect(null, mapDispatchToProps)(CicloPagamento)