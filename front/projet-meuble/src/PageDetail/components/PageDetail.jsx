import React, {Component} from "react";
import Recap from './PageDetailRecap'; 
import meuble from "../../../images/70s Italian Chrome Table Lamp - iD Lights.jpeg"

class Furniture extends Component {
render(){
return <div style={{display:"flex",padding:"10px", margin:"5px",width:"60%", backgroundColor:"linen"}}>
<img src ={meuble} style={{width:"25%"}}/>
<Recap  dimensions ="53x43x85" matiere = "cuir" color ="brown">1921</Recap>
{/* <Recap dimensions ="83x43x85" matiere = "bois" color = "beige">1965 </Recap> */}
{/* <Recap dimensions ="93x43x85" matiere = "laine" color = "dark green">1975</Recap>
<Recap dimensions ="113x83x85" matiere ="synthétique" color="orange">1945</Recap> */}

</div>



}

}

export default Furniture;