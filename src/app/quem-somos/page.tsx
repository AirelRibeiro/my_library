import Image from 'next/image';
import React from 'react';

export default function AboutUs() {
  return (
    <main className="relative h-screen bg-slate-200">
      <div className=" bg-slate-200">
        <div className="max-w-5xl pt-32 pb-24 mx-auto">
          <h1 className="flex flex-col text-2xl font-black leading-none text-bl font-adm md:text-5xl dark:text-white animate-bounce text-center">
            Somos a Library Construction Experts
          </h1>
          <br />
          <h2 className="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center">
            uma iniciativa formada por quatro bibliotecáries apaixonades, que
            compartilham a visão de que, no mundo atual, as bibliotecas
            desempenham um papel crucial.
          </h2>
          <div className="ml-6 text-center">
            <a
              href="#"
              className="px-2 sm:px-5 py-1 sm:py-3 mr-4 text-pink-700  bg-transparent border-2 border-pink-700 rounded-lg text-xs sm:text-xl hover:bg-pink-700 hover:text-white"
            >
              Saber mais
            </a>
            <a
              href="#"
              className="px-2 sm:px-5 py-1 sm:py-3 text-blue-900  bg-transparent border-2 border-blue-900 rounded-lg dark:text-white hover:bg-blue-900 hover:text-white text-xs sm:text-xl"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200">
        <div className="max-w-5xl pt-32 pb-24 mx-auto flex justify-evenly items-center">
          <h2 className="text-2xl font-4 font-semibold sm:w-2/3 lh-6 ld-04 pb-11 text-slate-950 text-center">
            Acreditamos firmemente que, para cada leitor, há um livro especial
            aguardando sua descoberta. As bibliotecas são mais do que meros
            depósitos de livros; elas são portais para possibilidades e
            oportunidades infinitas, tanto no mundo físico quanto no virtual.
          </h2>
          <div className="relative hidden sm:block sm:w-1/3 lg:w-1/2">
            <Image
              src="https://github.com/AirelRibeiro/AirelRibeiro/assets/98190806/fe71459a-42e4-4455-80b1-9d59c9180cd3"
              className="max-w-xs m-auto md:max-w-xl"
              width={40} // Define a largura em percentual
              layout="responsive"
              height={100}
              alt={''}
            />
          </div>
        </div>
      </div>

      <div className="bg-slate-200">
        <div className="max-w-5xl pt-32 pb-24 mx-auto flex justify-evenly items-center">
          <div className="relative hidden sm:block sm:w-1/3 lg:w-1/2">
            <Image
              src="https://github.com/AirelRibeiro/AirelRibeiro/assets/98190806/3125993f-4605-4d81-95d2-c17e106da151"
              className="max-w-xs m-auto md:max-w-xl"
              width={40} // Define a largura em percentual
              layout="responsive"
              height={100}
              alt={''}
            />
          </div>
          <h2 className="text-2xl font-4 font-semibold sm:w-2/3 lh-6 ld-04 pb-11 text-slate-950 text-center">
            No cenário em constante evolução de hoje, as bibliotecas desempenham
            um papel vital na promoção do acesso à informação, no apoio à
            educação e no enriquecimento cultural. Elas servem como faróis de
            conhecimento, oferecendo não apenas livros, mas também recursos
            digitais, espaços de estudo e programas de aprendizado interativos.
          </h2>
        </div>
      </div>

      <div className="bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200">
        <div className="max-w-5xl pt-32 pb-24 mx-auto flex justify-evenly items-center">
          <h2 className="text-2xl font-4 font-semibold sm:w-7/12 lh-6 ld-04 pb-11 text-slate-950 text-center">
            Acreditamos que cada biblioteca é uma fonte de inspiração, um espaço
            onde sonhos são alimentados e horizontes são ampliados. Estamos
            comprometidos em ajudar indivíduos, instituições educacionais e
            comunidades a construir bibliotecas que sejam verdadeiramente
            relevantes e transformadoras.
          </h2>
          <div className="relative hidden sm:block sm:w-5/12 lg:w-1/2">
            <Image
              src="https://github.com/AirelRibeiro/AirelRibeiro/assets/98190806/9524aaae-a211-47aa-b172-40f8e5ccd7e6"
              className="max-w-xs m-auto md:max-w-xl"
              width={50}
              layout="responsive"
              height={100}
              alt={''}
            />
          </div>
        </div>
      </div>

      <div className="bg-slate-200">
        <div className="max-w-5xl pt-32 pb-24 mx-auto flex justify-evenly items-center">
          <div className="relative hidden sm:block sm:w-1/3 lg:w-1/2">
            <Image
              src="https://github.com/AirelRibeiro/AirelRibeiro/assets/98190806/ee2e44e5-e485-4310-baaa-05736a954db0"
              className="max-w-xs m-auto md:max-w-xl"
              width={40} // Define a largura em percentual
              layout="responsive"
              height={100}
              alt={''}
            />
          </div>
          <h2 className="text-2xl font-4 font-semibold sm:w-2/3 lh-6 ld-04 pb-11 text-slate-950 text-center">
            Junte-se a nós nesta jornada em direção a um mundo onde a sabedoria
            e o conhecimento são acessíveis a todos. Na Library Construction
            Experts, estamos dedicados a construir bibliotecas que não apenas
            abrigam livros, mas também abrem portas para um futuro mais
            brilhante. Venha fazer parte dessa transformação.
          </h2>
        </div>
      </div>
    </main>
  );
}
