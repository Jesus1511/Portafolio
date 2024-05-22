import { useEffect } from "react"
import { useState } from "react"
import git from '../../assets/github-logo-24.svg'
import { useNavigate } from "react-router-dom"

export const Portafolio = () => {

  const [slider, setSlider] = useState(2)
  const [styles, setStyles] = useState(["","",""])
  const navigate = useNavigate()

  function handleSlider (plus) {
    const newSlider = slider + plus
    if (newSlider > 3) {
      setSlider(3)
      return
    }
    if (newSlider < 1) {
      setSlider(1)
      return
    }
    setSlider(newSlider)
  }

  useEffect(()=> {
    if (slider == 1) {
      const newStyles = [
        "bigright",
        "miniright",
        "miniright"
      ]
      setStyles(newStyles)
    }
    if (slider == 2) {
      const newStyles = [
        "mini",
        "big",
        "mini"
      ]
      setStyles(newStyles)
    }
    if (slider == 3) {
      const newStyles = [
        "minileft",
        "minileft",
        "bigleft"
      ]
      setStyles(newStyles)
    }
  },[slider])

  return (
    <section className="portofolio py-[90px]" id="proyectos">
      <div onClick={()=>handleSlider(-1)} className="bg-white text-[#424242] text-[50px] absolute w-[40px] h-[40px] rounded-[50%] hidden lg:flex justify-center items-center top-[1950px] left-[20px]  cursor-pointer hover:text-[#c8272ce7] transition  z-[2234]">{"<"}</div>
      <div onClick={()=>handleSlider(+1)} className="bg-white text-[#424242] text-[50px] absolute w-[40px] h-[40px] rounded-[50%] hidden lg:flex justify-center items-center top-[1950px] right-[20px] cursor-pointer hover:text-[#c8272ce7] transition z-[2234]">{">"}</div>
      <h2 className="text-center mb-[40px] cursor-default">Explora mis proyectos de aplicaciones <span className="text-[#fe3d43e7] hover:text-white transition">web</span> y <span className="text-[#fe3d43e7] hover:text-white transition">móviles</span>.</h2>
      <div className="flex lg:flex-row lg:justify-around flex-col items-center">
        <div onClick={()=>navigate('/project/0')} className={`my-[30px] ${styles[0]} w-[340px] lg:w-[450px] lg:h-[338px] cursor-pointer h-[255px] img1 degree`}>
          <p className='relative lg:top-[235px] top-[200px] left-[25px] w-[300px]'>Paper Rock scissors</p>
        </div>
        <div onClick={()=>navigate('/project/1')} className={`my-[30px] ${styles[1]}  w-[340px] lg:w-[450px] lg:h-[338px] cursor-pointer h-[255px] img2 degree`}>
          <p className='relative lg:top-[235px] top-[200px] left-[25px] w-[300px]'>google keeps clone</p>
        </div>
        <div onClick={()=>navigate('/project/2')} className={`my-[30px] ${styles[2]}  w-[340px] lg:w-[450px] lg:h-[338px] cursor-pointer h-[255px] img3 degree`}>
          <p className='relative lg:top-[235px] top-[200px] left-[25px] w-[300px]'>connect four vs ia</p>
        </div>
      </div>

      <div className="flex flex-col lg:mt-[60px] items-center mt-[25px]">
        <h3 className="text-[20px]">Ver Más Proyectos</h3>
        <a className='no-underline' href="https://github.com/Jesus1511" target="_blank" rel="noopener noreferrer">
          <div className="bg-[#c71b21e7] flex justify-center items-center rounded-[15px] py-[10px] px-[15px] cursor-pointer btnhover">
            <img src={git} alt="" />
            <span>Github</span>
          </div>
        </a>
      </div>
    </section>
  )
}
