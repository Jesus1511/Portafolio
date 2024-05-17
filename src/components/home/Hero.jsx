import '../../styles/hero.css'
import bro from '../../assets/line.png'
import git from '../../assets/github-logo-24.svg'
import ig from '../../assets/instagram-logo-24.svg'

export const Hero = () => {

  return (
    <div className='flex justify-center' id='inicio'>
    <section className="hero">
        <div className="hero-text">
            <h1 className='cursor-default'>¡Hola soy <span className='hover:text-[#97e9e0] transition '>Jesús!</span>👋</h1>
            <h2 className='cursor-default'>¿Buscas un desarrollador de aplicaciones web o mobile?</h2>
            <p className='cursor-default'>Desde 2023, resolviendo problemas y dando vida a ideas a través del código.</p>
            <div className='hero-buttonsContainer'>
              <div className="hero-buttons">
                <a className='no-underline' href="https://github.com/Jesus1511" target="_blank" rel="noopener noreferrer">
                  <div className='flex cursor-pointer justify-between bg-[#28af9f] transition btnhover rounded-[15px] py-[10px] px-[15px]'>
                    <img className='mr-[5px]' src={git} alt="" />
                    <div className='cursor-pointer text-[20px]'>Github</div>
                  </div>
                </a>
                <a className='no-underline' href="https://www.instagram.com/el__jisu" target="_blank" rel="noopener noreferrer">
                  <div className='flex cursor-pointer justify-between bg-[#28af9f] transition btnhover rounded-[15px] py-[10px] px-[15px]'>
                    <img className='mr-[5px]' src={ig} alt="" />
                    <div className=' cursor-pointer text-[20px]'>Instagram</div>
                  </div>
                </a>
              </div>
            </div>
        </div>
        <div className='hero-assets'>
          <img className="hero-img" src={bro} alt="hero-img" />
          <div className='hero-blur'></div>
        </div>
    </section>
    </div>
  )
}
