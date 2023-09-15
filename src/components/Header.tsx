'use client';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Quem Somos', href: '/quem-somos' },
    { name: 'Nossos Serviços', href: '/' },
    { name: 'Contato', href: '/' },
  ];
  return (
    <div className="relative">
      <header className="z-30 flex items-center w-full h-24 sm:h-32 bg-slate-950">
        <div className="container flex items-center justify-between px-6 mx-auto">
          <div className="w-1/3 sm:w-fit">
            <Image
              className="py-6"
              src="https://github.com/AirelRibeiro/ada_1011_poo/assets/98190806/7cf0333c-b5b3-46d4-b5e5-4e3b2b2b5bc5"
              width={20} // Define a largura em percentual
              layout="responsive"
              height={10}
              alt={''}
            />
          </div>
          <div className="flex items-center">
            <nav
              className={`lg:flex ${isMenuOpen ? 'hidden' : 'block'} lg:block`}
            >
              <nav className="items-center hidden text-lg text-slate-100 font-adm lg:flex">
                {navigation.map((item, i) => (
                  <a href={item.href} key={i} className="flex px-6 py-2">
                    {item.name}
                  </a>
                ))}
              </nav>
            </nav>
            <button
              className="flex flex-col ml-4 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="w-6 h-1 mb-1 bg-gray-600 "></span>
              <span className="w-6 h-1 mb-1 bg-gray-600 "></span>
              <span className="w-6 h-1 mb-1 bg-gray-600 "></span>
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 z-40 w-full h-fit shadow-lg bg-slate-950">
          <nav className="p-4 space-y-2 text-gray-800 dark:text-white">
            {navigation.map((item, i) => (
              <a
                href={item.href}
                key={i}
                className="block py-2 px-4 rounded-md border border-slate-700 text-slate-200 text-xl text-center hover:bg-slate-500 font-adm lg:hidden"
              >
                {item.name}
              </a>
            ))}
            <button
              className="block py-2 px-4 rounded-md border border-slate-700 text-slate-200 text-xl text-center hover:bg-slate-500 font-adm lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              Fechar
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
