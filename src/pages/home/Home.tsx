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
              src="https://plus.unsplash.com/premium_photo-1661766456250-bbde7dd079de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFybWFjaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&"
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
