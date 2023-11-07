import React from "react";
import "./page_connexion.css";
import cadenas_icon from "../../images/cadenas.png";
import utilisateur_icon from "../../images/utilisateur.png";
import email_icon from "../../images/email.png";
import fond from "../../images/salonconnexionjpg.jpg";
import { Link } from "react-router-dom";

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
    } catch (error) {
      console.error("error", error);
    }
  }; 
  const [action, setAction] = React.useState("Se connecter");
  return (
    <>
     <form onSubmit={handleSubmit}>
      <div className="pageConnexion">
        <img src={fond} alt="" srcSet="" />

        <div className="container">
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>
          <div className="inputs-Champs-infos-ensemble">
            {action === "Se connecter" ? (
              <div></div>
            ) : (
              <div className="input-champs-infos-indiv">
                <div className="img-utilisateur">
                  <img src={utilisateur_icon} alt="" srcSet="" />
                  <input type="text" placeholder="Nom d'utilisateur" />
                </div>
              </div>
            )}

            <div className="input-champs-infos-indiv">
              <div className="img-email">
                <img src={email_icon} alt="" srcSet="" />
                <input type="email" placeholder="Email"
                 value={formData.email}
                 onChange={handleChange}
                 required />
              </div>
            </div>
            <div className="input-champs-infos-indiv">
              <div className="img-cadenas">
                <img src={cadenas_icon} alt="" srcSet="" />
                <input type="password" 
                placeholder="Mot de passe"
                value={formData.password}
                onChange={handleChange}
                required />
              </div>
            </div>
          </div>

          {action === "S'incrirer" ? (
            <div></div>
          ) : (
            <div className="forgot-password">
              Mot de passe oublié ?<span>Clique ici !</span>
             
            </div>
          )}
         
          <div className="submit-container">
            <div
              className={action === "Se connecter" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Se connecter")}}>
              
              Se connecter
            </div>
            <div
              // className={action === "S'inscrire" ? "submit gray" : "submit"}
              // onClick={() => {
              //   setAction("S'inscrire");
              // }}
              
            >
              <Link  className="subscribe" to="/register">S'inscrire</Link>
             
            </div>
          </div>
        </div>
      </div>
      </form>
    </>
  );
}

export default UserConnexion;
