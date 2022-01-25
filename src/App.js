import { useSelector } from "react-redux";
import MainCarousel from "./components/corousel/MainCarousel";
import Product from "./components/Product/Product";
import Header from "./components/header/Header";
import Cart from "./components/cart/Cart";

function App() {
  const showCart = useSelector(state => state.cart.showCart);

  return (
    <>
      <Header/>
      {showCart && <Cart/>}
      <main>
        <MainCarousel />
        <Product />
      </main>
    </>

  );
}

export default App;
