import "./Contador.css"
import React from "react"

class Contador extends React.Component{
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         numero: props.numeroInicial
    //     }
    // }

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial  || 5
    }

    //resolvendo o problema do setState não apontar para o obj atual
    inc = () =>{
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () =>{
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (e) =>{
        this.setState({
            passo: +e.target.value
        })
    }

    // constructor(props){
    //     super(props)

    //     this.inc = this.inc.bind(this)
    // }

    render(){
        return(
            <div className="Contador">
                <h2>Contador</h2>
                <h3>Valor Atual: {this.state.numero}</h3>
                <div>
                    <label htmlFor="">Passo: </label>
                    <input type="number" id="passoInput" value={this.state.passo} onChange={this.setPasso}/>
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
                {/* <button onClick={_ => this.inc()}>+</button> */}
            </div>
        )
    }
}

export default Contador