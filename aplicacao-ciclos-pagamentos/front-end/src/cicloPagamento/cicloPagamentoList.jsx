import React, {Component} from "react"

class CicloPagamentoList extends Component{
    render(){
        return(
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        )
    }
}

export default CicloPagamentoList