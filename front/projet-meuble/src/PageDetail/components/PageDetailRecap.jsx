import React from 'react';

const Recap = (props) =>{
return(
<div style={{ backgroundColor: "linen",
        width: "300px",
        padding: "10px",
        margin: "5px auto",
        borderRadius: "15px"}}>
<h1>Noyales Meubles</h1>
<br />
<p>Type: </p>
<p>Année: {props.children} </p>
<p>Couleur: {props.color}</p>
<p>Matière: {props.matiere} </p>
<p>Dimensions: {props.dimensions}</p>
<br />
<br />
<br />
<br />
<br />
<button style={{height:"15px", width:"45px",backgroundColor:"brown", borderRadius:"10px"}}type="submit" > </button>
</div>

)

}

export default Recap;