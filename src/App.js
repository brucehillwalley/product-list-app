// import Header from "./components/header/Header";
import Products from "./components/product/ProductList";
import HeaderH from "./components/headerHam/HeaderH.jsx"
//? farklı ismle import edebiliriz
import { products, categories } from "./helper/data";
import "./App.scss";

function App() {
  console.log(products);
  return (
    <div>
      {/* <Header categories={categories} text="Product List" /> */}
      <HeaderH categories={categories} />
      <Products products={products} />
    </div>
  );
}

export default App;
