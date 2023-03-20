import React, { Component } from 'react'

const footer= () => {
  
return (
    
        <footer class="p-4 bg-black bg-transparent z-10 shadow md:px-6 md:py-8 ">
        <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
        <img src="./eth.png" class="h-40 mr-3" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">Twitter</a>
            </li>
            <li>
                <a href="https://github.com/EtherealDevs" class="mr-4 hover:underline md:mr-6">Github</a>
            </li>
            <li>
                <a href="https://www.instagram.com/ethereal.devs/" class="mr-4 hover:underline md:mr-6 ">Instagram</a>
            </li>
            <li>
                <a href="https://wa.me/3794798404" class="hover:underline">Whatsapp</a>
            </li>
        </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"><a href="https://flowbite.com/" class="hover:underline">Ethereal Devs™</a>. All Rights Reserved.
        </span>
        </footer>
    

      
)
}
export default footer

