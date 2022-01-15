import './App.css';
import Main from './Main';
import ProductList from './ProductList';
import { useState, useEffect } from "react";
import FiltersRange from './FiltersRange';

function App() {

  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState("");
  const [display, setDisplay] =useState([]);
  const url = "https://demo7303877.mockable.io/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setProducts(json.products);
        setFilters(json.filters);
        setDisplay(json.products);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [url]);

  return (

    <article>
      <section className='bg-black p-6 text-white flex row-start-1 '>
        <p className="font-domine  text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700 text-5xl tracking-wider">LUXURI</p>
        <Main products={products} setDisplay={setDisplay} />
      </section>
      <div className='grid grid-flow-row-dense grid-flow-col grid-cols-4'>
        <section>
          <FiltersRange filters={filters} setDisplay={setDisplay} products={products}/>
        </section>
        <section className='col-span-3 ml-16'>
          <ProductList list={display} />
        </section>
      </div>
    </article>
  );
}

export default App;
