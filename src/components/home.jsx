import React from 'react'


export  const home = () => {
  return (
    <section id='home' className='text-center mt-20 pb-10'>
          <span className='ml-auto mr-auto relative text-center font-bold typin font-align-center font-dev italic text-6xl text-white'>Ethereal Devs</span>
          <img src="./eth.png" class="h-80 ml-auto mr-auto" alt="Flowbite Logo" />
          
            
            <p className='mt-10 text-center text-white text-3xl px-72'>
                <span className='font-bold text-4xl'>
                Bienvenido, somos Ethereal Devs
                </span> 
                <br />
                la forma mas efectiva de potenciar tu
                <br />
                <p className='italic'>
                 negocio
                 </p>
            </p>
          <div className="pt-12 animate-bounce-slow ">
            
            <a href="#about" className='mt-20 text-white bg-gradient-to-r from-[#B5B9FF] to-[#2B2C49] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-20'>
              mas informacion
            </a>
          </div>
          <div className='mt-20'>
            <p className='mt-20 text-center text-slate-300 font-bold italic text-xm px-72'>
              Planta, germina y colecta. Construyendo hoy a medida del mañana.
            </p>
          </div>
    </section>
    
  )
}
export default home