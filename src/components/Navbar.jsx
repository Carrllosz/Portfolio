import React, {useState} from 'react';
import {FaBars,FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import jc from '../assets/j.png'
import {Link} from 'react-scroll';
import MyPDF from '../assets/resume.pdf';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={jc} alt='Logo Image' style={{ width: '50px' }} />
      </div>

      {/* menu*/}
        <ul className='hidden md:flex'>
          <li>
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
          <Link to='about' smooth={true} duration={500}>
              Sobre mim
            </Link>
          </li>
          <li>
          <Link to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
          <Link to='work' smooth={true} duration={500}>
              Trabalhos
            </Link>
          </li>
          <li>
          <Link to='contact' smooth={true} duration={500}>
              Contato
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' }>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
          </li>
          <li className='py-6 text-4xl'>
            {''}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            Sobre mim
          </Link>
          </li>
          <li className='py-6 text-4xl'>
            {''}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
          </li>
          <li className='py-6 text-4xl'>
            {''}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Trabalhos
          </Link>
          </li>
          <li className='py-6 text-4xl'>
            {''}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contato
          </Link>
          </li>
        </ul>

        {/* Social icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
              <a className='flex justify-between items-center w-full text-gray-300' 
               href='https://www.linkedin.com/in/carrllosz'>
                Linkedin <FaLinkedin size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-gray-300' 
               href='https://github.com/Carrllosz'>
                Github <FaGithub size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
              <a className='flex justify-between items-center w-full text-gray-300' 
               href='/'>
                Email <HiOutlineMail size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
              <a className='flex justify-between items-center w-full text-gray-300'
                href={MyPDF} download='resumo.pdf'>
                Resume <BsFillPersonLinesFill size={30}/>
              </a>
            </li>
          </ul>
        </div>


    </div>
 
  );
};

export default Navbar;
