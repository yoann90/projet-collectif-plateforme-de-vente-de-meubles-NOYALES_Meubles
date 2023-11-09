import React from "react";
import "./page_connexion.css";
import cadenas_icon from "../../images/cadenas.png";
import utilisateur_icon from "../../images/utilisateur.png";
import email_icon from "../../images/email.png";
import fond from "../../images/salonconnexionjpg.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

function UserConnexion() {
  const [formData, setFormData] = React.useState({
    login: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3003/login`, formData);
      console.log("User connecté:", response.data);
      localStorage.setItem("token",response.data.token)
    } catch (error) {
      console.error("error", error);
    }
  }; 

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="pageConnexion">
          <img src={fond} alt="" srcSet="" />

          <div className="container">
            <div className="header"></div>

            <div className="title2">Se connecter</div>

            <div className="souligner"></div>

            <div className="inputs-Champs-infos-ensemble">
              <div className="input-champs-infos-indiv">
                <div className="img-utilisateur">
                  <img src={utilisateur_icon} alt="" srcSet="" />
                  <input
                    type="text"
                    placeholder="Nom d'utilisateur"
                    name="login"
                    value={formData.login}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="input-champs-infos-indiv">
                <div className="img-cadenas">
                  <img src={cadenas_icon} alt="" srcSet="" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Mot de passe"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <button className="buttonLogin">Se connecter
            </button>

            <div className="forgot-password">
              Mot de passe oublié ?<span>Clique ici !</span>
            </div>

            <div className="boutons">
              <Link className="subscribe" to="/register">
                Pas de compte ? S'inscrire
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default UserConnexion;
