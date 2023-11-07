import "../PageDetail.css"
import { Navigate, useParams } from "react-router-dom";
import bgdetail from "./bgdetail.jpeg"
import axios from "axios"
import { Link } from "react-router-dom";
import React from 'react';



function Furniture (){
const [loading, setLoading] = React.useState(true)
let [data,setData]= React.useState([]);
    let id = useParams();

    React.useEffect(() => {
        const fetchData = async () =>{
          setLoading(true);
          try {
            const {data: response} = await axios.get(`http://localhost:3003/get-OneProduct/${id.id}`);
            setData(response);
          } catch (error) {
            console.error(error.message);
          }
          setLoading(false);
        }
    
        fetchData();
      }, []);
    
    console.log(data)
return (
    <>
    <div>
    {loading && <div>Loading</div>}
    {!loading && 
(<div className="backgroundimg">
<div className="description-box">
   

<div className='detail-box'>
<h1>Noyales Meubles</h1> 
<div className='paragraphs'>
<p>Type: Néant</p>
<p>Couleur: {data.couleur}</p>
<p>Matière: {data.matiere} </p>
<p>Dimensions: {data.dimension.longeur}</p>
<p>X</p>
<p>{data.dimension.largeur}</p>
<p>X</p>
<p>{data.dimension.hauteur}</p>
</div>
<div className='shop-cart'>
<Link  className='btn' to="/Cart">Shop here!</Link>
</div>
</div>
<img src={`http://localhost:3003/`+ data.img.img1.src} style={{borderRadius:"10px", height:"300px", width:"300px", boxShadow:"#dbdbdb 2px 2px 3px 1px"}} />
 <img src={`http://localhost:3003/`+ data.img.img2.src} style={{borderRadius:"10px",height:"300px", width:"300px", boxShadow:"#dbdbdb 2px 2px 3px 1px"}} />
    <img src={`http://localhost:3003/`+ data.img.img3.src} style={{borderRadius:"10px",height:"300px", width:"300px", boxShadow:"#dbdbdb 2px 2px 3px 1px"}}/>
</div>
</div>)}
</div>
</>)}

export default Furniture;
