import React, { Component } from 'react';

class About2 extends Component {
    render() {
        return (
           <div>
            <div class="mt-8 grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4">
      
      <a
        class="ml-10 block h-full w-3/4 rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/"
      >
      <img className='rounded-full w-4/5' src="/mateo.jpg"/>
        <h2 class="mt-4 text-xl font-bold text-white">Mateo Dans</h2>
      </a>

      <a
        class="block h-full w-3/4 rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/"
      >
        <img className='rounded-full w-4/5' src="/rodri.jpeg"/>
        <h2 class="mt-4 text-xl font-bold text-white">Rodrigo Zanabria</h2>
      </a>

      <a
        class="block h-full w-4/5 rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/"
      >
        <img className='rounded-full w-4/5' src="/rodri.jpeg"/>
        <h2 class="mt-4 text-xl font-bold text-white">Kevin Reyes</h2>
      </a>

      <a
        class="block h-full w-3/4 rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/s"
      >
        <img className='rounded-full w-4/5' src="/joaco.jpeg"/>
        <h2 class="mt-4 text-xl font-bold text-white">Joaquin Franco</h2>
      </a>
    </div>

           </div>
        );
    }
}

export default About2;
