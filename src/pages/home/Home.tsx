import ListaCategorias from "../../components/categoria/listacategorias/ListaCategorias"

function Home() {
  return (
    <>
      <div className="bg-indigo-900 flex justify-center">
        <div className="container grid grid-cols-2 text-white">

          <div className="flex flex-col gap-4 items-center justify-center py4">
            
            <h2 className="text-5xl font-bold">
              Bem-vindo ao Projeto Farmácia!
            </h2>

            <p className="text-xl">
              Saúde e Bem-Estar para todos!
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://i.imgur.com/mc2jx87.png"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>

        </div>
      </div>
      <ListaCategorias />
    </>
  )
}

export default Home
