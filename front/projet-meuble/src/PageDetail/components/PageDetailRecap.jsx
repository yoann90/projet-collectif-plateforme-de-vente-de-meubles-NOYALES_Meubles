import React from 'react';

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

<button className='btn' type='submit'>Shop here! </button>
</div>

)

}

export default Recap;