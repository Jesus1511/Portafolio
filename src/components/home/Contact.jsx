import '../../styles/contact.css'

export const Contact = () => {

  return (
    <section className='bg-[#1c253c95] py-[50px]' id='contactame'>
      <div className='flex justify-center'>
        <h2 className='w-[150px] text-[30px] cursor-default hover:text-[#ffc94b] transition mb-[50px]'>Contacto</h2>
      </div>

      <div className='flex justify-center'>
      <div className='lg:flex lg:justify-evenly max-w-[900px] w-[100vw]'>

        <div className='flex flex-col items-center'>
          <h3 className='text-center lg:w-[200px] text-[20px] cursor-default'>Fases Iniciales de la <span className="text-[#ffc94b] hover:text-white transition">Contratación</span></h3>

          <div className='flex relative bottom-5 justify-center pl-[20px]'>
            <div className='w-[2px] h-[300px] bg-[#fff6e2] relative left-[12px] bartrans'></div>
            <div className='flex flex-col h-[400px] justify-around items-center'>
              <div className='flex items-center flex-wrap '>
                <div className='whiteBall'></div>
                <p className='hover:text-[#ffdb87] cursor-default text-[20px]  transition ml-[20px] w-[250px]'>Diagnóstico General</p>
              </div>
              <div className='flex items-center flex-wrap '>
                <div className='whiteBall'></div>
                <p className='hover:text-[#ffdb87] cursor-default text-[20px]  transition ml-[20px] w-[250px]'>Definición de Tareas y Fases del Proyecto</p>
              </div>
              <div className='flex items-center flex-wrap '>
                <div className='whiteBall'></div>
                <p className='hover:text-[#ffdb87] cursor-default text-[20px]  transition ml-[20px] w-[250px]'>Cotización</p>
              </div>
              <div className='flex items-center flex-wrap '>
                <div className='whiteBall'></div>
                <p className='hover:text-[#ffdb87] cursor-default text-[20px]  transition ml-[20px] w-[250px]'>Puesta En Marcha</p>
              </div>
            </div>
          </div>
        </div>

        <form className='flex  flex-col items-center justify-around' action="https://formsubmit.co/jdzc1511@gmail.com" method="POST">
          <h3 className='text-center lg:w-[200px] text-[20px] cursor-default'>Escribeme  <span className="text-[#ffc94b] hover:text-white transition">Personalmente</span></h3>
          
          <input
            type="text" placeholder='tu nombre' name="name"required
            className='bordebajo lg:max-w-[450px] lg:w-[50vw]'
          />

          <input
            type="text" placeholder='tu email' required name="email"
            className='bordebajo lg:max-w-[450px] lg:w-[50vw]'
          />

          <input
            type="text" placeholder='tu telefono' required name="phone"
            className='bordebajo lg:max-w-[450px] lg:w-[50vw]'
          />

          <textarea
            placeholder='mensaje' cols="30" rows="10" required name="mensaje"
            className='bordebajo lg:max-w-[450px] lg:w-[50vw]'>

          </textarea>

          <input type="hidden" name="_next" value="http://localhost:5173/"/>
          <input type="hidden" name="_captcha" value="false"/>

          <button className='mt-[25px] bg-[#fdb100cb] border-none btnhover text-[18px] rounded-[7px] px-[15px] py-[10px]' type='submit'>Enviar Mensaje</button>
        </form>
      </div>
      </div>
    </section>
  )
}
