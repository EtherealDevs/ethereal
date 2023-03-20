import React, { Component } from 'react';

class Proyects extends Component {
    render() {
        return (
            <div id='proyects'>
                <section>
                <h2 className='text-white text-3xl ml-10 mt-20 font-bold sm:text-4x'>
            Proyectos                
            </h2>
  <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div class="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="mx-auto max-w-xl text-center">
          <h2 class="mt-32 text-2xl font-bold text-white md:text-3xl">
           Blog de Play Espacio Infantil
          </h2>

          <p class="hidden text-white/90 sm:mt-4 sm:block">
            Blog hecho a medida para un Jardin, en el cual se destacan todas las publicaciones hechas por un administrador, area de notificaciones para los tutores de los chicos, calendario de actividades.
          </p>

          <div class="mt-4 md:mt-8">
            <a
              href="https://github.com/EtherealDevs"
              class="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Ir al sitio
            </a>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
        <img
          alt="Student"
          src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
          class="h-40 w-full object-cover sm:h-56 md:h-full"
        />

        <img
          alt="Student"
          src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          class="h-40 w-full object-cover sm:h-56 md:h-full"
        />
      </div>
    </div>
  </div>
</section>

            </div>
        );
    }
}

export default Proyects;
