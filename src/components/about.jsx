import React from 'react'
import { BiTrendingUp } from "react-icons/bi";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { IoBalloonSharp } from "react-icons/io5";

const about = () => {
  return (
    <section id='about' className='font-extrabold text-white text-center'>
        <span className='relative text-center font-bold font-align-center text-5xl'>
            Nosotros
        </span>
        <div className='mt-10 mx-32'>
            <span className='text-slate-200 mt-10 text-center content-center font-align-center text-sm px-8'>
                Somos el mejor aliado para mejorar tu marca y crearte una herramienta que te ayude a potenciarla
            </span>
        </div>
        <div className='font-light grid grid-cols-4 grap-4 mt-24 px-6'>
            <div className='grid grid-rows-2'>
                <div className='text-center'>
                    <MdOutlineSettingsSuggest className='opacity-50 text-5xl text-primary ml-36'/>
                </div>
                <div className=''>
                    <p className='ml-10 mr-10 text-center text-sm'>
                    Creamos Software a medida, con interfaces fuera de este planeta
                    </p>
                </div>
            </div>
            <div className='grid grid-rows-2'>
                <div>
                    <BiTrendingUp className='opacity-50 text-5xl text-primary ml-36'/>
                </div>
                <div className=''>
                <p className='ml-10 mr-10 text-center text-sm'>
                Nos unimos para subir de nivel tu negocio
                </p>
                
                </div>
            </div>
            <div className='grid grid-rows-2'>
                <div>
                    <BsStars className='opacity-50 text-5xl text-primary ml-36'/>
                </div>
                <div className=''>
                    <p className='ml-10 mr-10 text-center text-sm'>
                        Nos enfocamos estrategicamente a brindarte una solucion de buena calidad para cumplir con el objetivo.
                    </p>
                    
                </div>
            </div>
            <div className='grid grid-rows-2'>
                <div>
                    <IoBalloonSharp className='opacity-50 text-5xl text-primary ml-36'/>
                </div>
                <div className=''>
                    <p className='ml-10 mr-10  text-sm'>
                    Creamos software que te permite hacer tus actividades con gran presteza
                    </p>
                </div>
            </div>
        </div>
        <anime></anime>
    </section>
  )
  
}


export default about