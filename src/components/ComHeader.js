import React from 'react'
import Engeldev from '../assets/img/logo/Engeldev.png'
class ComHeader extends React.Component{
    render() {
        return (
            <div id="img-header">
                <div id="box">
                    <img src={Engeldev} alt=''></img>
                    <h1 class="texto">Engel Dev</h1>
                    <p class="texto">desarrollador Junior - python, js</p>
                </div>
            </div>
        );
    }
}
export default ComHeader;