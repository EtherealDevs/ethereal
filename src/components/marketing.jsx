import React, { Component } from 'react';

class Marketing extends Component {
    render() {
        return (
            <div id='marketing'>
                <section class="bg-transparent text-white">
  <div
    class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
  >
    <div class="mt-32 mx-auto max-w-lg text-center">
      <h2 class=" text-center font-bold font-align-center text-5xl">Servicios</h2>

      <p class="text-slate-200 font-bold mt-10 text-center content-center font-align-center text-sm px-8">
        Te mostramos un poco en lo que te podemos ayudar con tus proyectos
      </p>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <a
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/services/digital-campaigns"
      >

        <h2 class="mt-4 text-xl font-bold text-white">Ecommerce</h2>

        <p class="mt-1 text-sm text-gray-300">
        Te creamos un Ecommerce para que puedas administrar tus productos y las ventas comodamente sin tener que aplicar mucho esfuerzo.
        </p>
      </a>

      <a
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/services/digital-campaigns"
      >
        <h2 class="mt-4 text-xl font-bold text-white">Blogs</h2>

        <p class="mt-1 text-sm text-gray-300">
        Diseñamos y desarrollamos blogs para que puedas subir tus posts 
        </p>
      </a>

      <a
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/services/digital-campaigns"
      >
        <h2 class="mt-4 text-xl font-bold text-white">Landing Page</h2>

        <p class="mt-1 text-sm text-gray-300">
        Una pagina simple en la que detalla todo sobre tu proposito de manera simple y concisa  
        </p>
      </a>

      <a
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/services/digital-campaigns"
      >
        <h2 class="mt-4 text-xl font-bold text-white">Web a Medida</h2>

        <p class="mt-1 text-sm text-gray-300">
        Te creamos la herramienta que te acompañara y te ayudara a ordenar los procesos en tu negocio. Estudiamos tu negocio y te creamos una pagina a medida.
        </p>
      </a>

      <a
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/services/digital-campaigns"
      >

        <h2 class="mt-4 text-xl font-bold text-white">Estrategia de marketing</h2>

        <p class="mt-1 text-sm text-gray-300">
        Te asesoramos sobre Marketing Digital para poder potenciar tu negocio al maximo y asi poder aumentar tus ventas.              
        </p>
      </a>

      <a
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/services/digital-campaigns"
      >
        

        <h2 class="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

        <p class="mt-1 text-sm text-gray-300">
          Ejecutamos un conjunto de tecnicas y estrategias de marketing para alcanzar los objetivos que te planteas.
        </p>
      </a>
    </div>

    <div className="pt-10 animate-bounce-slow ">
            <a href="#footer" className='mt-20 text-white bg-gradient-to-r from-[#B5B9FF] to-[#2B2C49] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-20'>
              mas informacion
            </a>
          </div>
  </div>
</section>

            </div>
        );
    }
}

export default Marketing;
