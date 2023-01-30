import React from 'react'

const SobreMi = () => {
  return (
    <div name='sobremi' className='w-full h-screen bg-[#2F2333] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#634481]'>Sobre mi</p>
                </div>
            </div>

            <div>{/*vacio*/}</div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Mi nombre es Lucía y vivo en Buenos Aires, Argentina.</p>
                </div>
                <div>
                    <p>Actualmente me especializo en el armado y diseño de páginas web, aplicaciones e interfaces. Me gusta poner en práctica mis conocimientos para seguir creciendo profesionalmente, por lo que estoy estudiando una ruta Full Stack. Estoy enfocada en la implementación y la evolución constante de las nuevas tecnologías y en poder resolver problemas aportando soluciones creativas y eficientes. Tengo experiencia con bases de datos relacionales y no relacionales, y también trabaje en puestos más artísticos como diseño gráfico, fotografía y manejo de redes sociales.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SobreMi