// import React from "react";
import "./register.css";
import cadenas_icon from "../../images/cadenas.png";
import utilisateur_icon from "../../images/utilisateur.png";
import email_icon from "../../images/email.png";
import fond from "../../images/salonconnexionjpg.jpg";
import React, { useState } from "react";
import axios from "axios";



function Register() {

    const [formData, setFormData] = React.useState({
        lastname: "",
        firstname: "",
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="pageConnexion">
          <img src={fond} alt="" srcSet="" />

          <div className="container-inscription">
            <div className="header">
              <div className="title">Inscription</div>
              <div className="underline"></div>
            </div>
            <div className="inputs-Champs-infos-ensemble2">
              <div className="input-champs-infos-indiv2">
                <div className="img-utilisateur">
                  <label htmlFor="">
                    <img src={utilisateur_icon} alt="" srcSet="" />
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Nom"
                      value={formData.lastname}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="input-champs-infos-indiv2">
                <div className="img-utilisateur">
                  <label htmlFor="">
                    <img src={utilisateur_icon} alt="" srcSet="" />
                    <input
                      type="text"
                      placeholder="Prénom"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="input-champs-infos-indiv2">
                <div className="img-utilisateur">
                  <label htmlFor="">
                    <img src={utilisateur_icon} alt="" srcSet="" />
                    <input
                      type="text"
                      placeholder="login"
                      name="login"
                      value={formData.login}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="input-champs-infos-indiv2">
                <div className="img-email">
                  <label htmlFor="">
                    <img src={email_icon} alt="" srcSet="" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="input-champs-infos-indiv2">
                <div className="img-cadenas">
                  <label htmlFor="">
                    <img src={cadenas_icon} alt="" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Mot de passe"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="submit-container">
              <button>Créer mon compte</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;