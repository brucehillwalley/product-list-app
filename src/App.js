import Header from "./components/header/Header";
import Products from "./components/product/ProductList";
//? farklı ismle import edebiliriz
import { products, categories } from "./helper/data";
import "./App.scss";

function App() {
  console.log(products);
  return (
    <div>
      <Header categories={categories} text="Product List" />
      <Products products={products} />
    </div>
  );
}

export default App;
