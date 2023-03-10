import Navegador from "@/components/Navegador"

export default function Inicio(){
    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador destino="/estiloso" texto="Estiloso" />
            <Navegador destino="/exemplo" texto="Exemplo" cor="#9400D3" />
            <Navegador destino="/jsx" texto="JSX" cor="crimson" />
            <Navegador destino="/navegacao" texto="Navegação #01" cor="green" />
            <Navegador destino="/cliente/RJ/123" texto="Navegação #02" cor="blue" />
            <Navegador destino="/estado" texto="Componente com Estadao" cor="#A45B71" />
            <Navegador destino="/integracao_1" texto="Integração com API #01" cor="#42A9A9" />
            <Navegador destino="/estatico" texto="Conteúdo Estático" cor="#FA054A" />
        </div>
    )
}