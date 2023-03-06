import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente('Gojo Satoru', 28, '1'),
    new Cliente('Son Goku', 40, '2'),
    new Cliente('Yami Sukehiro', 29, '1'),
    new Cliente('Zaraki Kenpachi', 421, '1'),
  ]
  return(
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  )
}
