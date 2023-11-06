import React from 'react';
import { Link } from "react-router-dom";
const Recap = (props) =>{
return(
<div className='detail-box'>
<h1>Noyales Meubles</h1> 
<div className='paragraphs'>
<p>Type: </p>
<p>Année: {props.children} </p>
<p>Couleur: {props.color}</p>
<p>Matière: {props.matiere} </p>
<p>Dimensions: {props.dimensions}</p>
</div>
<div className='shop-cart'>
<Link  className='btn' to="/Cart">Shop here!</Link>
</div>
</div>

)

}

export default Recap;