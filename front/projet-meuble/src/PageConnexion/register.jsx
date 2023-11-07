// import React from "react";
import "./page_connexion.css";
import cadenas_icon from "../../images/cadenas.png";
import utilisateur_icon from "../../images/utilisateur.png";
import email_icon from "../../images/email.png";
import fond from "../../images/salonconnexionjpg.jpg";
import React, { useState } from "react";



function Register() {

    const [formData, setFormData] = useState({
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
          const response = await axios.post(`http://localhost:3003/login`, formData);
          console.log("User connecté:", response.data);
        } catch (error) {
          console.error("error", error);
        }
      }; 

  const [action, setAction] = React.useState("Inscription");
  return (
    <>
      <form action="">
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
                      <input type="text" placeholder="Nom" />
                    </label>
                  </div>
                </div>
              )}
              <div className="input-champs-infos-indiv">
                <div className="img-utilisateur">
                  <label htmlFor="">
                    <img src={utilisateur_icon} alt="" srcSet="" />
                    <input type="text" placeholder="Prénom" />
                  </label>
                </div>
              </div>

              <div className="input-champs-infos-indiv">
                <div className="img-email">
                  <label htmlFor="">
                    <img src={email_icon} alt="" srcSet="" />
                    <input type="email" placeholder="Email" />
                  </label>
                </div>
              </div>
              <div className="input-champs-infos-indiv">
                <div className="img-cadenas">
                  <label htmlFor="">
                    <img src={cadenas_icon} alt="" />
                    <input type="password" placeholder="Mot de passe" />
                  </label>
                </div>
              </div>
            </div>

            <div className="submit-container">
              <div className="sub2">
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
        </div>
      </form>
    </>
  );
}

export default Register;