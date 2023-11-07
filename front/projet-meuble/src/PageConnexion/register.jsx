// import React from "react";
import "./page_connexion.css";
import cadenas_icon from "../../images/cadenas.png";
import utilisateur_icon from "../../images/utilisateur.png";
import email_icon from "../../images/email.png";
import fond from "../../images/salonconnexionjpg.jpg";
import React, { useState } from "react";
import axios from "axios";



function Register() {

    const [formData, setFormData] = React.useState({
        firstname: "",
        lastname: "",
        login: "",
        email: "",
        password: "",
        role: "user",
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
          const response = await axios.post(`http://localhost:3003/register`, formData);
          console.log("User connecté:", response.data);
        } catch (error) {
          console.error("error", error);
        }
      }; 

  const [action, setAction] = React.useState("nscription");
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
                  <label htmlFor="">
                  <img src={utilisateur_icon} alt="" srcSet="" />
                  <input type="text"  
                  placeholder="Nom" 
                  value={formData.lastname}
                  onChange={handleChange}
                  required 
                  />
                  </label>
                </div>
              </div>
            )}
             <div className="input-champs-infos-indiv">
                <div className="img-utilisateur">
                  <label htmlFor="">
                  <img src={utilisateur_icon} alt="" srcSet="" />
                  <input type="text" 
                  placeholder="Prénom" 
                  value={formData.firstname}
                  onChange={handleChange}
                  required 
                  />
                  </label>
                </div>
              </div>

            <div className="input-champs-infos-indiv">
              <div className="img-email">
                <label htmlFor="">
                <img src={email_icon} alt="" srcSet="" />
                <input type="email" 
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required 
                />
                </label>
              </div>
            </div>
            <div className="input-champs-infos-indiv">
              <div className="img-cadenas">
                <label htmlFor="">
                <img src={cadenas_icon} alt=""  />
                <input type="password"  
                placeholder="passe"
                value={formData.password}
                onChange={handleChange}
                required 
                />
                </label>
              </div>
            </div>
          </div>

          {action === "S'incrire" ? (
            <div></div>
          ) : (
            <div className="forgot-password">
              Mot de passe oublié ?<span>Clique ici !</span>
            </div>
          )}
          <div className="submit-container">
         
            <div
              className={action === "S'inscrire" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("S'inscrire");
              }}
            >
              S'inscrire
            </div>
          </div>
        </div>
      </div>
      </form>
    </>
  );
}

export default Register;