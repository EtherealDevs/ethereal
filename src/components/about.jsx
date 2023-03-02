import React from 'react'
import { BiTrendingUp } from "react-icons/bi";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { BsStars } from "react-icons/bs";

const about = () => {
  return (
    <div className='py-28 text-white text-center'>
        <span className='relative text-center font-bold font-align-center text-4xl'>
            ¿Quienes Somos?
        </span>
        <div className='mx-32'>
            <span className='text-3xl px-8'>
                Somos tu mejor aliado para mejorar tu marca y crearte una herramienta que te ayude a potenciarla
            </span>
        </div>
        <div className='grid grid-cols-4 grap-4 mt-20 px-4'>
            <div className='grid grid-rows-2'>
                <div className='text-center'>
                    <MdOutlineSettingsSuggest className='text-8xl text-primary ml-28'/>
                </div>
                <div>

                </div>
            </div>
            <div className='grid grid-rows-2'>
                <div>
                    <BiTrendingUp className='text-8xl text-primary ml-28'/>
                </div>
                <div>

                </div>
            </div>
            <div className='grid grid-rows-2'>
                <div>
                    <BsStars className='text-8xl text-primary ml-28'/>
                </div>
                <div>

                </div>
            </div>
            <div className='grid grid-rows-2'>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default about