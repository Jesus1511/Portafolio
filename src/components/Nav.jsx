import jlogo from '../assets/jlogopng.png'
import '../styles/nav.css'

export const Nav = () => {
  return (
    <nav>
      <img className='nav-logo' onClick={()=>location.reload()} src={jlogo} alt="" />
      <div className='nav-links'>
        <div className="green c">
          <a  href="#">Inicio</a>
        </div>
        <div className="blue c">
          <a  href="#">Proyectos</a>
        </div>
        <div className="red c">
          <a  href="#">Sobre mi</a>
        </div>
        <div className="yelow c">
          <a  href="#">Contactame</a>
        </div>
      </div>
    </nav>
  )
}
