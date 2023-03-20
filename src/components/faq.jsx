import React, { Component } from 'react';
import { Accordion } from 'flowbite-react';
import { HiOutlineArrowCircleDown } from "react-icons/hi";

class Faq extends Component {
    render() {
        return (



<div class="space-y-4">
  <details class="group [&_summary::-webkit-details-marker]:hidden" open>
    <summary
      class="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-transparent"
    >
      <h2 class="font-medium text-white">
      Cual es su proposito?
      </h2>

      <svg
        class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </summary>

    <p class="px-4 mt-4 leading-relaxed text-white">
    Nuestro proposito es ayudar a crear un mejor camino para potenciar un negocio o proyecto, y brindarte las herramientas que necesitas para subir al maximo nivel posible.
    </p>
  </details>

  <details class="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      class="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-transparent"
    >
      <h2 class="font-medium text-white">
      Los sitios web se mantienen?
      </h2>

      <svg
        class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </summary>

    <p class="px-4 mt-4 leading-relaxed text-white">
    Si, cualquier cambio que se necesite hacer una vez lanzado el proyecto es posible, solamente nos contactas y nosotros lo solucionamos.
    </p>
  </details>

  <details class="group [&_summary::-webkit-details-marker]:hidden" open>
    <summary
      class="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-transparent"
    >
      <h2 class="font-medium text-white">
      No se me ocurre un diseño para mi sitio
      </h2>

      <svg
        class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </summary>

    <p class="px-4 mt-4 leading-relaxed text-white">
    No es necesario, tenemos en nuestro equipo un diseñador que nos facilita los diseños, simplemente nos contas el estilo de tu proyecto y nosotros lo maquetamos
    </p>
  </details>

  <details class="group [&_summary::-webkit-details-marker]:hidden" open>
    <summary
      class="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-transparent"
    >
      <h2 class="font-medium text-white">
      Tengo soporte del Producto que compro?
      </h2>

      <svg
        class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </summary>

    <p class="px-4 mt-4 leading-relaxed text-white">
    Nosotros te brindamos el soporte que necesitas para poder usar el producto y aprovecharlo al maximo.
    </p>
  </details>
</div>
        );
    }
}

export default Faq;
