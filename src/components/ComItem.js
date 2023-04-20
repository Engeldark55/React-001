import React from "react";
import logo from '../assets/img/logo/Engeldev.png'
class ComItem extends React.Component{
    render() {
        return (
            <div id="main">

                <div class="cards">
                        <center><img src={logo} alt=""></img></center>
                        <hr></hr>
                        <h3>titulo</h3>
                        <p id="fecha">fecha</p>
                        <p id="desc">bwiudbewuibdewuibd
                        dewodnewudbewuybewbduwebdewiubd
                        wieubdiweubdeub dihewhd
                        </p>
                        <button src="">ver mas..</button>
                </div>
             
            </div>
            
            
        );
    }
}
export default ComItem;