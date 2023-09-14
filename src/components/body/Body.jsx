import { Navbar } from "../Navbar/Navbar"
import "./body.css"

import setUp from '../../../public/img/setUp.webp'

export const Body = () => {
    return (
    <>
    
        <section className="center">
            <article className="left">
                <h1>Ricardo Choque Mendez</h1>
                <p>
                    Aprendiz de la tecnologia Analisis y Desarrollo de Software (ADSO) en el Sena,
                    21 años de edad, involucrado fuertemente en construir mi futuro por medio del estudio y el buen desarrollo de las habilidades que voy adquiriendo.
                </p>
            </article>
            <article className="right">
                <img src= { setUp } alt="setup" />
            </article>
        </section>
    </>
    )
}

