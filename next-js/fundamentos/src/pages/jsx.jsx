export default function Jsx(){
    const titulo = <h1>JSX é um conceito central</h1>
    function subtitulo(){
        return <h2>{'testando fundamentos do jsx'.toUpperCase()}</h2>
    }
    return(
        <div>
            {titulo}
            {subtitulo()}
            <p>
                {JSON.stringify({nome: 'Gojo Satoru', classe: 'Especial'})}
            </p>
        </div>
    )
}