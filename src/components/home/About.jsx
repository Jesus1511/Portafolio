import aboutImg from '../../assets/aboutImg.jpg'
import html from '../../assets/techs/HTML5_logo_and_wordmark.svg.png'
import css from '../../assets/techs/CSS3_logo.svg.png'
import js from '../../assets/techs/JavaScript-logo.png'
import react from '../../assets/techs/React-icon.svg.png'
import rnative from '../../assets/techs/reactNative.png'
import ts from '../../assets/techs/Typescript_logo_2020.svg.png'
import taild from '../../assets/techs/tailwind-css-logo-5AD4175897-seeklogo.com.png'
import figma from '../../assets/techs/figma.png'
import gimp from '../../assets/techs/gimp.png'
import nodejs from '../../assets/techs/nodejs.webp'
import express from '../../assets/techs/expressjs_logo_icon_169185.png'
import mui from '../../assets/techs/material-ui-1.svg'
import mongo from '../../assets/techs/MongoDB-Emblem.png'
import sql from '../../assets/techs/PostgreSQL-Logo.wine.png'
import django from '../../assets/techs/django-icon-1606x2048-lwmw1z73.png'
import python from '../../assets/techs/Python-logo-notext.svg.png'
import firebase from '../../assets/techs/firebase.png'


export const About = () => {
  return (
    <section className="bg-[#1c253c] pt-[35px]">
        <div className="text-center ">
            <p className='text-[20px]'>sobre mi</p>
            <h2 className="text-[#77adffe7] hover:text-white transition text-[35px] m-[0]">Jesús Zambrano</h2>
            <p className="mt-[8px] text-[18px]">Desarrollador de aplicaciones</p>
        </div>

        <div className="about-sec1">
            <div className='flex justify-center mt-[30px]'>
                <img src={aboutImg} alt="about-img" className="rounded-[50%] w-[300px]" />
            </div>
            <div className="bg-[#151b2a] place-content-center mx-[8%] my-[20px] py-[5px] rounded-[20px]">
                <ul className='grid ul'>
                    <li className='h-[30px] li cursor-default transition-[.1s] hover:ml-[5px] hover:text-[#77adffe7]'>Venezolano</li>
                    <li className='h-[30px] li cursor-default transition-[.1s] hover:ml-[5px] hover:text-[#77adffe7]'>Autodidacta</li>
                    <li className='h-[30px] li cursor-default transition-[.1s] hover:ml-[5px] hover:text-[#77adffe7]'>Diseñador UI</li>
                    <li className='h-[30px] li cursor-default transition-[.1s] hover:ml-[5px] hover:text-[#77adffe7]'>Creador de Contenido</li>
                    <li className='h-[30px] li cursor-default transition-[.1s] hover:ml-[5px] hover:text-[#77adffe7]'>Programador</li>
                    <li className='h-[30px] li cursor-default transition-[.1s] hover:ml-[5px] hover:text-[#77adffe7]'>Arquitecto de software</li>
                </ul>
            </div>
        </div>

        <div className="about-sec2">
            <div className='text-center'>
                <h3 className='text-[22px] transition hover:text-[#77adffe7]'>conóceme un poco</h3>
                <p className='h-[300px]'>texto en alta</p>
            </div>
            <div>
                <h3 className='text-center text-[25px]'>tecnologias</h3>
                <div className='flex justify-around'>
                    <div className='bg-[#151b2a] rounded-[15px] w-[45%] h-[200px]'>
                        <h3 className='text-center'>Frontend</h3>
                        <div className='techContainer'>
                            <img className='tech' src={html} alt="" />
                            <img className='tech' src={css} alt="" />
                            <img className='tech' src={js} alt="" />
                            <img className='tech' src={react} alt="" />
                            <img className='tech' src={rnative} alt="" />
                            <img className='tech' src={mui} alt="" />
                            <img className='tech' src={ts} alt="" />
                            <img className='tech' src={taild} alt="" />
                            <img className='tech' src={gimp} alt="" />
                            <img className='tech' src={figma} alt="" />
                        </div>
                    </div>
                    <div className='bg-[#151b2a] rounded-[15px] w-[45%] h-[200px]'>
                        <h3 className='text-center'>Backend</h3>
                        <div className='techContainer'>
                            <img className='tech' src={nodejs} alt="" />
                            <img className='tech' src={express} alt="" />
                            <img className='tech' src={mongo} alt="" />
                            <img className='tech' src={python} alt="" />
                            <img className='tech' src={django} alt="" />
                            <img className='tech' src={sql} alt="" />
                            <img className='tech' src={firebase} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}
