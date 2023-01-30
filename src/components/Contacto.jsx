import React from 'react'

const Contacto = () => {
  return (
    <div name="contacto" className='w-full h-screen bg-[#2F2333] flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/a66882a1-8165-4593-aeea-bf8b321eff03" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#634481] text-gray-300'>Contacto</p>
                <p className='text-gray-300 py-4'>// Envía el formulario para contactarte conmigo</p>
            </div>
            <input className='bg-gray-300 p-2' type="text" placeholder='Nombre' name='nombre' />
            <input className='my-4 p-2 bg-gray-300' type="email" placeholder='Email' name='email' />
            <textarea className='bg-gray-300 p-2' name="mensaje" rows="10" placeholder='Escriba aquí su mensaje'></textarea>
            <button className='text-white border-2 hover:bg-[#634481] hover:border-[#634481] px-4 py-3 my-8 mx-auto flex items-center'>Enviar</button>
        </form>
    </div>
  )
}

export default Contacto