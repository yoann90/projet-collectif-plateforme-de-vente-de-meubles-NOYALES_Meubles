import React from "react";
import "./Admin.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const addProductToDatabase = async (productData) => {
  try {
    // Envoyez une requête POST au serveur pour ajouter un produit
    const response = await axios.post('http://localhost:3003/add-Product', productData);

    // Vérifiez la réponse du serveur pour confirmer que le produit a été ajouté avec succès
    if (response.status === 200) {
      console.log('Produit ajouté avec succès.');
      // Vous pouvez également mettre à jour localement la liste des produits si nécessaire.
    } else {
      console.error('Erreur lors de l\'ajout du produit.');
    }
  } catch (error) {
    console.error('Erreur lors de l\'ajout du produit :', error);
  }
};

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



const AdminPage = () => {
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
  
  return (
    <div className="admin-page">
      <div className="admin-title">
        <h2>Espace administration</h2>
        <form className="admin-table">
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
        </form>
      </div>
      <div className="add-title">
        <h2>Ajouter un article</h2>
        <div className="add-photos-button">
          <button>Ajouter photos</button>
        </div>
        <form className="add-form">
          <input className="add-input" type="text" placeholder="titre" />
          <input className="add-input" type="text" placeholder="Description" />
          <div className="add-form-inputs">
          <input className="add-input" type="text" placeholder="Prix" />
            <input className="add-input" type="text" placeholder="longueur" />
            <input className="add-input" type="text" placeholder="largeur" />
            <input className="add-input" type="text" placeholder="hauteur" />
          </div>
          <select className="add-select">
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
          <select className="add-select">
            <option>...</option>
            {<option>bois</option>}
            {<option>explosif</option>}
            {<option>or</option>}
            {<option>argent</option>}
            {<option>verre</option>}
            {<option>fer</option>}
          </select>
          

          <button type="submit">Ajouter article</button>
        </form>
      </div>
    </div>
  );
};
export default AdminPage;




