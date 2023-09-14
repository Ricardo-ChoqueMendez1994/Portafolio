import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import "../Portfolio/portfolio.css"
import { Footer } from '../Footer/Footer'

import apptastico from '../../../public/img/Apptastico.png'
import Rick from '../../../public/img/RickAndMorty.png'
import ColorRGB from '../../../public/img/tableroRGB.png'
import BotonColor from '../../../public/img/ColorAleatorio.png'
import carroCompras from '../../../public/img/carritoCompras.png'

export const Portfolio = () => {
    return (
        <>
            <Navbar />
            <section className="Portolio">
                <h1 className="titleGeneral">Proyectos</h1>
                <div className="target">
                    <div className="left">
                        <h1 className="titleTarget">Apptastico</h1>
                        <p className='ParragraphTarget'>
                            Proyecto de Apptastico aplicando, transiciones, hoover y los Media Query's
                        </p>
                        <br />
                        <div className="date">11/08/2023</div>
                        <br />
                        <a className='link' href="https://poetic-belekoy-ffacbb.netlify.app" target='-blanc'>Ver Despliegue</a>
                    </div>
                    <div className="right">
                        <img src= { apptastico } alt="imagen" className='imgApptastico' />
                    </div>
                </div>

                <div className="target">
                    <div className="left">
                        <h1 className="titleTarget">Rick And Morty</h1>
                        <p className='ParragraphTarget'>
                            Consumiendo la app de Rick And Morty
                        </p>
                        <br />
                        <div className="date">06/02/2023</div>
                        <br />
                        <a className='link' href="https://teal-choux-78f4e1.netlify.app" target='-blanc'>Ver Despliegue</a>
                    </div>
                    <div className="right">
                        <img src= { Rick } alt="imagen" className='imgApptastico' />
                    </div>
                </div>

                <div className="target">
                    <div className="left">
                        <h1 className="titleTarget">Tablero RGB</h1>
                        <p className='ParragraphTarget'>
                            Tablero en el que puedes cambiar o graduar los tres colores primarios para obtener el color de preferencia
                        </p>
                        <br />
                        <div className="date">06/22/2023</div>
                        <br />
                        <a className='link' href="https://coruscating-narwhal-98256d.netlify.app" target='-blanc'>Ver Despliegue</a>
                    </div>
                    <div className="right">
                        <img src= { ColorRGB } alt="imagen" className='imgApptastico' />
                    </div>
                </div>

                <div className="target">
                    <div className="left">
                        <h1 className="titleTarget">Boton RGB</h1>
                        <p className='ParragraphTarget'>
                            Boton para cambiar un color diferente de manera aleatoria y a su vez obtener el codigo RGB
                        </p>
                        <br />
                        <div className="date">06/22/2023</div>
                        <br />
                        <a className='link' href="https://storied-smakager-bcd058.netlify.app" target='-blanc'>Ver Despliegue</a>
                    </div>
                    <div className="right">
                        <img src= { BotonColor } alt="imagen" className='imgApptastico' />
                    </div>
                </div>

                <div className="target">
                    <div className="left">
                        <h1 className="titleTarget">Carro de compras</h1>
                        <p className='ParragraphTarget'>
                            En este proyecto se elaboro el carro de compras a una tienda de ropa como requerimiento en un resultado de aprendizaje
                        </p>
                        <br />
                        <div className="date">07/02/2023</div>
                        <br />
                        <a className='link' href="https://dainty-fox-2fbd80.netlify.app" target='-blanc'>Ver Despliegue</a>
                    </div>
                    <div className="right">
                        <img src= { carroCompras } alt="imagen" className='imgApptastico' />
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}
