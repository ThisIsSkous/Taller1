import React from "react";
import { PlayArrow, Info } from "@mui/icons-material";
import './Content.css'

const PeliculaPrincipal = () => {
    return (
        <div class="pelicula-principal">
            <div class="contenedor">
                <h3 class="titulo">Sherk (2001)</h3>
                <p class="descripcion">
                Hace mucho tiempo, en una lejana ciénaga, vivía un ogro llamado Shrek. 
                Un día, su preciada soledad se ve interrumpida por un montón de personajes de 
                cuento de hadas que invaden su casa. Todos fueron desterrados de su 
                reino por el malvado Lord Farquaad. Decidido a devolverles su reino y recuperar 
                la soledad de su ciénaga, Shrek llega a un acuerdo con Lord Farquaad y va a 
                rescatar a la princesa Fiona, la futura esposa del rey. Sin embargo, la princesa 
                esconde un oscuro secreto.
                </p>
                <button class="boton">
                    <PlayArrow className='icon' ></PlayArrow>Reproducir
                </button>
                <button class="boton">
                    <Info className='icon' ></Info>Mas Informacion
                </button>
            </div>
        </div>

    )
}

export default PeliculaPrincipal