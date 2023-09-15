import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative z-20 h-screen overflow-hidden bg-slate-200">
      <div className="relative z-20 flex items-center overflow-hidden bg-slate-200">
        <div className="container relative flex px-6 py-16 mx-auto">
          <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-1/2 lg:pl-10 ">
            <h1 className="flex flex-col text-2xl font-black leading-none text-bl font-adm md:text-5xl text-gray-950 animate-bounce">
              Library Construction Experts
            </h1>
            <p className="text-sm text-gray-700 sm:text-base font-adm pt-8">
              Física ou digital, pessoal ou institucional, com acervo completo,
              parcial ou para montar do zero... Se é de uma biblioteca que você
              precisa, acabou de chegar ao lugar certo.
            </p>
            <div className="flex mt-8">
              <a
                href="#"
                className="px-2 sm:px-4 py-1 sm:py-2 mr-4 text-pink-700  bg-transparent border-2 border-pink-700 rounded-lg text-xs sm:text-lg hover:bg-pink-700 hover:text-white"
              >
                Saber mais
              </a>
              <a
                href="#"
                className="px-2 sm:px-4 py-1 sm:py-2 text-blue-900  bg-transparent border-2 border-blue-900 rounded-lg hover:bg-blue-900 hover:text-white text-xs sm:text-lg"
              >
                Solicitar orçamento
              </a>
            </div>
          </div>
          <div className="relative hidden sm:block sm:w-1/3 lg:w-1/2">
            <Image
              src="https://github.com/AirelRibeiro/ada_1011_poo/assets/98190806/39fe0ee5-6123-46dc-baa5-e278122921e8"
              className="max-w-xs m-auto md:max-w-xl"
              width={40} // Define a largura em percentual
              layout="responsive"
              height={100}
              alt={''}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
