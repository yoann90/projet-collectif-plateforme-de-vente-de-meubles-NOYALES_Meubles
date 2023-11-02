import "./PagePrincipal.css";
import React, { useState, useEffect } from "react";
import meuble from "../../images/canapés-colorés.jpeg";
import accueil2 from "../../images/accueil2.jpg";
import accueil3 from "../../images/accueil3.jpg";
import chaise from "../../images/Chaise en Velours.jpeg";
import chaise2 from "../../images/Chaise de Salle à Manger.jpeg";
import cartItem from "../../images/flashbak.webp";
import cartItem2 from "../../images/AKBLOG-2.webp";
import cartItem3 from "../../images/Memphis-Design.webp";
// import detail from  "../page detail/page detail"
// import connexion from  "../page connexion/page connexion"
// import React from 'react'

function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-bar">
          <ul className="nav-item">
            <li>
              <a href="#product">Product</a>
            </li>
            <div className="search-bar">
              <label htmlFor="search-bar">search Products</label>
              <input
                type="search"
                name="search-bar"
                className="search"
                id="search-bar"
                placeholder="Enter your product"
              />
            </div>
            <li>
              <a href="">Registration/Login</a>
            </li>
            <li>
              <a href="">Cart</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
function Header() {
  return (
    <>
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
    </>
  );
}

function Produit() {
 
 
  return (
    <>
      <section className="produit">
        <div className="box">
          <div className="produit-box">
            <h2>Featured Products</h2>
            <a href="#product">View All Products</a>
          </div>
          <div className="img-box">
            <div className="img-card">
              <img src={chaise2} alt="" />
              <a href="">
                <h3>Chaise de Salle à Manger</h3>
              </a>
              <p>
                $20.00 <strike>$40.00</strike>
              </p>
              <div className="link-detail">
                <a href="/detail">See more</a>
                <a href="">Add to cart</a>
              </div>
              <div className="middle">
                <div className="seeMore">
                  <a href="">See more</a>
                </div>
              </div>
              <div className="badge-overlay">
                <span className="top-left badge orange">Sale 50% Off</span>
              </div>
            </div>
            <div className="img-card">
              <img src={chaise} alt="" />
              <a href="">
                <h3>Chaise en Velours</h3>
              </a>
              <p>$40.00</p>
              <div className="link-detail">
                <a href="">See more</a>
                <a href="">Add to cart</a>
              </div>
              <div className="middle">
                <div className="seeMore">
                  <a href="">See more</a>
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
                <a href="">See more</a>
                <a href="">Add to cart</a>
              </div>
              <div className="middle">
                <div className="seeMore">
                  <a href="">See more</a>
                </div>
              </div>
            </div>
            <div className="img-card">
              <img src={chaise} alt="" />
              <a href="">
                <h3>Chaise en Velours</h3>
              </a>
              <p>
                $10.00 <strike>$40.00</strike>
              </p>
              <div className="link-detail">
                <a href="">See more</a>
                <a href="">Add to cart</a>
              </div>
              <div className="middle">
                <div className="seeMore">
                  <a href="">See more</a>
                </div>
              </div>
              <div className="badge-overlay">
                <span className="top-left badge orange">Sale 75% OFF</span>
              </div>
            </div>
            <div className="img-card">
              <img src={chaise2} alt="" />
              <a href="">
                <h3>Chaise de Salle à Manger</h3>
              </a>
              <p>$40.00</p>
              <div className="link-detail">
                <a href="">See more</a>
                <a href="">Add to cart</a>
              </div>
              <div className="middle">
                <div className="seeMore">
                  <a href="">See more</a>
                </div>
              </div>
            </div>
            <div className="img-card">
              <img src={chaise} alt="" />
              <a href="">
                <h3>Chaise en Velours</h3>
              </a>
              <p>$40.00 </p>
              <div className="link-detail">
                <a href="">See more</a>
                <a href="">Add to cart</a>
              </div>
              <div className="middle">
                <div className="seeMore">
                  <a href="">See more</a>
                </div>
              </div>
            </div>
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
        <hr />
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
    </>
  );
}

function AllProduits() {
  return (
    <>
      <section className="AllProduits">
        <div className="box-produits">
          <h2 id="product">Best Selling Products</h2>
          <ul>
            <li>
              <a href="">All</a>
            </li>
            <li>
              <a href="">Chaise</a>
            </li>
            <li>
              <a href="">Table</a>
            </li>
            <li>
              <a href="">Lampe</a>
            </li>
            <li>
              <a href="">Sofa</a>
            </li>
            <li>
              <a href="">Fauteuil</a>
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
                <a href="">See more</a>
                <a href="">Add to cart</a>
              </div>
              <div className="middle">
                <div className="seeMore">
                  <a href="">See more</a>
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
                <a href="">See more</a>
                <a href="">Add to cart</a>
              </div>
              <div className="middle">
                <div className="seeMore">
                  <a href="">See more</a>
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
                <a href="">See more</a>
                <a href="">Add to cart</a>
              </div>
              <div className="middle">
                <div className="seeMore">
                  <a href="">See more</a>
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
                <a href="">See more</a>
                <a href="">Add to cart</a>
              </div>
              <div className="middle">
                <div className="seeMore">
                  <a href="">See more</a>
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
                <a href="">See more</a>
                <a href="">Add to cart</a>
              </div>
              <div className="middle">
                <div className="seeMore">
                  <a href="">See more</a>
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
                <a href="">See more</a>
                <a href="">Add to cart</a>
              </div>
              <div className="middle">
                <div className="seeMore">
                  <a href="">See more</a>
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
                <a href="">See more</a>
                <a href="">Add to cart</a>
              </div>
              <div className="middle">
                <div className="seeMore">
                  <a href="">See more</a>
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
                <a href="">See more</a>
                <a href="">Add to cart</a>
              </div>
              <div className="middle">
                <div className="seeMore">
                  <a href="">See more</a>
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

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    
    document.documentElement.scrollTop = 0;
  };

  return (
    <div>
      {showButton && (
        <button id="myBtn" onClick={scrollToTop} style={{ display: "block" }}>
          Top
        </button>
      )}
    </div>
  );
}

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const cartKey = "myCart";

  // Charger le panier depuis localStorage au chargement de la page
  useEffect(() => {
    const storedCart = localStorage.getItem(cartKey);
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    } 
  }, []);

  // Mettre à jour localStorage chaque fois que le panier change
  // useEffect(() => {
  //   console.log("helloe",cartItems);
  //   localStorage.setItem(cartKey, JSON.stringify(cartItems));
  // }, [cartItems]);


  const addItemToCart = (item) => {

    localStorage.setItem(cartKey, JSON.stringify([...cartItems, item]));
    setCartItems([...cartItems, item]);

  };

  const removeItemFromCart = (itemIndex) => {
    const updatedCart = cartItems.filter((_, index) => index !== itemIndex);
    localStorage.setItem(cartKey, JSON.stringify(updatedCart));

    setCartItems(updatedCart);
  };

  // Calculer le total du panier
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h2>Panier</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeItemFromCart(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p>
      <button onClick={() => addItemToCart({ name: "Produit", price: 10 })}>
        Ajouter au panier
      </button>
    </div>
  );
}





  


export { Navbar, Header, Produit, AllProduits, Cart, ScrollToTopButton };
