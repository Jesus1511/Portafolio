
export const Contact = () => {



  return (
    <section className='contact'>
      <h2>Contact</h2>
      <div className='contact-info'></div>
      <form action="https://formsubmit.co/jdzc1511@gmail.com" method="POST">
        <input
          type="text"
          placeholder='tu nombre'
          name="name"
          required
        />
        <input
          type="text"
          placeholder='tu email'
          required
          name="email"
        />
        <input
          type="text"
          placeholder='tu telefono'
          required
          name="phone"
        />
        <textarea
          placeholder='mensaje'
          cols="30" rows="10"
          required
          name="mensaje">
        </textarea>

        <input type="hidden" name="_next" value="http://localhost:5173/"/>
        <input type="hidden" name="_captcha" value="false"/>
        
        <button type='submit'>Enviar</button>
      </form>
    </section>
  )
}
