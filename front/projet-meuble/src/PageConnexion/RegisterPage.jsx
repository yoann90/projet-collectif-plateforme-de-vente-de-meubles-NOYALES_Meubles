import React from "react";
import "./page_connexion.css";
import cadenas_icon from "../../images/cadenas.png";
import utilisateur_icon from "../../images/utilisateur.png";
import email_icon from "../../images/email.png";
import fond from "../../images/salonconnexionjpg.jpg";


function RegisterPage() {

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
        const response = await axios.post(`http://localhost:3003//register`, formData);
        console.log("User connecté:", response.data);
      } catch (error) {
        console.error("error", error);
      }
    };
  

  return (
    <>
      <div className="pageConnexion">
        <img src={fond} alt="" srcset="" />

        <div className="container">
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>
          <div className="inputs-Champs-infos-ensemble">
            {action === "S'inscrire" ? (
              <div></div>
            ) : (
              <div className="input-champs-infos-indiv">
                <div className="img-utilisateur">
                  <img src={utilisateur_icon} alt="" srcset="" />
                  <input type="text" 
                  placeholder="Nom d'utilisateur" 
                  type="text"
                  name="login"
                  placeholder="nom"
                  value={formData.login}
                  onChange={handleChange}
                  required
                  />
                </div>
              </div>
            )}

            <div className="input-champs-infos-indiv">
              <div className="img-email">
                <img src={email_icon} alt="" srcset="" />
                <input type="email" placeholder="Email" />
              </div>
            </div>
            <div className="input-champs-infos-indiv">
              <div className="img-cadenas">
                <img src={cadenas_icon} alt="" srcset="" />
                <input type="password" placeholder="Mot de passe" />
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
                setAction("Se connecter");
              }}
            >
              
              Se connecter
            </div>
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
    </>
  );
}

export default UserConnexion;