import React from "react"
import { Search, ArrowDropDown, Notifications } from '@mui/icons-material';
import './Navbar.css'

const Navbar = () => {
    return (
        <header>
            <div className='navbar'>
                <div className="container">
                    <div className="left">
                        <img src="https://tec.utpl.edu.ec/themes/tec/images/logo.png" alt="logo" />
                        <a href="/" className="active">Inicio</a>
                        <a href="/" >Series</a>
                        <a href="/" >Peliculas</a>
                        <a href="/" >Popular</a>
                        <a href="/" >Mi Lista</a>
                    </div>
                    <div className="right">
                        <Search className='icon'></Search>
                        <span>ABC</span>
                        <Notifications className="icon"></Notifications>
                        <img src='https://images.unsplash.com/photo-1698681375999-8faa3e824cd9?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="imagen del perfil"></img>
                        <div className="profile">
                            <ArrowDropDown className='icon' />
                            <div className='options'>
                                <span> Opciones </span>
                                <span>Cerrar Sesion</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )

}

export default Navbar