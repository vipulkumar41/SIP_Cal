import React from 'react'
import "./first.css"
import Logo from './images/\Logos.png'
import { FaBars } from "react-icons/fa";
import { FiSettings} from "react-icons/fi";

export default function Nav() {
  return (
    <div className='nav'>
       <img src={Logo} height={45} width={160}/>
       <ul className='uti'><FaBars/> Utilities/Calculators</ul>
       <ul className='settings'><FiSettings/> Settings</ul>
       <ul className='demo'>DEMONEW</ul>
    </div>
  )
}

