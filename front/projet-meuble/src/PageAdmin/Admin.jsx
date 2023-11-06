import React from "react";
import "./Admin.css";
const AdminPage = () => {
  const products = [
    { name: "Chaise d'écolier", price: "32 BTC", status: "En ligne" },
    { name: "Chaise d'écolier", price: "32 SOL", status: "À valider" },
    { name: "Chaise d'écolier", price: "32 ETH", status: "En ligne" },
  ];
  return (
    <div className="admin-page">
      <div className="admin-title">
        <h2>Espace administration</h2>
        <table className="admin-table">q
          <thead>
            <tr>
              <th>Nom article</th>
              <th>Prix</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className="admin-table-td">{product.name}</td>
                <td className="admin-table-td">{product.price}</td>
                <td className="admin-table-td">{product.status}</td>
                <td className="admin-table-td">
                  {/* Replace these with actual icons or buttons */}
                  <button className="edit-button">éditer</button>
                  <button className="delete-button">Supprimer</button>
                  <span>:coche_blanche:</span> <span>:x:</span>
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
        <form className="add-form">
          <input className="add-input" type="text" placeholder="nom" />
          <div className="add-form-inputs">
            <input className="add-input" type="text" placeholder="longueur" />
            <input className="add-input" type="text" placeholder="largeur" />
            <input className="add-input" type="text" placeholder="hauteur" />
          </div>
          <select className="add-select">
            <option>...</option>
            {<option>table</option>}
            {<option>chaise</option>}
            {<option>sofa</option>}
            {<option>lampe</option>}
            {<option>fautueil</option>}
            {<option>troll</option>}
            {<option>bitcoin</option>}
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
          <select className="add-select">
            <option>...</option>
            {<option>bois</option>}
            {<option>explosif</option>}
            {<option>or</option>}
            {<option>argent</option>}
            {<option>verre</option>}
            {<option>fer</option>}
          </select>
          <div className="color-options">
            {/* Render color options here */}
            <div
              className="color-options"
              style={{ backgroundColor: "red", width: "20px", height: "20px" }}
            ></div>
            {/* Add more colors here */}
          </div>
          <button type="submit">Ajouter article</button>
        </form>
      </div>
    </div>
  );
};
export default AdminPage;
