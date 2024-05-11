import jlogo from '../assets/jlogopng.png'
import '../styles/nav.css'
import { useNavigate } from 'react-router-dom';

export const Nav = () => {

  const navigate = useNavigate()

  function scrollToSection(seccion) {
    if (window.location.pathname !== "/") {
      navigate('/')
    } 
    const section = document.getElementById(seccion);
    section.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav>
      <img className='nav-logo' onClick={()=>location.reload()} src={jlogo} alt="" />
      <div className='nav-links'>
        <div onClick={()=>scrollToSection("inicio")} className="green c">
          <div >Inicio</div>
        </div>
        <div onClick={()=>scrollToSection("sobreMi")} className="blue c">
          <div >Sobre mi</div>
        </div>
        <div onClick={()=>scrollToSection("proyectos")} className="red c">
          <div >Proyectos</div>
        </div>
        <div onClick={()=>scrollToSection("contactame")} className="yelow c">
          <div >Contactame</div>
        </div>
      </div>
    </nav>
  )
}
