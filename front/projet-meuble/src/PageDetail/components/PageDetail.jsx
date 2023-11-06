import React, {Component} from "react";
import Recap from './PageDetailRecap'; 
import meuble from "../../../images/70s Italian Chrome Table Lamp - iD Lights.jpeg";
import "../PageDetail.css"
import table from "../../../images/Table basse _G3.jpeg";
import lampe from "../../../images/(3).jpeg"
import chaise from "../../../images/Chaise de Salle à Manger.jpeg"
import { Navigate } from "react-router-dom";
import bgdetail from "./bgdetail.jpeg"


class Furniture extends Component {
render(){

    
return <div className="backgroundimg">

<div className="description-box">
   
<img src ={meuble} style={{width:"38%", borderRadius:"10px"}}/>
<Recap  dimensions ="53x43x85" matiere = "cuir" color ="brown">1921</Recap>
{/* <Recap dimensions ="83x43x85" matiere = "bois" color = "beige">1965 </Recap> */}
{/* <Recap dimensions ="93x43x85" matiere = "laine" color = "dark green">1975</Recap>
<Recap dimensions ="113x83x85" matiere ="synthétique" color="orange">1945</Recap> */}
<div className="images">
    <img src={table}style={{borderRadius:"10px"}} />
    <img src={lampe} style={{borderRadius:"10px"}}/>
    <img src={chaise} style={{borderRadius:"10px"}}/>
     </div>
</div>

</div>
}

}

export default Furniture;
