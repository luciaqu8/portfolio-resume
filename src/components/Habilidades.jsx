import React from 'react'
import HTML from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import python from '../assets/python.png'
import mongodb from '../assets/mongodb.png'
import bootstrap from '../assets/bootstrap.png'
import tailwindcss from '../assets/tailwindcss.png'

const Habilidades = () => {
  return (
    <div name='habilidades' className='w-full h-screen bg-[#2F2333] text-gray-300'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#634481]'>Experiencia</p>
                <p className='py-4'> // Estas son algunas de las tecnologías con las que he trabajado //</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>

                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={css} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>

                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={js} alt="js icon" />
                    <p className='my-4'>Javascript</p>
                </div>

                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={python} alt="python icon" />
                    <p className='my-4'>Python</p>
                </div>

                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt="react.js icon" />
                    <p className='my-4'>React.js</p>
                </div>

                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={mongodb} alt="mongodb icon" />
                    <p className='my-4'>MongoDB</p>
                </div>

                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={bootstrap} alt="bootstrap icon" />
                    <p className='my-4'>Bootstrap</p>
                </div>

                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={tailwindcss} alt="tailwindcss icon" />
                    <p className='my-4'>Tailwind CSS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Habilidades