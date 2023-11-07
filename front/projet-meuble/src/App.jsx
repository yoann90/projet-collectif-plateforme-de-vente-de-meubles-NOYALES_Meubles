import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Furniture from "./PageDetail/components/PageDetail";
import UserConnexion from "./PageConnexion/page_connexion";
import Register from "./PageConnexion/register";
import PagePrincipal from "./PagePrincipal/PagePrincipal.jsx";
import Navbar from "./Navbar";
import Cart from "./Cart";
import TopButton from "./TopButton";
import AdminPage from "./PageAdmin/Admin.jsx"
// import ShopCategory from "./ShopCategory";
const Auth = ({children}) => {
const token = localStorage.getItem("token")
if (!token){ 
return <UserConnexion/>}
console.log("ok")
  return children
}
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <TopButton />
        <Routes>
          <Route path="/detail/:id" element={<Furniture />} />""
""          <Route path="/PageConnexion" element={<UserConnexion />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/" element={<PagePrincipal />} />
          <Route path="/Admin" element={<Auth><AdminPage /> </Auth>} />

          {/* <Route  path="/Chaise" element={<ShopCategory category="chaise" /> } />
      <Route  path="/Table" element={<ShopCategory category="Table" /> } />
      <Route  path="/Lampe" element={<ShopCategory category="Lampe" /> } />
      <Route  path="/Sofa" element={<ShopCategory category="Sofa" /> } />
      <Route  path="/Fauteuil" element={<ShopCategory category="Fauteuil" /> } /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
