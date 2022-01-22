import MainCarousel from "./components/corousel/MainCarousel";
import Product from "./components/Product/Product";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header/>
      <main>
        <MainCarousel />
        <Product />
      </main>
    </>

  );
}

export default App;
