import {Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";
const products = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  }
]
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}></Route>
      <Route path="/product" element={<ProductList products={products}/>}></Route>
      <Route path="/productitem" element={<ProductCard/>}></Route>
    </Routes>
  );
}

export default App;
