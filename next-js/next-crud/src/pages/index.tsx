import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import { useState } from "react";

export default function Home() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'formulario'>('tabela')

  const clientes = [
    new Cliente('Son Goku', 40, '1'),
    new Cliente('Jiraiya', 50, '2'),
    new Cliente('Gojo Satoru', 28, '3'),
    new Cliente('Yami Sukehiro', 29, '4'),
  ]

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    setVisivel('formulario')
  }

  function clienteExcluido(cliente: Cliente){
    console.log(`Excluir ${cliente.nome}`)
  }

  function salvarCliente(cliente: Cliente){
    console.log(cliente)
    setVisivel('tabela')
  }

  function novoCliente(cliente: Cliente){
    setCliente(Cliente.vazio())
    setVisivel('formulario')
  }

  return(
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" onClick={novoCliente}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}/>
          </>
        ) : (
          <Formulario cliente={cliente} clienteMudou={salvarCliente} cancelado={() => setVisivel('tabela')} />
        )}
      </Layout>
    </div>
  )
}
