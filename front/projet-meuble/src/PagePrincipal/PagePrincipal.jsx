import "./PagePrincipal.css";
import meuble from "../../images/canapés-colorés.jpeg";
import accueil2 from "../../images/accueil2.jpg";
import accueil3 from "../../images/accueil3.jpg";
import chaise from "../../images/Chaise en Velours.jpeg";
import chaise2 from "../../images/Chaise de Salle à Manger.jpeg";
import cartItem from "../../images/flashbak.webp";
import cartItem2 from "../../images/AKBLOG-2.webp";
import cartItem3 from "../../images/Memphis-Design.webp";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";



function PagePrincipal() {
  // let [cartKey,setcartKey] = useState("");
  // const [cartItems, setCartItems] = useState([]);
  // const cartKey = "myCart";
  // Charger le panier depuis localStorage au chargement de la page
  

let [data,setData]= useState([]);


useEffect(()=>{
const requestProducts = async()=>{
let requete = await axios.get(`http://localhost:3003/get-AllProduct`);
if(requete.data)
setData(requete.data)
console.log(requete.data)}
requestProducts()
},[])



// const renderListOfMeuble = (data) => {
//   return data.map((meuble,i) => 
//   <div className="img-card" key={i}>
//   <h3>{meuble.name}</h3>
// <p>
// {meuble.price}<strike>$40.00</strike>
// </p>
// <div className="link-detail">
//   <Link to="/detail">See more</Link>
//   <Link to="/Cart">Add to cart</Link>
// </div>
// <div className="middle">
//   <div className="seeMore">
//     <Link to="/detail">See more</Link>
//   </div>
// </div>
// <div className="badge-overlay">
//   <span className="top-left badge orange">Sale 50% Off</span>
// </div>
// </div>)}


return (
    <>
      {/* <Cart cartItems={cartItems} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} cartKey={meuble._id} /> */}
      <header>
        <div className="gallery-item">
          <div className="container-img">
            <div className="img">
              <img src={meuble} alt="" loading="lazy" />
            </div>
          </div>
          <div className="container-img">
            <div className="img">
              <img src={accueil2} alt="" loading="lazy" />
            </div>
          </div>
          <div className="container-img">
            <div className="img">
              <img src={accueil3} alt="" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="header">
          <h1>Noyales </h1>
        </div>
      </header>

      <section className="produit">
        <div className="box">
          <div className="produit-box">
            <h2>Featured Products</h2>
            <a href="#product">View All Products</a>
          </div>
          <div className="img-box">
          
          { data.map((meuble,i) => 
  <div className="img-card" key={i}>

      <img src= {`http://localhost:3003/`+ meuble.img.img1.src} alt="" />
              
                <h3>{meuble.title}</h3>
              
              <p>{meuble.price}</p>
              <div className="link-detail">
                <Link to={"/detail/"+ meuble._id}>See more</Link>
                 <button 
                 onClick={() => {setcartKey(`${meuble._id}`);
                  addItemToCart({
            photo: `${`http://localhost:3003/`+ meuble.img.img1.src}`,
            name: `${meuble.title}`,
            price: `${meuble.price}`,
            description: `${meuble.description}`,
          })}}> <a className="addto" href="/cart"> Add to cart</a>
            </button>
              </div>
              <div className="middle">
                <div className="seeMore">
                  <Link to={"/detail/"+ meuble._id}>See more</Link>
                </div>
              </div>
            </div>)}
 
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="column-item">
              <h3>Casual Collection</h3>
              <img src={cartItem} alt="" />
              <p>We Help You Make Interior Design</p>
              <a href="">Shop Collection</a>
            </div>
            <div className="column-item">
              <h3>Basic Collection</h3>
              <a href="">Shop Collection</a>
              <p>Crafted with excellent material.</p>
              <img src={cartItem2} alt="" />
            </div>
            <div className="column-item">
              <h3>Best Selling Product</h3>
              <a href="">Shop Collection</a>
              <img src={cartItem3} alt="" />
            </div>
          </div>
        </div>
        {/* <hr /> */}
        <div className="discount">
          <h2>Get 25% Off Discount Coupons</h2>
          <div className="form-subscribe">
            <label htmlFor="email">Subscribe</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email addresse here"
              id="email"
            />
          </div>
        </div>
        <div className="discout-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst
            amet, metus, sit massa posuere maecenas. At tellus ut nunc amet vel
            egestas.
          </p>
        </div>
      </section>

      <section className="AllProduits">
        <div className="box-produits">
          <h2 id="product">Best Selling Products</h2>
          <ul>
            <li>
              <Link to="/product">All</Link>
            </li>
            <li>
              <Link to="/product">Chaise</Link>
            </li>
            <li>
              <Link to="/product">Table</Link>{" "}
            </li>
            <li>
              <Link to="/product">Lampe</Link>
            </li>
            <li>
              <Link to="/product">Sofa</Link>
            </li>
            <li>
              <Link to="/product">Fauteuil</Link>
            </li>
          </ul>
          <div className="img-box">
            <div className="img-card">
              <img src={chaise2} alt="" />
              <a href="">
                <h3>Chaise de Salle à Manger</h3>
              </a>
              <p>
                $10.00 <strike>$40.00</strike>
              </p>
              <div className="link-detail">
                <Link to="/detail">See more</Link>
                <Link to="/Cart">Add to cart</Link>
              </div>
              <div className="middle">
                <div className="seeMore">
                  <Link to="/detail">See more</Link>
                </div>
              </div>
              <div className="badge-overlay">
                <span className="top-left badge orange">SALE 75% OFF</span>
              </div>
            </div>
            <div className="img-card">
              <img src={chaise} alt="" />
              <a href="">
                <h3>Chaise en Velours</h3>
              </a>
              <p>$40.00</p>
              <div className="link-detail">
                <Link to="/detail">See more</Link>
                <Link to="/Cart">Add to cart</Link>
              </div>
              <div className="middle">
                <div className="seeMore">
                  <Link to="/detail">See more</Link>
                </div>
              </div>
            </div>
            <div className="img-card">
              <img src={chaise2} alt="" />
              <a href="">
                <h3>Chaise de Salle à Manger</h3>
              </a>
              <p>$40.00</p>
              <div className="link-detail">
                <Link to="/detail">See more</Link>
                <Link to="/Cart">Add to cart</Link>
              </div>
              <div className="middle">
                <div className="seeMore">
                  <Link to="/detail">See more</Link>
                </div>
              </div>
            </div>
            <div className="img-card">
              <img src={chaise} alt="" />
              <a href="">
                <h3>Chaise en Velours</h3>
              </a>
              <p>$40.00</p>
              <div className="link-detail">
                <Link to="/detail">See more</Link>
                <Link to="/Cart">Add to cart</Link>
              </div>
              <div className="middle">
                <div className="seeMore">
                  <Link to="/detail">See more</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="img-box">
            <div className="img-card">
              <img src={chaise2} alt="" />
              <a href="">
                <h3>Chaise de Salle à Manger</h3>
              </a>
              <p>$40.00</p>
              <div className="link-detail">
                <Link to="/detail">See more</Link>
                <Link to="/Cart">Add to cart</Link>
              </div>
              <div className="middle">
                <div className="seeMore">
                  <Link to="/detail">See more</Link>
                </div>
              </div>
            </div>
            <div className="img-card">
              <img src={chaise} alt="" />
              <a href="">
                <h3>Chaise en Velours</h3>
              </a>
              <p>$40.00</p>
              <div className="link-detail">
                <Link to="/detail">See more</Link>
                <Link to="/Cart">Add to cart</Link>
              </div>
              <div className="middle">
                <div className="seeMore">
                  <Link to="/detail">See more</Link>
                </div>
              </div>
            </div>
            <div className="img-card">
              <img src={chaise2} alt="" />
              <a href="">
                <h3>Chaise de Salle à Manger</h3>
              </a>
              <p>$40.00</p>
              <div className="link-detail">
                <Link to="/detail">See more</Link>
                <Link to="/Cart">Add to cart</Link>
              </div>
              <div className="middle">
                <div className="seeMore">
                  <Link to="/detail">See more</Link>
                </div>
              </div>
            </div>
            <div className="img-card">
              <img src={chaise} alt="" />
              <a href="">
                <h3>Chaise en Velours</h3>
              </a>
              <p>
                $30.00 <strike>$40.00</strike>
              </p>
              <div className="link-detail">
                <Link to="/detail">See more</Link>
                <Link to="/Cart">Add to cart</Link>
              </div>
              <div className="middle">
                <div className="seeMore">
                  <Link to="/detail">See more</Link>
                </div>
              </div>
              <div className="badge-overlay">
                <span className="top-left badge orange">SALE 25% OFF</span>
              </div>
            </div>
          </div>
          <div className="pagination">
            <a href="#">&laquo;</a>
            <a href="#">1</a>
            <a href="#" className="active">
              2
            </a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">&raquo;</a>
          </div>
        </div>
      </section>
          
        
    </>
  );
}


export default PagePrincipal;
