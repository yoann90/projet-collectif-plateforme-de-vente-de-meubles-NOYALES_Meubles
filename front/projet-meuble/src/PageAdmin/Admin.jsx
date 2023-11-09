import React from "react";
import "./Admin.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function  AdminPage(){

  
  const [data, setData] = useState([]);
  //const [products, setProduct] = useState([]);
  useEffect(()=>{
    const requestProducts = async()=>{
      let requete = await axios.get(`http://localhost:3003/get-AllProduct`);
      if(requete.data)
      setData(requete.data)
      console.log(requete.data)
    }
    requestProducts()
  },[])
  const products = data
  
  const handleDelete = async (productId) => {
    try {
      // Envoyez une requête de suppression au serveur pour supprimer l'article par son ID
      console.log(productId)
      await axios.delete(`http://localhost:3003/delete-Product/${productId}`);
  
      // Mettez à jour la liste des produits localement (vous pouvez utiliser setState)
      // Pour cela, vous pouvez filtrer les produits existants pour exclure l'article supprimé
    } catch (error) {
      console.error("Erreur lors de la suppression de l'article :", error);
    }
  };


const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(e.target[9])
const product = new FormData()
product.set('title', e.target[0].value)
product.set('description', e.target[1].value)
product.set('price', e.target[2].value)
product.set('longeur', e.target[3].value)
product.set('largeur', e.target[4].value)
product.set('hauteur', e.target[5].value)
product.set('couleur', e.target[6].value)
product.set('matiere', e.target[7].value)
product.append('img', e.target[8].files[0])
product.append('img', e.target[9].files[0])
product.append('img', e.target[10].files[0])
console.log(product)



try {
  const response = await axios.post("http://localhost:3003/add-Product/" , product)
  if(response){
      console.log("produit ajouté:");
      }} catch (error) {
    console.log(error)
    }
  }; 
  
  
  return (
    <div className="admin-page">
      <div className="admin-title">
        <h2>Espace administration</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Nom article</th>
              <th>Prix</th>
              <th>Actions</th>
            </tr>
            
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className="admin-table-td">{product.title}</td>
                <td className="admin-table-td">{product.price}</td>
                <td className="admin-table-td">
                  <button 
                  className="delete-button"
                  onClick={() => handleDelete(product._id)}
                  >Supprimer</button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="add-title">
        <h2>Ajouter un article</h2>
        <div className="add-photos-button">
          <button>Ajouter photos</button>
        </div>
        <form className="add-form" onSubmit={handleSubmit} >
          <input className="add-input" type="text" placeholder={"titre"}  name="title"
        required/>
          <input className="add-input" type="text" placeholder={"description"}
          name="description"
          required />
          <div className="add-form-inputs">
          <input className="add-input" type="text" placeholder={"price"} 
          name="price"
          required />
            <input className="add-input" type="text" placeholder={"longueur"}
            name="longeur"
          required  />
            <input className="add-input" type="text" placeholder={"largeur"} 
            name="largeur"
            required />
            <input className="add-input" type="text" placeholder={"hauteur"}
            name="hauteur"
            required  />
          </div>
          <select className="add-select" name={"couleur"}
          required >
            <option>...</option>
            {<option>rouge</option>}
            {<option>vert</option>}
            {<option>marron</option>}
            {<option>blanc</option>}
            {<option>noir</option>}
            {<option>argenté</option>}
            {<option>doré</option>}
            {<option>gris</option>}
            {<option>bleu</option>}
            {<option>beige</option>}
          </select>
          <select className="add-select"name="matiere"
          required >
            <option>...</option>
            {<option>bois</option>}
            {<option>explosif</option>}
            {<option>or</option>}
            {<option>argent</option>}
            {<option>verre</option>}
            {<option>fer</option>}
          </select>
          <input type="file" name="img"
          required></input>
          <input type="file" name="img"
          required></input>
          <input type="file" name="img"
          required></input>
          <button type="submit">Ajouter article</button>
        </form>
      </div>
    </div>
  );
};





