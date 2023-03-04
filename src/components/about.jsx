import React from 'react'
import { BiTrendingUp } from "react-icons/bi";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { IoBalloonSharp } from "react-icons/io5";

const about = () => {
  return (
    <section id='about' className=' py-28 text-white text-center'>
        <span className='mt-80 relative text-center font-bold font-align-center text-4xl'>
            ¿Quienes Somos?
        </span>
        <div className='mt-10 mx-32'>
            <span className='mt-10 text-3xl px-8'>
                Somos tu mejor aliado para mejorar tu marca y crearte una herramienta que te ayude a potenciarla
            </span>
        </div>
        <div className='grid grid-cols-4 grap-4 mt-20 px-6'>
            <div className='grid grid-rows-2'>
                <div className='text-center'>
                    <MdOutlineSettingsSuggest className='opacity-50 text-7xl text-primary ml-28'/>
                </div>
                <div className='mt-3'>
                    <p className='text-center text-xl'>
                    Creamos Software a medida, con interfaces fuera de este planeta
                    </p>
                </div>
            </div>
            <div className='grid grid-rows-2'>
                <div>
                    <BiTrendingUp className='opacity-50 text-7xl text-primary ml-28'/>
                </div>
                <div className='mt-3'>
                <p className='text-center text-xl'>
                Nos unimos para subir de nivel tu negocio
                </p>
                
                </div>
            </div>
            <div className='grid grid-rows-2'>
                <div>
                    <BsStars className='opacity-50 text-7xl text-primary ml-28'/>
                </div>
                <div className='mt-3'>
                    <p className='text-center text-xl'>
                    Perseguimos un resultado etéreo 
                    </p>
                    
                </div>
            </div>
            <div className='grid grid-rows-2'>
                <div>
                    <IoBalloonSharp className='opacity-50 text-7xl text-primary ml-28'/>
                </div>
                <div className='mt-3'>
                    <p className='text-center text-xl'>
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