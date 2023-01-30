import React from 'react'
import WorkImg from '../assets/trabajo1.png'
import WorkImg2 from '../assets/trabajo2.png'
import WorkImg3 from '../assets/trabajo3.PNG'
import WorkImg4 from '../assets/trabajo4.PNG'

const Work = () => {
  return (
    <div name='Work' className='w-full md:h-screen text-gray-300 bg-[#2F2333]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#634481]'>Work</p>
                <p className='py-6'>// Echa un vistazo a algunos de mis trabajos </p>
            </div>

            {/* Container */}
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>

                {/* Grid item */}
                <div 
                style={{backgroundImage: `url(${WorkImg})`}} 
                className='shadow-lg shadow-color-[#261C29] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover */}
                    <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS app 
                            </span>

                            <div className='pt-8 text-center'>
                                <a href="https://kaleidoscopic-speculoos-3e887b.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>

                                <a href="https://github.com/luciaqu8/cripto_react"
                                    target="_blank"
                                    rel="noopener noreferrer" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button>
                                </a>
                            </div>
                    </div>
                </div>

                {/* Grid item 2*/}
                <div 
                style={{backgroundImage: `url(${WorkImg2})`}} 
                className='shadow-lg shadow-color-[#261C29] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover */}
                    <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS app 
                            </span>

                            <div className='pt-8 text-center'>
                                <a href="https://inquisitive-semolina-af335d.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>

                                <a href="https://github.com/luciaqu8/cotizador-seguros"
                                    target="_blank"
                                    rel="noopener noreferrer" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button>
                                </a>
                            </div>
                    </div>
                </div>

                {/* Grid item 3*/}
                <div 
                style={{backgroundImage: `url(${WorkImg3})`}} 
                className='shadow-lg shadow-color-[#261C29] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover */}
                    <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS app 
                            </span>

                            <div className='pt-8 text-center'>
                                <a href="https://extraordinary-kelpie-07a93c.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>

                                <a href="https://github.com/luciaqu8/gastos_react"
                                    target="_blank"
                                    rel="noopener noreferrer" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button>
                                </a>
                            </div>
                    </div>
                </div>

                {/* Grid item 4*/}
            <div 
                style={{backgroundImage: `url(${WorkImg4})`}} 
                className='shadow-lg shadow-color-[#261C29] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover */}
                    <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS app 
                            </span>

                            <div className='pt-8 text-center'>
                                <a href="https://friendly-sable-8a3742.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>

                                <a href="https://github.com/luciaqu8/citas_react"
                                    target="_blank"
                                    rel="noopener noreferrer" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button>
                                </a>
                            </div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Work