import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import "../Propositos/propositos.css"
import { Footer } from '../Footer/Footer'

export const Propositos = () => {
    return (
        <>
            <Navbar />
            <section className="Propositos">
                <h1 className="title">Proposito</h1>

                <div className="card">
                    <h1 className="titleCard">Mejorar las habilidades técnicas</h1>
                    <p className="parragraphCard">
                        Como futuro desarrollador, mi objetivo principal es exhibir de manera efectiva mis habilidades adquiridas en mi proceso de aprendizaje. Estoy comprometido con un proceso constante de aprendizaje y crecimiento, buscando activamente nuevas oportunidades para ampliar mis conocimientos y competencias.
                    </p>
                </div>

                <div className="card">
                    <p className="parragraphCard">
                        En busqueda de mi comienzo profesional, he enfrentado diferentes retos que he resuelto. Tengo una gran determinacion por aprender cada dia que pasa y poder aportar de manera significativa en diferentes proyectos. Como aprendiz en la tecnologia de Analisis y Desarrollo de Software (ADSO) en el SENA, he aprendido a adaptarme a cualquier situacion que se me presente, siendo perseverante y aportando posibles soluciones.
                    </p>
                </div>

            </section>
            
            <Footer />
        </>
    )
}
