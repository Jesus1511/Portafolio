import '../../styles/hero.css'
import bro from '../../assets/line.png'

export const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-text">
            <h1>¡Hola soy Jesús!👋</h1>
            <h2>¿Buscas un desarrollador de aplicaciones web o mobile?</h2>
            <p>Desde 2023, resolviendo problemas y dando vida a ideas a través del código.</p>
            <div className='hero-buttonsContainer'>
              <div className="hero-buttons">
                <button className='hero-contactame'>Github </button>
                <button className='hero-contactame'>Instagram </button>
              </div>
            </div>
        </div>
        <div className='hero-assets'>
          <img className="hero-img" src={bro} alt="hero-img" />
          <div className='hero-blur'></div>
        </div>
    </section>
  )
}
