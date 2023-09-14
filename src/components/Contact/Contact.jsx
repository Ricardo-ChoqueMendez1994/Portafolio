import React from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import '../Contact/contact.css'

export const Contact = () => {
    return (
        <>
            <Header />
            <section className="form">
                <input type="text" className='nombre' name='nombre' placeholder='Ingresa tu nombre' required />
                    <br /> <br />
                <input type="text" className='correo' name='correo' placeholder='Ingresa tu correo' required />
                    <br /> <br />
                <textarea className="mensaje" cols="22" rows="7" placeholder='Ingresa tu mensaje'></textarea>

                <input type="submit" className='button' value="Enviar"></input>
            </section>
            <Footer />
        </>
    )
}
