import React from 'react'


export  const home = () => {
  return (
    <section id='home' className=' text-center pt-40 pb-10'>
          <span className='ml-auto mr-auto relative text-center font-bold typin font-align-center font-dev italic text-6xl text-white'>ED</span>
          
            
            <p className=' text-center text-white text-3xl px-72'>
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
            
            <a href="#about" className=' text-white bg-gradient-to-r from-[#B5B9FF] to-[#2B2C49] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 '>
              mas informacion
            </a>
          </div>
    </section>
  )
}
export default home