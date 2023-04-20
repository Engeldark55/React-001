import React from "react";
import facebook from '../assets/img/redes-sociales/icons8-facebook-nuevo-48.png'
import instragram from '../assets/img/redes-sociales/icons8-instagram-48.png'
import git from '../assets/img/redes-sociales/icons8-git-48.png'
class ComNav extends React.Component{
    render() {
        return (
             <div id="menu-header">
             
               <ul id="menu-lista">
                <li class="lista">
                    <a href="#" id="facebook"><img class="icons" src={facebook}alt=""></img> Facebook</a>
                </li>
                <li class="lista">
                    <a href="#" id="Instagram" ><img class="icons" src={instragram}alt=""></img> Instagram</a>
                </li>
                <li class="lista">
                    <a href="#" id="git">
                    <img class="icons" src={git}alt=""></img>
                        Git
                        </a>
                </li>
               </ul>
             </div>
        );
    }
}
export default ComNav;