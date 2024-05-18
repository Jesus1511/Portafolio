import aboutImg from '../../assets/aboutImg.jpg'
import html from '../../assets/techs/HTML5_logo_and_wordmark.svg.png'
import css from '../../assets/techs/CSS3_logo.svg.png'
import js from '../../assets/techs/JavaScript-logo.png'
import react from '../../assets/techs/React-icon.svg.png'
import rnative from '../../assets/techs/reactNative.png'
import taild from '../../assets/techs/tailwind-css-logo-5AD4175897-seeklogo.com.png'
import figma from '../../assets/techs/figma.png'
import gimp from '../../assets/techs/gimp.png'
import nodejs from '../../assets/techs/nodejs.webp'
import express from '../../assets/techs/expressjs_logo_icon_169185.png'
import mongo from '../../assets/techs/MongoDB-Emblem.png'
import sql from '../../assets/techs/sql.png'
import django from '../../assets/techs/django-icon-1606x2048-lwmw1z73.png'
import python from '../../assets/techs/Python-logo-notext.svg.png'
import firebase from '../../assets/techs/firebase.png'
import '../../styles/about.css'

export const About = () => {
  return (
    <section className="bg-[#1c253c95] pb-[90px] pt-[50px]" id='sobreMi'>
        <div className="text-center ">
            <p className='text-[20px]'>sobre mi</p>
            <h2 className="text-[#77adffe7] w-[305px] m-auto hover:text-white transition text-[35px]">Jesús Zambrano</h2>
            <p className="mt-[8px] text-[18px]">Desarrollador de <span className='transition hover:text-[#77adffe7]'>aplicaciones</span></p>
        </div>

        <div className='flex justify-center'>
        <div className='flex flex-col lg:flex-row lg:justify-around w-[100vw] max-w-[1200px]'>

        <div className="about-sec1 mt-[65px]">
            <div className='flex justify-center mt-[30px]'>
                <img src={aboutImg} alt="about-img" className="rounded-[50%] w-[300px]" />
            </div>
            
            <div className='flex justify-center  mt-[10px]'>
                <h2 className='text-center hover:text-[#77adffe7] w-[50px] cursor-default'>Soy</h2>
            </div>
            <div className='flex justify-center'>
                <div className="box lg:mt-[15px] lg:max-h-[210px] w-[95vw] py-[5px] pl-[25px]">
                    <ul className='ul grid'>
                        <li className='h-[30px] li cursor-default transition-[.1s] hover:ml-[5px] hover:text-[#77adffe7]'>Autodidacta</li>
                        <li className='h-[30px] li cursor-default transition-[.1s] hover:ml-[5px] hover:text-[#77adffe7]'>Diseñador UI</li>
                        <li className='h-[30px] li cursor-default transition-[.1s] hover:ml-[5px] hover:text-[#77adffe7]'>Creador de Contenido</li>
                        <li className='h-[30px] li cursor-default transition-[.1s] hover:ml-[5px] hover:text-[#77adffe7]'>Programador</li>
                        <li className='h-[30px] li cursor-default transition-[.1s] hover:ml-[5px] hover:text-[#77adffe7]'>Arquitecto de software</li>
                        <li className='h-[30px] li cursor-default transition-[.1s] hover:ml-[5px] hover:text-[#77adffe7]'>Venezolano</li>
                    </ul>
                </div>
            </div>


        </div>

        <div className="about-sec2">
            <div className='text-center flex flex-col items-center'>
                <h3 className='text-[22px] lg:text-[27px]  transition hover:text-[#77adffe7]'>conóceme un poco</h3>
                <div className='box h-[320px] px-[20px] lg:py-[20px] py-[10px] leading-5 text-balance flex flex-col w-[95vw]'>
                    <p className='text-[13px] lg:text-[15px]'>
                    Mi nombre es Jesús David Zambrano y me dedico al emprendimiento digital. A los 13 años escribí mi primera línea de código con la idea de crear un juego sobre esquivar meteoritos en una pc dada por el gobierno. Ahora desarrollo aplicaciones profesionales que son utilizadas a nivel internacional por miles de personas.
                    </p>
                    <p className='text-[13px] lg:text-[15px]'>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ex. Error provident explicabo iste id, numquam adipisci aperiam magnam accusantium molestiae vel saepe qui ab cumque suscipit maiores eaque cupiditate!
                    </p>
                </div>
            </div>
            <div>
                <h3 className='text-center text-[25px] transition hover:text-[#77adffe7]'>tecnologias</h3>

                <div className='flex justify-around max-w-[560px] relative left-[50%] translacion'>
                    <div className='boxT lg:max-w-[230px] sm:max-w-[210px] max-w-[180px]'>
                        <h3 className='text-center'>Frontend</h3>
                        <div className='techContainer'>
                            <img className='tech code' src={html} alt="" />
                            <img className='tech code' src={css} alt="" />
                            <img className='h-[28px] code' src={js} alt="" />
                            <img className='tech code' src={react} alt="" />
                            <img className='h-[35px] code' src={rnative} alt="" />
                            <img className='h-[20px] code' src={taild} alt="" />
                            <img className='h-[35px] code' src={gimp} alt="" />
                            <img className='h-[30px] code' src={figma} alt="" />
                        </div>
                    </div>
                    <div className='boxT lg:max-w-[230px] sm:max-w-[210px] max-w-[180px]'>
                        <h3 className='text-center'>Backend</h3>
                        <div className='techContainer'>
                            <img className='tech code' src={nodejs} alt="" />
                            <div className='bg-white code rounded-[50%] flex justify-center items-center w-[35px] h-[32px]'><img className='tech' src={express} alt="" /></div>
                            <img className='tech code' src={mongo} alt="" />
                            <img className='tech code' src={python} alt="" />
                            <img className='tech code' src={django} alt="" />
                            <img className='tech code' src={sql} alt="" />
                            <img className='tech code' src={firebase} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
        </div>
        
        
    </section>
  )
}
