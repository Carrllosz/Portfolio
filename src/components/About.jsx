import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Sobre mim
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Olá. Eu sou o JC, prazer em te conhecer.</p>
            </div>
            <div>
              <p>Eu atualmente sou um estudante de Ciência da Computação na Universidade Federal de Alagoas. Sou um Desenvolvedor Web Full Stack autodidata, atualmente mergulhando mais afundo em arquitetura e design de software. Acredito que para ter sucesso na vida, é preciso ser persistente com seus sonhos e continuar trabalhando em direção a eles.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;