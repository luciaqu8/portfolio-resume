import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Inicio = () => {
  return (
    <div name='inicio' className='w-full h-screen bg-[#2F2333]'>
        {/*Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-gray-500'>Hola! mi nombre es</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-gray-300'>Lucía</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-gray-300'>Soy Front end developer</h2>
            <p className='text-gray-500 py-4 max-w-[700px]'>Me dedico al diseño y armado de páginas web y diferentes interfaces, tengo experiencia con bases de datos (relacionales y no relacionales), y también en el ambiente artístico como diseñadora gráfica, fotógrafa y Community Manager.
            </p>
            <div>
                <button
                    className='text-gray-300 group border-2 px-6 py-3 my-2 rounded-lg flex items-center hover:bg-[#634481] hover:border-[#634481]'
                >
                    Echa un vistazo 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>   
                </button>
            </div>
        </div>
    </div>
  )
}

export default Inicio