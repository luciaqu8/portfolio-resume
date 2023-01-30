import React, { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/lq.png'
import {Link} from 'react-scroll'

const NavBar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2F2333] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo LQ" style={{width: '80px'}}/>
        </div>

        { /* menu */ }
            <ul className='hidden md:flex'>
                <li>
                    <Link to="inicio" spy={true} smooth={true} duration={500}>
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to="sobremi" spy={true} smooth={true} duration={500}>
                        Sobre mi
                    </Link>
                </li>
                <li>
                    <Link to="habilidades" spy={true} smooth={true} duration={500}>
                        Habilidades
                    </Link>
                </li>
                <li>
                    <Link to="Work" spy={true} smooth={true} duration={500}>
                        Trabajo
                    </Link>
                </li>
                <li>
                    <Link to="contacto" spy={true} smooth={true} duration={500}>
                        Contacto
                    </Link>
                </li>
            </ul>

        {/*Icon menu */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#2F2333] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl '>
                <Link onClick={handleClick} to="inicio" spy={true} smooth={true} duration={500}>
                    Inicio
                </Link>
            </li>
            <li className='py-6 text-4xl '>
                <Link onClick={handleClick} to="sobremi" spy={true} smooth={true} duration={500}>
                    Sobre mi
                </Link>
            </li>
            <li className='py-6 text-4xl '>
                <Link onClick={handleClick} to="habilidades" spy={true} smooth={true} duration={500}>
                    Habilidades
                </Link>
            </li>
            <li className='py-6 text-4xl '>
                <Link onClick={handleClick} to="Work" spy={true} smooth={true} duration={500}>
                    Trabajo
                </Link>
            </li>
            <li className='py-6 text-4xl '>
                <Link onClick={handleClick} to="contacto" spy={true} smooth={true} duration={500}>
                     Contacto
                </Link>
            </li>
        </ul>

        {/*Redes*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#634481] rounded-xl mb-3'>
                    <a 
                    href="https://www.linkedin.com/in/lucia-quinteiro-699948247/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex justify-between items-center w-full text-gray-300'>
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#634481] rounded-xl mb-3'>
                    <a 
                    href="https://github.com/luciaqu8?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className='flex justify-between items-center w-full text-gray-300'>
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#634481] rounded-xl mb-3'>
                    <a 
                    href="mailto:luciaquinteiro8396@gmail.com" 
                    className='flex justify-between items-center w-full text-gray-300'>
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#634481] rounded-xl mb-3'>
                    <a 
                    href="https://drive.google.com/file/d/12fc9kFSHheZl3kLGqTIuj3qsJM3eMJYt/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className='flex justify-between items-center w-full text-gray-300'>
                        Curriculum <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar